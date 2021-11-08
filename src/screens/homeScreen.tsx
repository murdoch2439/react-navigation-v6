import React, {FunctionComponent} from 'react'
import {Button, Image, StyleSheet, Text, View} from "react-native";
import colors from "../components/themes/colors";
import CardForOptions from "../components/cards/cardForOptions";
import {MESSAGES_SCREEN, PROFILE_SCREEN, SETTINGS_SCREEN} from "../constants/routeNames";
import { AntDesign, Feather } from '@expo/vector-icons';

type props = {
    navigation?: any
}


const HomeScreen : FunctionComponent<props> = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row', flex:1}}>
                <View style={styles.content1}>

                </View>
                <View style={styles.content2}></View>
                {/*<View style={{position:'absolute', height:'100%'}}>*/}


                {/*</View>*/}
            </View>
            <View style={{backgroundColor:'transparent', height:'100%', width:'100%', position:'absolute'}}>
                {/*<Text>Hello world</Text>*/}
                    <View style={styles.content3}>
                        <CardForOptions screen={SETTINGS_SCREEN} navigation={navigation} primary icon={<AntDesign name="setting" size={24} color={colors.white} />}  />
                        <CardForOptions screen={MESSAGES_SCREEN} navigation={navigation} primary icon={<AntDesign name="message1" size={24} color={colors.white} />} />
                        <CardForOptions screen={PROFILE_SCREEN} navigation={navigation} primary icon={<Feather name="user" size={24} color={colors.white} />} />
                        {/*<Button title={'go to'} onPress={()=>navigation.navigate(SETTINGS_SCREEN)}  />*/}
                        {/*<Image source={require('../../assets/profile.jpg')} style={styles.image} />*/}




                    </View>
                    <View style={styles.content4}>
                        <CardForOptions screen={SETTINGS_SCREEN} navigation={navigation} white icon={<AntDesign name="setting" size={24} color={colors.primary} />} />
                        <CardForOptions screen={MESSAGES_SCREEN} navigation={navigation} white icon={<AntDesign name="message1" size={24} color={colors.primary} />}  />
                        <CardForOptions screen={PROFILE_SCREEN} navigation={navigation} white icon={<Feather name="user" size={24} color={colors.primary} />} />

                    </View>

            </View>


            {/*<Text>HomeScreen</Text>*/}

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:colors.danger,
        // flexDirection:'row',
        // justifyContent:'center',
        // alignItems:'center',
        // backgroundColor:'red'
    },
    content1:{
        flex:1,
        backgroundColor:colors.white ,
        // borderBottomRightRadius:50,

    },
    content2:{
        flex:1,
        backgroundColor:colors.primary,
        // borderTopRightRadius:50


    },
    content3:{
        flex:1,
        backgroundColor:colors.white ,
        borderBottomRightRadius:50,
        alignItems:'center',
        paddingTop:20
    },
    image:{
        width:'100%',
        height:'100%',
        // borderRadius:100,
        borderBottomRightRadius:100,
    },
    content4:{
        flex:1,
        backgroundColor:colors.primary,
        borderTopLeftRadius:50 ,
        paddingTop:20,
        alignItems:'center',

    },

})
export default HomeScreen
