import React, {FunctionComponent, useState} from 'react'
import {createDrawerNavigator,} from "@react-navigation/drawer";
import { StyleSheet, View} from "react-native";
import Animated from "react-native-reanimated"
import colors from "../components/themes/colors";
import {MAIN_LAYOUT} from "../constants/routeNames";
import MainLayOut from "../screens/mainLayout";
import CustomDrawerContent from "../components/customNavigator/customDrawerContent";
import  {connect} from "react-redux";
import {setSelectedTab} from "../stores/tab/tabAction";


const Drawer = createDrawerNavigator()
type props={
    selectedTab:any
    setSelectedTab?:any
}


const  FoodDeliveryDrawer : FunctionComponent<props> = ({selectedTab, setSelectedTab}) =>{
    const [progress, setProgress] = useState(new Animated.Value(0))

    const scale = Animated.interpolateNode(progress, {inputRange:[0,1], outputRange:[1, 0.8]})
    const borderRadius = Animated.interpolateNode(progress, {inputRange:[0,1], outputRange:[0, 26]})
    const animatedStyle = {borderRadius, transform:[{scale}]}
    return(
        <View style={styles.container}>
            <Drawer.Navigator
                initialRouteName={MAIN_LAYOUT}
                screenOptions={{ headerShown:false, drawerStyle:{flex:1, width:'65%', paddingRight:20, backgroundColor:'transparent'}, sceneContainerStyle:{backgroundColor:'transparent'}, drawerActiveBackgroundColor:colors.accent, drawerActiveTintColor:colors.white, drawerInactiveTintColor:colors.accent, drawerType:'slide', overlayColor:'transparent', }}
                drawerContent={(props:any) =>{
                    setTimeout(()=>{
                        setProgress(props.progress)

                    }, 0)
                   return(<CustomDrawerContent navigation={props.navigation} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>)
                }}


            >
                <Drawer.Screen name={MAIN_LAYOUT} >
                    { (props:any) => <MainLayOut {...props} drawerAnimationStyle={animatedStyle} />}
                </Drawer.Screen>

            </Drawer.Navigator>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.primary
    }
})

// export default FoodDeliveryDrawer



function mapStateTopProps(state:any){
    return {
        selectedTab:state.tabReducer.selectedTab
    }
}

function mapDispatchToProps(dispatch:any){
    return {
        selectedTab:(selectedTab:any) => {
            return dispatch(setSelectedTab(selectedTab))
        }
    }

}

export default connect(mapStateTopProps, mapDispatchToProps)(FoodDeliveryDrawer)
