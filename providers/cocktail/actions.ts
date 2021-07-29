export const GET_COCKTAIL = "providers/cocktail/GET_COCKTAIL";
export const GET_COCKTAIL_SUCCESS = "providers/cocktail/GET_COCKTAIL_SUCCESS";
export const GET_COCKTAIL_FAIL = "providers/cocktail/GET_COCKTAIL_FAIL";

export function getCocktail() {
  return { type: GET_COCKTAIL };
}

export function getCocktailFail(error) {
  return { type: GET_COCKTAIL_FAIL, error };
}

export function getCocktailSuccess(cocktail) {
  return { type: GET_COCKTAIL_SUCCESS, cocktail };
}
