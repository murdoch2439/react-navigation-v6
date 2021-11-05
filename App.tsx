import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import colors from "./src/components/themes/colors";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./src/navigations/drawerNavigator";
// import {categoriesFilter} from "./src/utils/helperFunctions";

export default function App() {
  return (
      <NavigationContainer>
        <View style={styles.container}>
          {/*/!*{categoriesFilter('économie')}*!/*/}
          {/*<Text>Open up App.tsx to start working on your app!</Text>*/}
          <StatusBar style={Platform.OS === "ios" ? "auto" : "light"} backgroundColor={colors.primary} translucent={false} />
          <DrawerNavigator />
        </View>
      </NavigationContainer>

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
