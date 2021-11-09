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
import HomeStack from "./homeStack";

const Drawer = createDrawerNavigator()


const DrawerNavigator : FunctionComponent = () =>{
    return(
        <Drawer.Navigator  screenOptions={{drawerLabelStyle:{marginLeft:-25, fontSize:15,}, drawerStyle:{flex:1, width:'65%', paddingRight:20, backgroundColor:'transparent'}, sceneContainerStyle:{backgroundColor:'transparent'}, drawerActiveBackgroundColor:colors.primary, drawerActiveTintColor:colors.white, drawerInactiveTintColor:colors.accent, drawerType:'slide', overlayColor:'transparent',}} drawerContent={(props) => <CustomDrawer {...props} />} initialRouteName={'Home'}>
            <Drawer.Screen name={'Home'} component={HomeStack} options={{
                drawerIcon:({color,}) =>(
                    <AntDesign name="home" size={24} color={color} />
                ) , headerShown:false,
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
