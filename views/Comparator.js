import * as React from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, TextInput, FlatList, Pressable } from "react-native";
import { Header } from 'react-native-elements';

import ComparatorImage from "./components/ComparatorImage";
import ComparatorProduct from "./components/ComparatorProduct";

import { getSneakerByModel } from '../api/scrapysneake.js';

export default function ComparatorView() {
  const [sneakerSearch, setSneakerSearch] = React.useState("");
  const [sneaker, setSneaker] = React.useState([]);

  function findModelWrite(model) {
    setSneakerSearch(model);
  }

  function findSneaker() {
    getSneakerByModel(sneakerSearch).then(data => { setSneaker(data) });
  }

  return (
    <View style={styles.container}>
      <Header
        backgroundColor="#8d39fa"
        placement="center"
        centerComponent={{ text: 'Comparator', style: { color: '#fff', fontSize: 20 } }}
      />
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="find sneakers at the best price"
          onChangeText={text => findModelWrite(text)}
        />
        <Pressable style={styles.btn} onPress={findSneaker}>
          <Text style={styles.btnText}>Search !</Text>
        </Pressable>
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
  input: {
    height: 40,
    marginHorizontal: 12,
    marginTop: 12,
    borderWidth: 2,
    borderColor: "#8d39fa",
    padding: 10,
  },
  btn: {
    height: 40,
    marginHorizontal: 12,
    marginTop: 2,
    padding: 10,
    backgroundColor: "#8d39fa",
    color: "#fff"
  },
  btnText: {
    color: "#fff",
    textAlign: "center"
  }
});
