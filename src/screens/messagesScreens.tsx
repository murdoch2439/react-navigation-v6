import React, {FunctionComponent} from 'react'
import {StyleSheet, Text, View} from "react-native";




const MessagesScreen : FunctionComponent = () =>{
    return(
        <View style={styles.container}>
            <Text>MessagesScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})
export default MessagesScreen
