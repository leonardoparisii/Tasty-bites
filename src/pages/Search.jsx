import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";

const Search = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let recipeInfo;

  let params = useParams();

  const getSearchedContent = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&number=32&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
    recipeInfo = recipes.number;
    console.log(searchedRecipes);
    console.log(recipeInfo);
  };

  useEffect(() => {
    getSearchedContent(params.search);
  }, [params.search]);
  return (
    <div className="flex flex-col items-center my-6">
      <h1 className="text-4xl font-bold text-[#252525] font-satoshi m-0">
        {searchedRecipes.length === 0 ? (
          <span>no results for :'{params.search}'</span>
        ) : (
          <span>
            results for :'<span>{params.search}</span>':
          </span>
        )}
      </h1>
      <div className="box-border w-fit max-w-[1485px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 justify-center gap-6 mt-6">
        {searchedRecipes.map((recipe) => (
          <Card recipe={recipe} search key={recipe.id} />
        ))}
      </div>
    </div>
  );
};

export default Search;
