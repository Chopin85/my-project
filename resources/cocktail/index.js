import request from "../../utils/request";

export async function getCocktailQuery() {
  const options = {
    method: "GET",
    url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
  };
  const res = await request(options);
  return res;
}
