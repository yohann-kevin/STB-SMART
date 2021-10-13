import * as React from "react";
import { View, Text, Button } from "react-native";

import axios from "axios";

import TrendProduct from "./components/TrendProduct";

export default function TrendView() {
  let [trend, setTrend] = React.useState(null);
  let trendProduct = [];

  React.useEffect(() => {
    findTrend();
  }, []);

  function findTrend() {
    let url = "https://scrapysneake.herokuapp.com/trend";

    axios.get(url).then(response => {
      setTrend(response.data);
      displaySneaker();
    });
  }

  function displaySneaker() {
    for (let i = 0; i < trend.length; i++) {
      console.log(trend[i].model);
      trendProduct.push(
        <TrendProduct sneaker={trend[i]}/>
      );
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Trend Screen</Text>
      {trendProduct}
    </View>
  );
}
