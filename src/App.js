import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Foo from './Foo';

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hola toasts!</Text>
        <Foo />
      </View>
    </SafeAreaView>
  );
}
