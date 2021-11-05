import React, {FunctionComponent} from 'react'
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import colors from "../components/themes/colors";
import { AntDesign } from '@expo/vector-icons';

type props={
    props:any
}


const CustomDrawer : FunctionComponent<props> = (props) =>{
    return(
        <View style={styles.container}>
            <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerStyle}  >
                <ImageBackground source={require('../../assets/bg.png')} style={{padding:20}} >
                <Image source={require('../../assets/profile.jpg')} style={styles.image} />
                <Text style={{fontWeight:'bold', fontSize:18}}>James Paul</Text>
                <Text style={{color:colors.black}}>Followers 530K</Text>
                </ImageBackground>
                <View style={styles.itemList}>
                    <DrawerItemList {...props}  />
                </View>


            </DrawerContentScrollView>
            <View style={styles.bottom}>
                <TouchableOpacity onPress={()=>{}} style={styles.touchable}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <AntDesign name="sharealt" size={22} color="black" />
                        <Text style={{fontSize:15, marginLeft:15}}>Tell a friend</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}} style={styles.touchable}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <AntDesign name="logout" size={24} color="red" />
                        <Text style={{fontSize:15, marginLeft:15}}>Logout</Text>
                    </View>

                </TouchableOpacity>


            </View>
        </View>


    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    } ,
    drawerStyle:{
        backgroundColor:colors.primary
    } ,
    image:{
        height:80,
        width:80,
        borderRadius:40,
        marginBottom:10
    },
    itemList:{
        flex:1,
        backgroundColor:colors.white,
        paddingTop:10,
    },
    bottom:{
       padding:20,
        borderTopWidth:1,
        borderTopColor:'#ccc'
    },
    touchable:{
        paddingVertical:15
    }
})
export default CustomDrawer
