import React, {FunctionComponent} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../components/themes/colors";
import Animated from "react-native-reanimated"


type props = {
    props?:any
    drawerAnimationStyle?:any,
    navigation?: any
}

const MainLayOut : FunctionComponent<props> = ({drawerAnimationStyle, navigation}) =>{
    return(
        <Animated.View style={{flex:1,
            backgroundColor:colors.white,
            justifyContent:'center',
            alignItems:'center',
            ...drawerAnimationStyle
        }}>

            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <Text>Main Layout</Text>
            </TouchableOpacity>

        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        justifyContent:'center',
        alignItems:'center',

    }
})
export default MainLayOut
