import * as React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function TrendImage(props) {
  const [image, setImage] = React.useState(props.image.image_path);

  React.useEffect(() => {
    checkSeller();
  }, []);

  function checkSeller() {
    if (props.image.seller === "Foot Locker") setImage("https://" + image);
  }

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
    backgroundColor: "#efefef",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15
  },
  image: {
    width: 250,
    height: 200,
  }
});
