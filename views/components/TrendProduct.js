import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TrendProduct(props) {
  const [sneaker, setSneaker] = React.useState(props.sneaker);

  return (
    <View style={styles.item}>
      <Text style={styles.model}>{ sneaker.model }</Text>
      <Text style={styles.price}>{ sneaker.price }</Text>
      <Text style={styles.seller}>Disponible chez <Text style={styles.sellerName}>{sneaker.seller}</Text></Text>
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
    flexWrap: "wrap",
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    marginBottom: 10
  },
  model: {
    width: "75%"
  },
  price: {
    textAlign: "right",
    flex: 2,
    width: "25%"
  },
  seller: {
    marginTop: 10,
    width: "100%"
  },
  sellerName: {
    color: "orange"
  }
});

