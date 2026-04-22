import { View, Text, StyleSheet, Image,ScrollView } from "react-native";
import {useLayoutEffect} from "react"
import List from "../components/MealDetail/List";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import IconButton from "../components/IconButton";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler () {
  
    console.log('Pressed!');
}

  useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => {
            return <IconButton onPress={headerButtonPressHandler} name='star'
            size={24} color="white"/>
        }
    });
  }, [navigation, headerButtonPressHandler]);


  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.listOuterContainer}>
      <View style={styles.listContainer}>
        <Subtitle> Ingredients</Subtitle>
        <List data={selectedMeal.ingredients} />
        <Subtitle> Steps</Subtitle>

        <List data={selectedMeal.steps} />
      </View>
      </View>
    </ScrollView>
  );
}
export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
   marginBottom: 32,
  },
  image: {
    width: "90%",
    height: 350,
    borderRadius: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 24,
    marfinVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
