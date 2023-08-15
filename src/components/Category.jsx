import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";

function CuisineType() {
    const [category, setCategory] = useState([])

  let params = useParams();

  const getCategory = async (category) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=634c1e814b0f4107baf9181fde33b0ec&number=1${category === 'popular' ? null : `&tags=${category}`}`
    );
    const recipes = await data.json();
    setCategory(recipes.recipes);
  };

  useEffect(() => {
    getCategory(params.category);
    console.log(category);
  }, [params.category]);

  return (
    <div className="flex flex-col items-center my-6">
      <h1 className="text-4xl font-bold text-slate-100 font-satoshi m-0">
        {params.category}
      </h1>
      <div className="box-border w-fit max-w-[1485px] flex flex-wrap justify-center gap-6 mt-6">
        {category.map((recipe) => {
          return (
            <Link
              to={`/recipe/${recipe.id}`}
              key={recipe.id}
              className="no-underline flex justify-center"
            >
              <Card
                key={recipe.id}
                header={recipe.title}
                image={recipe.image}
                margin="true"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CuisineType;
