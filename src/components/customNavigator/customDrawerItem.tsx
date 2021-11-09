import React, {FunctionComponent} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../themes/colors";

type props = {
    label?:string
    icon?:any
    onPress:any
    isFocused?:boolean
}


const CustomDrawerItem : FunctionComponent<props> = ({label, icon, onPress, isFocused}) =>{
    return(
        <TouchableOpacity style={[styles.container, {backgroundColor:isFocused ? colors.danger : ''}]} onPress={onPress}>
            <View>
                {icon}
            </View>
            <Text style={{marginLeft:15, color:colors.white, fontWeight:'bold'}}>{label}</Text>

        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    container:{
        height:40,
        marginBottom:10,
        paddingLeft:10,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center'
    }
})

export default CustomDrawerItem
