import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

function Category() {
  const apiUrl = process.env.API_KEY;
  const [data, setData] = useState([]);
  console.log(apiUrl);

  let params = useParams();

  const getCategory = async (category) => {
    const apiUrl = await import.meta.env.VITE_API_URL;
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiUrl}&number=1${
        category === "popular" ? null : `&tags=${category}`
      }`
    );

    const recipes = await response.json();
    setData(recipes.recipes);
  };
  useEffect(() => {
    getCategory(params.category);
    console.log(data);
  }, [params.category]);

  return (
    <div className="flex flex-col items-center my-6">
      <h1 className="text-4xl font-bold text-[#2d4739] font-satoshi m-0">
        {params.category.charAt(0).toUpperCase() + params.category.slice(1)}
      </h1>
      <div className="box-border w-fit max-w-[1485px] grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 justify-center gap-6 mt-6">
        {data.map((recipe) => {
          return <Card key={recipe.id} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default Category;
