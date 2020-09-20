import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { Tile } from "react-native-elements";
import Layout from "../constants/Layout";
import { BlurView } from "@react-native-community/blur";

export default function DetailsScreen() {
  const pressHandler = () => {};
  return (
    <Tile
      imageSrc={require("../assets/images/men/men6.jpg")}
      //title={"Ronald"}
      imageContainerStyle={styles.imageContainer}
      activeOpacity={0.9}
      titleStyle={styles.title}
      captionStyle={styles.caption}
      containerStyle={styles.container}
      //onPress={pressHandler}
      //caption={"Senior, Off-Campus"}
      contentContainerStyle={styles.contentContainer}
    >
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Hey, I'm Ronald
        </Text>
        <Text></Text>
        <Text>Senior looking for roommate off campus</Text>
        <Text></Text>
        <Text>Business Major</Text>
        <Text>Smoking allowed</Text>
        <Text>No quiet hours</Text>
        <Text>
          Interested in basketball, baseball, photography, and skateboarding
        </Text>
        <Text></Text>
        <Text>Message me for more info</Text>
      </View>
      <View style={{ height: 50 }}></View>
      <Button
        onPress={pressHandler}
        title="Message Me"
        color="#cc0033"
        accessibilityLabel="Learn more about this purple button"
      />
    </Tile>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  imageContainer: {
    width: Layout.window.width - 30,
    height: "94%",
    borderRadius: 20,
    marginVertical: 15,
    overflow: "hidden", // this does magic
  },
  title: {
    position: "absolute",
    left: 10,
    bottom: 30,
  },
  caption: {
    position: "absolute",
    left: 10,
    bottom: 10,
  },
  contentContainer: { height: "60%" },
});
