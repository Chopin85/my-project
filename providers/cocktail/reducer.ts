import produce from "immer";
import {
  GET_COCKTAIL,
  GET_COCKTAIL_FAIL,
  GET_COCKTAIL_SUCCESS,
} from "./actions";

export const initialState = {
  idDrink: null,
  strDrink: null,
  strDrinkAlternate: null,
  strTags: null,
  strVideo: null,
  strCategory: null,
  strIBA: null,
  strAlcoholic: null,
  strGlass: null,
  strInstructions: null,
  strInstructionsES: null,
  strInstructionsDE: null,
  strInstructionsFR: null,
  strInstructionsIT: null,
  strDrinkThumb: null,
  strIngredient1: null,
  strIngredient2: null,
  strIngredient3: null,
  strIngredient4: null,
  strIngredient5: null,
  strIngredient6: null,
  strIngredient7: null,
  strIngredient8: null,
  strIngredient9: null,
  strIngredient10: null,
  strIngredient11: null,
  strIngredient12: null,
  strIngredient13: null,
  strIngredient14: null,
  strIngredient15: null,
  strMeasure1: null,
  strMeasure2: null,
  strMeasure3: null,
  strMeasure4: null,
  strMeasure5: null,
  strMeasure6: null,
  strMeasure7: null,
  strMeasure8: null,
  strMeasure9: null,
  strMeasure10: null,
  strMeasure11: null,
  strMeasure12: null,
  strMeasure13: null,
  strMeasure14: null,
  strMeasure15: null,
  strImageSource: null,
  strImageAttribution: null,
  strCreativeCommonsConfirmed: null,
  dateModified: null,
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const cocktailReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_COCKTAIL:
        draft.loading = true;
        break;
      case GET_COCKTAIL_FAIL:
        draft.loading = false;
        break;
      case GET_COCKTAIL_SUCCESS:
        draft.loading = false;
        Object.keys(action.cocktail).forEach((key) => {
          const value = action.cocktail[key];
          draft[key] = value;
        });
        break;
    }
  });

export default cocktailReducer;
