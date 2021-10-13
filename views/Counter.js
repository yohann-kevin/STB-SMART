import * as React from "react";
import { View, Text, Button } from "react-native";

export default function CounterView() {
  let [counter, setCounter] = React.useState(0);

  function incrementCounter() {
    let res = counter++;
    setCounter(res);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to stb-smart</Text>
      <Text>counter : {counter}</Text>
      <Button onPress={incrementCounter} title="click me !"/>
    </View>
  );
}
