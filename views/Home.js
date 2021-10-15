import * as React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { Header } from 'react-native-elements';

import { getSneakerAdvert, getSneakerCount } from "../api/scrapysneake.js";

export default function HomeView() {
  const [counter, setCounter] = React.useState(null);
  const [advert, setAdvert] = React.useState("");

  React.useEffect(() => {
    findAdvert();
    findSneakerCount();
  }, []);

  function findAdvert() {
    getSneakerAdvert().then(data => { 
      let max = data.image_path.length;
      let index = Math.floor(Math.random() * max);
      setAdvert(data.image_path[index]);
    });
  }

  function findSneakerCount() {
    getSneakerCount().then(data => setCounter(data.days0.counter_sneaker));
  }

  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
      <Header
        backgroundColor="#8d39fa"
        placement="center"
        centerComponent={{ text: 'Home', style: { color: '#fff', fontSize: 20 } }}
      />
      <Image source={{uri: advert,}} style={styles.image}/>
      <Text style={styles.title}>Bienvenue sur sneake toi bien</Text>
      <Text style={styles.welcome}>Le meilleur comparateur de prix de sneakers, afin que tu puisse trouvé ta paire au moin chère</Text>
      <Text style={styles.available}>Paire actuellement disponible : </Text>
      <Text style={styles.counter}>{counter}</Text>
      <Text style={styles.welcome}>Trouve tes sneakers au meilleur prix parmit { counter } paire disponible sur notre plateforme </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    color: "#72726e",
    fontWeight: "bold"
  },
  welcome: {
    padding: 5,
    marginTop: 5,
    textAlign: "center"
  },
  available: {
    marginTop: 10,
    fontSize: 16,
    color: "#72726e",
    fontWeight: "bold"
  },
  counter: {
    color: "#8d39fa",
    fontSize: 22,
    marginTop: 10,
    fontWeight: "bold"
  }
});

