import React, {FunctionComponent} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { DrawerContentScrollView} from "@react-navigation/drawer";
// import { AntDesign, Feather } from '@expo/vector-icons';
import { Entypo, AntDesign, Ionicons, MaterialIcons, Feather, Foundation} from '@expo/vector-icons';
import CustomDrawerItem from "./customDrawerItem";
import colors from "../themes/colors";


type props = {
    navigation?: any
    selectedTab:any,
    setSelectedTab:(label:any)=>void
}
const CustomDrawerContent : FunctionComponent<props> = ({navigation, selectedTab, setSelectedTab}) =>{
    return(
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{flex:1}}
        >
            <View style={styles.container}>
                <View style={{alignItems:'flex-start', justifyContent:'center'}}>
                    <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}} onPress={()=>navigation.closeDrawer()}>
                        <Entypo name="cross" size={24} color="white" />

                    </TouchableOpacity>

                </View>

                <TouchableOpacity onPress={()=>{}} style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
                    <Image source={require('../../../assets/profile.jpg')} style={styles.image} />
                    <View style={{marginLeft:10}}>
                        <Text style={{fontWeight:'bold'}}>Burdy Holmes</Text>
                        <Text>View your profile</Text>
                    </View>

                </TouchableOpacity>

                <View style={{flex:1, marginTop:10}}>

                    <CustomDrawerItem
                        label={'Home'}
                        isFocused = {selectedTab === 'Home'}
                        icon={<AntDesign name="home" size={24} color={colors.white}  />}
                        onPress={()=> {
                            console.log('I want to see you', selectedTab)
                        // setSelectedTab('Home')
                        // navigation.navigate('Home')
                    }} />
                    <CustomDrawerItem label={'Wallet'} icon={<AntDesign name="wallet" size={24} color={colors.white} />} onPress={()=>setSelectedTab('Wallet')} />
                    <CustomDrawerItem label={'Notification'} icon={<Ionicons name="notifications-outline" size={24} color={colors.white} />}  onPress={()=>setSelectedTab('Notification')}/>
                    <CustomDrawerItem label={'Favorites'} icon={<MaterialIcons name="favorite-border" size={24} color={colors.white} />} onPress={()=>setSelectedTab('Favorites')} />
                    <View style={{height:0.5, marginVertical:5, marginLeft:15, backgroundColor:colors.white}} />
                    <CustomDrawerItem label={'Track Your Order'} icon={<Ionicons name="md-location-outline" size={24} color={colors.white} />} onPress={()=>setSelectedTab('Track Your Order')} />
                    <CustomDrawerItem label={'Coupons'} icon={<Foundation name="ticket" size={24} color={colors.white} />} onPress={()=>setSelectedTab('Coupons')} />
                    <CustomDrawerItem label={'Settings'} icon={<AntDesign name="setting" size={24} color={colors.white} />} onPress={()=>setSelectedTab('Settings')} />
                    <CustomDrawerItem label={'Invite a Friend'} icon={<Feather name="user-plus" size={24} color={colors.white} />} onPress={()=>setSelectedTab('Invite a friend')} />
                    <CustomDrawerItem label={'Help Center'} icon={<Ionicons name="help-buoy-sharp" size={24} color={colors.white} />} onPress={()=>setSelectedTab('Help Center')} />


                </View>
                <View>
                    <CustomDrawerItem label={'Logout'} icon={<MaterialIcons name="logout" size={24} color={colors.white} />} onPress={()=>setSelectedTab('Logout')} />
                </View>

            </View>

        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10

    },
    image:{
        height:60,
        width:60,
        borderRadius:40,

    }
})

export default CustomDrawerContent
