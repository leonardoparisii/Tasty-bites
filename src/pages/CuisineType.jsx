import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";

function CuisineType() {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=634c1e814b0f4107baf9181fde33b0ec&number=8&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <div className="flex flex-col items-center my-6">
      <h1 className="text-4xl font-bold text-slate-100 font-satoshi m-0">
        {params.type}
      </h1>
      <div className="box-border w-fit max-w-[1485px] flex flex-wrap justify-center gap-6 mt-6">
        {cuisine.map((recipe) => {
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
