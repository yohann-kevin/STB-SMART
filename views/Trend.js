import * as React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

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
            style={styles.list}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <>
                <TrendImage image={item.image_path} />
                <TrendProduct sneaker={item} />
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
  item: {
    padding: 20,
    marginHorizontal: 16,
  },
  title: {
    padding: 3,
    fontSize: 32,
    textAlign: "center",
    backgroundColor: "#8d39fa",
    color: "#fff"
  },
  price: {
    textAlign: "right"
  }
});
