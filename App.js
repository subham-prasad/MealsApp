import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverview from "./screens/MealsOverview";
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            title: 'All Categories',
            headerStyle: {backgroundColor: '#beec16'},
            headerTintColor: 'white',
            contentStyle:{    "backgroundColor": "#24180f"}
          }} >
          <Stack.Screen name ='MealsCategories'
          component={CategoriesScreen}
          
          />
      
         <Stack.Screen name ='MealsOverview'
          component={MealsOverview}
          options = {({route,navigation})=>{
            const catId = route.params.categoryId;
            return {
              title:catId,
            }
          }}
          />
        </Stack.Navigator>
        {/* <CategoriesScreen /> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
