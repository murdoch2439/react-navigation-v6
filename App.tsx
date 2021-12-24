import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import colors from "./src/components/themes/colors";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./src/navigations/drawerNavigator";
import {createStackNavigator} from "@react-navigation/stack";
import FoodDeliveryDrawer from "./src/navigations/foodDrawerNavigator";
// import {categoriesFilter} from "./src/utils/helperFunctions";
const Stack = createStackNavigator()
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./src/stores/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk))




export default function App() {
  return (
      <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          {/*/!*{categoriesFilter('économie')}*!/*/}
          {/*<Text>Open up App.tsx to start working on your app!</Text>*/}


          <StatusBar style={Platform.OS === "ios" ? "auto" : "light"} backgroundColor={colors.primary} translucent={false} />
          <Stack.Navigator  screenOptions={{headerShown:false}} initialRouteName={'Home'}>
              <Stack.Screen name={'Home'} component={FoodDeliveryDrawer} />
          </Stack.Navigator>
          {/*<DrawerNavigator />*/}
        </View>
      </NavigationContainer>
      </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
