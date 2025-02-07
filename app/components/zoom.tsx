import { Modal, View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
  name: string,
}>;

export default function ShowZoomImage({ isVisible, children, onClose, name }: Props) {
  return (
    <Modal animationType='fade'  transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name}</Text>
          <Pressable onPress={onClose} style={{padding: 10}}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '50%',
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 18,
    position: 'absolute',
    bottom: (Dimensions.get('window').height / 5),
  },
  titleContainer: {
    height: 50,
    opacity: 0.8,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'green'
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 500,
  },
});
