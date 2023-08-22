import React from "react";
import { Link } from "react-router-dom";

function Card({ recipe }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="object-cover w-full">
        <img src={recipe.image} alt="image" className="w-full rounded-[30px]" />
      </div>
      <div className="bg-[#fbfafa] hover:bg-[#ededed] font-satoshi transition rounded-[30px] flex flex-col p-5 justify-between w-full gap-4">
        <h1 className="text-[#222528] text-lg font-semibold">{recipe.title}</h1>
        <p
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
          className="text-[#616161] text-base font-satoshi font-normal line-clamp-3"
        ></p>
        <div className="flex justify-between items-center">
          <Link
            to={`/recipe/${recipe.id}`}
            className="p-2 bg-[#098149] font-satoshi text-white rounded-md"
          >
            View more
          </Link>
          <div className="font-satoshi text-base font-medium">
            servings: {recipe.servings}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
