import * as React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from "react-native";

import TrendProduct from "./components/TrendProduct";
import TrendImage from "./components/TrendImage";

import { getSneakerTrend } from '../api/scrapysneake.js';

export default function TrendView() {;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    findTrend();
  }, []);

  function findTrend() {
    getSneakerTrend().then(data => { setData(data) });
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
