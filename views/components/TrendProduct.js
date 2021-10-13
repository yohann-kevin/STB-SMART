import * as React from "react";
import { View, Text, Button } from "react-native";

export default function TrendProduct(props) {
  const [sneaker, setSneaker] = useState(props.sneaker);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{ sneaker.model }</Text>
    </View>
  );
}
