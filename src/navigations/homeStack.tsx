import React, {FunctionComponent} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/homeScreen";
import HeaderComponent from "../components/headers/headerComponent";
import SettingsScreen from "../screens/settingsScreen";
import MessagesScreen from "../screens/messagesScreens";
import ProfileScreen from "../screens/profileScreen";
import {MESSAGES_SCREEN, PROFILE_SCREEN, SETTINGS_SCREEN} from "../constants/routeNames";

const Stack = createStackNavigator()

const HomeStack : FunctionComponent = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name={'Homer'} component={HomeScreen} options={{header: ({navigation}) => (<HeaderComponent navigation={navigation} />) }}  />
            <Stack.Screen name={SETTINGS_SCREEN} component={SettingsScreen}   />
            <Stack.Screen name={MESSAGES_SCREEN} component={MessagesScreen}   />
            <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen}   />

        </Stack.Navigator>
    )
}

export default HomeStack
