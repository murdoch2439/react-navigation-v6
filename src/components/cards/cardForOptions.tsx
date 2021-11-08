import React, {FunctionComponent} from 'react'
import {StyleSheet, Text, TouchableOpacity,} from "react-native";
// import { Entypo } from '@expo/vector-icons';
import colors from "../themes/colors";
// import fontSize from "../themes/fontSize";

type props = {
    screen:string,
    navigation?:any,
    primary?:boolean,
    white?:boolean,
    icon?:any
}

const CardForOptions : FunctionComponent<props> = ({navigation, screen, primary, white, icon}) =>{

    const getBackgroundColor = () =>{
        if(white){
            return colors.white
        }if(primary){
            return colors.primary
        }
    }

    const navigateTo = () =>{

        navigation.navigate(screen)
    }
    return(
        <TouchableOpacity onPress={navigateTo} style={[styles.container, { backgroundColor:getBackgroundColor()}]}>
            {icon}
            <Text style={{color: white ? colors.primary : colors.white, fontWeight:'bold'}}>{screen}</Text>
            {/*<View style={{height:100, backgroundColor:'red'}}>*/}

            {/*</View>*/}

            {/*<Entypo name="chevron-small-right" size={24} color={ white ? colors.black : colors.white} />*/}

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
        height:70,
        width:'80%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:10,
        paddingHorizontal:10,
        elevation:2,
        backgroundColor:colors.primary,
        marginVertical:10,
    }
})

export default CardForOptions
