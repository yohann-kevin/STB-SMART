import * as React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function ComparatorImage(props) {
  const [image, setImage] = React.useState(props.image);
  const [seller, setSeller] = React.useState(props.seller);

  React.useEffect(() => {
    manageSellerImage();
  }, []);

  function manageSellerImage() {
    if (seller.toLowerCase() == "foot locker") setImage("https://" + image);
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
    backgroundColor: "#cccccc",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15
  },
  image: {
    width: 250,
    height: 200,
  }
});
