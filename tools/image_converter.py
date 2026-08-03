#!/usr/bin/env python3
"""
Mobile Image Optimizer

Optimizes JPG and PNG images for mobile app bundles.
- Reduces JPG quality to 75-85% (configurable)
- Optimizes PNG compression
- Optionally resizes oversized images
- Preserves aspect ratio
- Creates backups by default

Usage:
    python tools/image_converter.py /path/to/images/folder [--quality 80] [--max-size 1440] [--no-backup] [--recursive]
"""

import argparse
import os
import sys
from pathlib import Path
from PIL import Image
import shutil

# Target quality settings (0-100)
DEFAULT_JPG_QUALITY = 80
DEFAULT_PNG_QUALITY = 80  # 0-100 for PNG (different from JPG)

# For images larger than this (longest side), resize to fit
DEFAULT_MAX_SIZE = 1440


def optimize_image(file_path, quality=DEFAULT_JPG_QUALITY, max_size=DEFAULT_MAX_SIZE, backup=True):
    """Optimize a single image file."""
    try:
        with Image.open(file_path) as img:
            original_size = os.path.getsize(file_path)
            original_dims = img.size

            # Determine if we need to resize
            width, height = img.size
            needs_resize = max_size and max(width, height) > max_size

            if needs_resize:
                # Calculate new dimensions maintaining aspect ratio
                ratio = min(max_size / width, max_size / height)
                new_width = int(width * ratio)
                new_height = int(height * ratio)
                img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                print(f"  Resizing from {original_dims} to ({new_width}, {new_height})")
            else:
                print(f"  Keeping original size: {original_dims}")

            # Create backup if requested
            if backup and not os.path.exists(f"{file_path}.backup"):
                shutil.copy2(file_path, f"{file_path}.backup")
                print(f"  Backup created: {file_path}.backup")

            # Save optimized version
            ext = file_path.suffix.lower().rsplit('.', 1)[-1]

            if ext in ('jpg', 'jpeg', 'jpe', 'jfif'):
                # JPG optimization
                # Use 'optimize' and 'progressive' for better compression
                img.save(file_path, 'JPEG',
                         quality=quality,
                         optimize=True,
                         progressive=True)
            elif ext == 'png':
                # PNG optimization
                # Use optimizable PNG compression
                img.save(file_path, 'PNG',
                         optimize=True,
                         compress_level=9)
            else:
                print(f"  Skipping unsupported format: {ext}")
                return 0

            new_size = os.path.getsize(file_path)
            reduction = (1 - new_size / original_size) * 100

            print(f"  {file_path}")
            print(f"    Before: {original_size / 1024:.1f} KB")
            print(f"    After:  {new_size / 1024:.1f} KB")
            print(f"    Saved:  {reduction:.1f}%")

            return reduction

    except Exception as e:
        print(f"  ERROR processing {file_path}: {e}")
        return 0


def optimize_folder(folder_path, quality=DEFAULT_JPG_QUALITY, max_size=DEFAULT_MAX_SIZE,
                    backup=True, recursive=False):
    """Optimize all images in a folder."""
    folder_path = Path(folder_path)
    if not folder_path.exists():
        print(f"Error: Folder does not exist: {folder_path}")
        return

    total_original = 0
    total_optimized = 0
    file_count = 0

    def process_file(file_path):
        nonlocal total_original, total_optimized, file_count
        file_path = Path(file_path)
        ext = file_path.suffix.lower()[1:]  # Remove the dot

        if ext in ('jpg', 'jpeg', 'jpe', 'jfif', 'png'):
            print(f"\nProcessing: {file_path.name}")
            original_size = os.path.getsize(file_path)
            total_original += original_size
            reduction = optimize_image(file_path, quality, max_size, backup)
            new_size = os.path.getsize(file_path)
            total_optimized += new_size
            file_count += 1
            return True
        return False

    # Process files
    if recursive:
        for file_path in folder_path.rglob('*'):
            if file_path.is_file():
                process_file(file_path)
    else:
        for file_path in folder_path.glob('*'):
            if file_path.is_file():
                process_file(file_path)

    # Print summary
    if file_count > 0:
        total_reduction = (1 - total_optimized / total_original) * 100
        print(f"\n{'='*50}")
        print(f"SUMMARY")
        print(f"{'='*50}")
        print(f"Files processed: {file_count}")
        print(f"Total before:     {total_original / (1024*1024):.2f} MB")
        print(f"Total after:      {total_optimized / (1024*1024):.2f} MB")
        print(f"Total saved:      {total_reduction:.1f}%")
        print(f"Space reduction:  {(total_original - total_optimized) / (1024*1024):.2f} MB")
    else:
        print("No image files found to process.")


def main():
    parser = argparse.ArgumentParser(
        description='Optimize images for mobile app bundles'
    )
    parser.add_argument('folder', nargs='?', default='.',
                       help='Folder to optimize (default: current directory)')
    parser.add_argument('--quality', '-q', type=int, default=DEFAULT_JPG_QUALITY,
                       help=f'JPG quality (1-100, default: {DEFAULT_JPG_QUALITY})')
    parser.add_argument('--max-size', '-s', type=int, default=DEFAULT_MAX_SIZE,
                       help=f'Maximum dimension (px) - resize larger images (default: {DEFAULT_MAX_SIZE}, 0 to disable)')
    parser.add_argument('--no-backup', action='store_true',
                       help='Do not create backup files')
    parser.add_argument('--recursive', '-r', action='store_true',
                       help='Process subfolders recursively')
    parser.add_argument('--force', '-f', action='store_true',
                       help='Overwrite existing optimized files without confirmation')

    args = parser.parse_args()

    print(f"Mobile Image Optimizer")
    print(f"{'='*50}")
    print(f"Folder:      {args.folder}")
    print(f"JPG Quality: {args.quality}%")
    print(f"Max Size:    {args.max_size}px (0 = no resize)")
    print(f"Backup:      {'No' if args.no_backup else 'Yes'}")
    print(f"Recursive:   {'Yes' if args.recursive else 'No'}")
    print(f"{'='*50}")

    if args.max_size == 0:
        args.max_size = None  # Disable resizing

    optimize_folder(
        args.folder,
        quality=args.quality,
        max_size=args.max_size,
        backup=not args.no_backup,
        recursive=args.recursive
    )


if __name__ == "__main__":
    main()
