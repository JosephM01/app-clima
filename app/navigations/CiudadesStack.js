import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Ciudades from "../screens/Ciudades";

const Stack = createStackNavigator();

export default function CiudadesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ciudades"
        component={Ciudades}
        options={{ title: "Ciudades" }}
      />
    </Stack.Navigator>
  );
}
