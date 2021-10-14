import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TrendProduct(props) {
  const [sneaker, setSneaker] = React.useState(props.sneaker);

  return (
    <View style={styles.item}>
      <Text>{ sneaker.model }</Text>
      <Text style={styles.price}>{ sneaker.price }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    flex: 1,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    marginBottom: 10
  },
  price: {
    textAlign: "right",
    flex: 2
  },
});

