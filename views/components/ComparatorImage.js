import * as React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function ComparatorImage(props) {
  const [image, setImage] = React.useState(props.image);

  return (
    <View style={styles.container}>
      <Image source={{uri: image,}} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 20,
    backgroundColor: "#cccccc",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15
  },
  image: {
    width: 250,
    height: 200,
  }
});
