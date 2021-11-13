import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Team from "../screens/Team";

const Stack = createStackNavigator();

export default function TeamStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="team"
        component={Team}
        options={{ title: "Quienes somos" }}
      />
    </Stack.Navigator>
  );
}
