import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
//import * as React from "react";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";

const screens = {
  HomeScreen: {
    screen: HomeScreen,
  },
  DetailsScreen: {
    screen: DetailsScreen,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

/*const DetailsStack = createStackNavigator<DetailsParamList>();

function DetailsNavigator() {
  return (
    <DetailsStack.Navigator>
      <DetailsStack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{ headerTitle: "Details" }}
      />
    </DetailsStack.Navigator>
  );
}*/
