import * as React from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, TextInput, FlatList } from "react-native";

import ComparatorImage from "./components/ComparatorImage";
import ComparatorProduct from "./components/ComparatorProduct";

import { getSneakerByModel } from '../api/scrapysneake.js';

export default function ComparatorView() {
  const [sneakerSearch, setSneakerSearch] = React.useState("");
  const [sneaker, setSneaker] = React.useState([]);

  function findSneaker(model) {
    console.log(model);
    if (model != "") {
      getSneakerByModel(model).then(data => { setSneaker(data) });
    } else {
      setSneaker([]);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comparator Screen</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="find sneakers at the best price"
          onChangeText={text => findSneaker(text)}
        />
      </SafeAreaView>
       <FlatList
        data={sneaker}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <>
            <ComparatorImage image={item.image_path} />
            <ComparatorProduct sneaker={item} />
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    padding: 3,
    fontSize: 32,
    textAlign: "center",
    backgroundColor: "#8d39fa",
    color: "#fff"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
