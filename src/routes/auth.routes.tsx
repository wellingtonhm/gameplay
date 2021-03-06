import React from "react";
import { createStackNavigator } from '@react-navigation/stack'



import { Home } from "../screens/Home";
import { Signin } from "../screens/Signin";

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'transparent'
                },
                headerShown: false
            }}
        >
            <Screen
                name="Signin"
                component={Signin}
            />
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator >
    )

}