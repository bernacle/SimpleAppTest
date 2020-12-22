import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";
import Home from "../pages/Home";

const App = createStackNavigator();

export const Routes: React.FC = () => (
    <App.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <App.Screen name="Home" component={Home} />
        <App.Screen name="Login" component={Login} />
    </App.Navigator>
);
