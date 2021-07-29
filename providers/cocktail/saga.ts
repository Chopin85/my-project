import { takeLatest, call, put } from "redux-saga/effects";
import { GET_COCKTAIL, getCocktailSuccess, getCocktailFail } from "./actions";
import { getCocktailQuery } from "../../resources/cocktail";

function* getCocktail() {
  try {
    const { data } = yield call(getCocktailQuery);
    const payload = data.drinks[0];
    yield put(getCocktailSuccess(payload));
  } catch (error) {
    // TODO: Create real error feedback
    yield put(getCocktailFail(error));
  }
}

export default function* CocktailProviderSaga() {
  yield takeLatest(GET_COCKTAIL, getCocktail);
}
