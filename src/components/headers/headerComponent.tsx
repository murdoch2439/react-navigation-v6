import React, {FunctionComponent} from 'react'
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native'

import colors from '../themes/colors'


type props = {
    navigation?: any;
}

const HeaderComponent: FunctionComponent<props> = ({navigation}) => {
    const openDrawerMenu = () =>{
        return navigation.openDrawer()

    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello James Paul</Text>
            <TouchableOpacity onPress={openDrawerMenu} style={styles.profile}>
                <Image source={require('../../../assets/profile.jpg')} style={styles.image}/>
            </TouchableOpacity>

            {/*<Feather name="bell" style={styles.bell}/>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:colors.primary,
        height:80,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:25,
        borderBottomRightRadius:50,
        borderBottomLeftRadius:50,
        // borderBottomWidth:0.7,
        // borderBottomColor:colors.success,
        // borderRightColor:colors.success,
        // borderRightWidth:0.7
    },
    profile:{
        padding:2,
        backgroundColor:colors.accent,
        borderRadius:100
    },
    title:{
        fontSize:16,
        fontWeight:'bold'
    },
    menu:{
        fontSize:25,
        color:colors.black,
    },
    bell:{
        fontSize:25,
        color:colors.black,
    },
    image:{
        height:45,
        width:45,
        borderRadius:40
    }
})


export default HeaderComponent
