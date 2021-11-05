import React, {FunctionComponent} from 'react'
import {StyleSheet, Text, View} from "react-native";


const HomeScreen : FunctionComponent = () =>{
    return(
        <View style={styles.container}>
            <Text>HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red'
    }

})
export default HomeScreen
