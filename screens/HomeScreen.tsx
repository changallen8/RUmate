import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Touchable } from "react-native";
import { Card } from "../components/Card";
import { Tile } from "react-native-elements";
import Layout from "../constants/Layout";

export default function HomeScreen() {
  const [people, setPeople] = useState([
    {
      pic: require("../assets/images/men/men1.jpg"),
      title: "Aaron",
      caption: "Sophomore, College Ave",
    },
    {
      pic: require("../assets/images/men/men2.jpg"),
      title: "Novak",
      caption: "Junior, College Ave",
    },
    {
      pic: require("../assets/images/men/men3.jpg"),
      title: "Justin",
      caption: "Senior, College Ave",
    },
    {
      pic: require("../assets/images/men/men4.jpg"),
      title: "Tony",
      caption: "Freshman, Livingston",
    },
    {
      pic: require("../assets/images/men/men5.jpg"),
      title: "Leo",
      caption: "Sophomore, Busch",
    },
    {
      pic: require("../assets/images/men/men6.jpg"),
      title: "Ronald",
      caption: "Senior, Off-Campus",
    },
    {
      pic: require("../assets/images/men/men7.jpg"),
      title: "Johnny",
      caption: "Senior, Off-Campus",
    },
    {
      pic: require("../assets/images/men/men8.jpg"),
      title: "Chandler",
      caption: "Junior, Cook/Doug",
    },
    {
      pic: require("../assets/images/men/men9.jpg"),
      title: "Joey",
      caption: "Sophomore, College Ave",
    },
    {
      pic: require("../assets/images/men/men10.jpg"),
      title: "Alfie",
      caption: "Senior, Off-Campus",
    },
  ]);

  return (
    <View>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <Tile
            imageSrc={item.pic}
            imageContainerStyle={styles.imageContainer}
            activeOpacity={0.9}
            title={item.title}
            titleStyle={styles.title}
            caption={item.caption}
            captionStyle={styles.caption}
            containerStyle={styles.container}
            featured
          />
        )}
      />
    </View>
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
});
