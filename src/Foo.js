import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';

export default function Foo() {
  // const addToast = ....
  const [text, setText] = useState('');

  function sendToast() {
    // addToast(value);
  }

  return (
    <View>
      <TextInput value={text} onChangeText={(t) => setText(t)} />
      <Button onPress={sendToast} title="Enviar toast" />
    </View>
  );
}
