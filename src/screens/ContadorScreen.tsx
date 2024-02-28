import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Fab from '../components/Fab';

export default function ContadorScreen() {
  const [contador, setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>contador: {contador}</Text>
      <Fab title="-1" Onpress={() => setContador(contador - 1)} position="bl" />
      <Fab title="+1" Onpress={() => setContador(contador + 1)} position="br" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  Text: {
    fontSize: 50,
    color: 'black',
    top: -15,
    textAlign: 'center',
  },
});
function useEffect(arg0: () => () => void) {
  throw new Error('Function not implemented.');
}
