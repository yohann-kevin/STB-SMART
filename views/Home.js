import * as React from "react";
import { View, Text, Button } from "react-native";
import { Header } from 'react-native-elements';

export default function HomeView() {
  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
      <Header
        backgroundColor="#8d39fa"
        placement="center"
        centerComponent={{ text: 'Home', style: { color: '#fff', fontSize: 20 } }}
      />
      <Text>Home Screen</Text>
    </View>
  );
}
