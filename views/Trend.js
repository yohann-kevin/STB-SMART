import * as React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from "react-native";

import axios from "axios";

import TrendProduct from "./components/TrendProduct";
import TrendImage from "./components/TrendImage";

export default function TrendView() {;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    findTrend();
  }, []);

  function findTrend() {
    let url = "https://scrapysneake.herokuapp.com/trend";
    // let url = "https://scrapysneake.herokuapp.com/sneakers/find/most_wanted";

    axios.get(url).then(response => {
      setData(response.data);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trend</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity onPress={() => { Linking.openURL(item.image_path) }}>
              <TrendImage image={item.image_path} />
              <TrendProduct sneaker={item} />
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8d39fa"
  },
  title: {
    padding: 3,
    fontSize: 32,
    textAlign: "center",
    backgroundColor: "#8d39fa",
    color: "#fff"
  }
});
