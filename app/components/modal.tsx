import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '../constants/colors';
import React from 'react';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
  name: string,
}>;

export default function ShowSectorInfo({ isVisible, children, onClose, name }: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
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
    height: '40%',
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
    opacity: 0.95
  },
  titleContainer: {
    height: '15%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.mainColorGreen,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 500,
  },
});
