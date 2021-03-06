import React, {FunctionComponent} from 'react'
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "../screens/homeScreen";
import ProfileScreen from "../screens/profileScreen";
import MessagesScreen from "../screens/messagesScreens";
import SettingsScreen from "../screens/settingsScreen";
import CustomDrawer from "../components/customNavigator/customDrawer";
import { AntDesign, Feather } from '@expo/vector-icons';
import fontSize from "../components/themes/fontSize";
import colors from "../components/themes/colors";
import HeaderComponent from "../components/headers/headerComponent";

const Drawer = createDrawerNavigator()


const DrawerNavigator : FunctionComponent = () =>{
    return(
        <Drawer.Navigator screenOptions={{drawerLabelStyle:{marginLeft:-25, fontSize:15,}, drawerActiveBackgroundColor:colors.primary, drawerActiveTintColor:colors.white, drawerInactiveTintColor:colors.accent}} drawerContent={props => <CustomDrawer {...props} />} initialRouteName={'Home'}>
            <Drawer.Screen name={'Home'} component={HomeScreen} options={{
                drawerIcon:({color,}) =>(
                    <AntDesign name="home" size={24} color={color} />
                ) , header:({navigation})=> <HeaderComponent navigation={navigation} />
            }}  />
            <Drawer.Screen name={'Profile'} component={ProfileScreen} options={{
                drawerIcon:({color,}) =>(
                    <Feather name="user" size={24} color={color} />
                )
            }} />
            <Drawer.Screen name={'Messages'} component={MessagesScreen} options={{
                drawerIcon:({color,}) =>(
                    <AntDesign name="message1" size={24} color={color} />
                )
            }} />
            <Drawer.Screen name={'Settings'} component={SettingsScreen} options={{
                drawerIcon:({color,}) =>(
                    <AntDesign name="setting" size={24} color={color} />
                )
            }}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator
