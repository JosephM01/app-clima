import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./HomeStack";
import CiudadesStack from "./CiudadesStack";
import TeamStack from "./TeamStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="home"
          component={HomeStack}
          options={{ title: "Home" }}
        />
        <Tab.Screen
          name="ciudades"
          component={CiudadesStack}
          options={{ title: "Ciudades" }}
        />
        <Tab.Screen
          name="team"
          component={TeamStack}
          options={{ title: "Quienes somos" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
