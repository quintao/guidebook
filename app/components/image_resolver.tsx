import { Image } from 'react-native';

export default function ResolveImage(image_data: any) {
  return Image.resolveAssetSource(image_data.path)
}