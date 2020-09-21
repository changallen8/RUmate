import React from "react";
import { Image, SafeAreaView, StyleSheet, View, Button } from "react-native";
import { Divider, Icon, Text } from "react-native-elements";
import Layout from "../constants/Layout";

/*const Social = (name: Object) => (
  <Icon
    name={name}
    type="font-awesome"
    containerStyle={styles.iconContainer}
    size={32}
  />
);*/

const pressHandler = () => {};

class ProfileScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/men/men10.jpg")}
            style={styles.image}
          />
        </View>
        <Text h4 style={styles.name}>
          {"Tony"}
        </Text>
        <Text style={styles.desc}>Junior, Off-Campus</Text>
        <Divider style={styles.divider} />
        <Text>
          Interested in basketball, baseball, photography, and skateboarding
        </Text>
        {/* <Button onPress={pressHandler} title="Message Me" color="#cc0033" /> */}
        <Divider style={styles.divider} />
        <Text style={styles.desc}>Find me on Social here</Text>
        <View style={styles.socialLinks}>
          <Icon
            name="snapchat"
            type="font-awesome"
            containerStyle={styles.iconContainer}
            size={32}
          />
          <Icon
            name="instagram"
            type="font-awesome"
            containerStyle={styles.iconContainer}
            size={32}
          />
          <Icon
            name="facebook-square"
            type="font-awesome"
            containerStyle={styles.iconContainer}
            size={32}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    margin: 20,
  },
  image: {
    width: Layout.window.width - 60, // device width - some margin
    height: Layout.window.height / 2 - 60, // device height / 2 - some margin
    borderRadius: 20,
  },
  name: {
    color: "#5E5E5E",
    alignSelf: "flex-start",
    marginLeft: 30,
  },
  desc: {
    color: "#5E5E5E",
    alignSelf: "flex-start",
    marginTop: 0,
    marginHorizontal: 30,
    fontSize: 14,
  },
  divider: {
    backgroundColor: "#C0C0C0",
    width: Layout.window.width - 60,
    margin: 20,
  },
  socialLinks: {
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "row",
    width: Layout.window.width,
    marginLeft: 40,
  },
  iconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
});

export default ProfileScreen;
