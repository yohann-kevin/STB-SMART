import * as React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Header } from 'react-native-elements';

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
      <Header
        backgroundColor="#8d39fa"
        placement="center"
        centerComponent={{ text: 'Comparator', style: { color: '#fff', fontSize: 20 } }}
      />
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
  }
});
