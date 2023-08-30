import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

function CuisineType() {
  const apiUrl = process.env.API_KEY;
  const [category, setCategory] = useState([]);
  console.log(apiUrl);

  let params = useParams();

  const getCategory = async (category) => {
    const apiUrl = await import.meta.env.VITE_API_URL;
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiUrl}&number=1${
        category === "popular" ? "" : `&tags=${category}`
      }`
    );

    const recipes = await response.json();
    setCategory(recipes.recipes);
  };
  useEffect(() => {
    const category = !params.category ? "popular" : params.category;
    getCategory(category);
    console.log(category);
  }, [params.category]);

  return (
    <div className="flex flex-col items-center my-6">
      <h1 className="text-4xl font-bold text-[#2d4739] font-satoshi m-0">
        {!params.category ? "Popular" : params.category}
      </h1>
      <div className="box-border w-fit max-w-[1485px] grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 justify-center gap-6 mt-6">
        {category.map((recipe) => {
          return <Card key={recipe.id} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default CuisineType;
