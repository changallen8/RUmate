import React from "react";
import { StyleSheet, View } from "react-native";
import { Tile } from "react-native-elements";
import Layout from "../constants/Layout";

//const BOTTOM_BAR_HEIGHT = !Platform.isPad ? 29 : 49

interface ICard {
  pic: any;
  title: string;
  caption: string;
}

export const Card = ({ pic, title, caption }: ICard) => (
  <Tile
    imageSrc={pic}
    imageContainerStyle={styles.imageContainer}
    activeOpacity={0.9}
    title={title}
    titleStyle={styles.title}
    caption={caption}
    captionStyle={styles.caption}
    containerStyle={styles.container}
    featured
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    width: Layout.window.width - 30,
    height: Layout.window.height,
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
