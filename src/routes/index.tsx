import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";
import Home from "../pages/Home";

const { Screen, Navigator } = createStackNavigator();

const Routes: React.FC = () => (
    <Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Screen name="Login" component={Login} />
        <Screen name="Home" component={Home} />
    </Navigator>
);

export default Routes