import { Modal, View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
  name: string,
}>;

export default function ShowZoomImage({ isVisible, children }: Props) {
  return (
    <Modal animationType='fade'  transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '80%',
    width: '100%',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: (Dimensions.get('window').height / 15),
  },
});
