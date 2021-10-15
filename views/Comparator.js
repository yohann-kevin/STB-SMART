import * as React from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, TextInput, FlatList } from "react-native";

import axios from "axios";

export default function ComparatorView() {
  const [sneakerSearch, setSneakerSearch] = React.useState("");
  const [sneaker, setSneaker] = React.useState([]);

  function findSneaker(txt) {
    let url = "https://scrapysneake.herokuapp.com/trend";
    console.log(txt);
    axios.get(url).then(response => {
      // console.log(response.data);
      setSneaker(response.data);
    })
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
        // style={styles.list}
        data={sneaker}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text>{item.model}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#8d39fa"
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
