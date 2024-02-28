import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import React, {useState} from 'react';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  Onpress: () => void;
  OnlongPress?: () => void;
}

export default function Fab({title, Onpress, position, OnlongPress}: Props) {
  const [contador, setContador] = useState(10);
  return (
    <View
      style={[
        styles.FabLocation,
        position === 'bl' ? styles.left : styles.right,
      ]}>
      <TouchableNativeFeedback
        onPress={Onpress}
        onLongPress={OnlongPress}
        background={TouchableNativeFeedback.Ripple('black', true, 30)}>
        <View style={styles.fab}>
          <Text style={styles.fabtext}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabtext: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },

  FabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
});
