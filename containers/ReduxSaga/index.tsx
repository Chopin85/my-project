import React from "react";
import { View, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getCocktail } from "../../providers/cocktail/actions";

import Headers from "../../components/Header";
import Button from "../../components/Button";
import Ingredient from "../../components/Ingredient";

import styles from "./styles";

export default function ReduxSaga() {
  const cocktail = useSelector((state) => state?.cocktail);

  const dispatch = useDispatch();

  const allowed = [
    "strIngredient1",
    "strIngredient2",
    "strIngredient3",
    "strIngredient4",
    "strIngredient5",
    "strIngredient6",
    "strMeasure1",
    "strMeasure2",
    "strMeasure3",
    "strMeasure4",
    "strMeasure5",
    "strMeasure6",
  ];

  const ingredientAndMeasure = Object.keys(cocktail)
    .filter((key) => allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = cocktail[key];
      return obj;
    }, {});

  const ingredients = Object.values(ingredientAndMeasure).slice(0, 6);
  const measures = Object.values(ingredientAndMeasure).slice(6);

  return (
    <View style={styles.container}>
      {cocktail.idDrink && (
        <View style={{ flex: 0.9, flexDirection: "row" }}>
          <View style={styles.photo}>
            <Text style={styles.title}>{cocktail.strDrink}</Text>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: cocktail.strDrinkThumb,
                }}
              />
            </View>
          </View>
          <View style={styles.ingredients}>
            <Text style={styles.title}>Ingredients</Text>
            <View style={styles.wrapIngredients}>
              {ingredients.map((e, i) =>
                e !== null && e !== "" ? (
                  <Ingredient
                    key={i}
                    image={`https://www.thecocktaildb.com/images/ingredients/${e}-Medium.png`}
                    text={measures[i]}
                  />
                ) : null
              )}
            </View>
          </View>
        </View>
      )}

      <View style={{ flex: 0.1, flexDirection: "row" }}>
        <Button
          title="Refresh"
          onPress={() => dispatch(getCocktail())}
        ></Button>
        <Text>{cocktail.strInstructionsIT}</Text>
      </View>
    </View>
  );
}
