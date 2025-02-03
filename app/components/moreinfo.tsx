import { Modal, View, Text, Pressable, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
  name: string,
}>;

export default function ShowMoreInfoRoute({ isVisible, children, onClose, name }: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name}</Text>
          <Pressable onPress={onClose} style={{padding: 10}}>
            <MaterialIcons name="close" color="#fff" size={15} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '30%',
    width: '100%',
    borderRadius: 18,
    position: 'absolute',
    bottom: (Dimensions.get('window').height / 5),
  },
  titleContainer: {
    height: '15%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
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
