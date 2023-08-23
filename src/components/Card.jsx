import React from "react";
import { Link } from "react-router-dom";

function Card({ recipe, search }) {
  return (
    <div className="w-full flex flex-col shadow-white-md rounded-2xl">
      <div className="object-cover w-full">
        <img src={recipe.image} alt="image" className="w-full rounded-t-2xl" />
      </div>
      <div
        className={`${
          search ? "flex-row" : "flex-col"
        } bg-[#fbfafa] font-satoshi transition rounded-b-[30px] flex p-5 justify-between w-full gap-4`}
      >
        <h1
          className={`${
            search ? "line-clamp-1" : ""
          } text-[#222528] text-lg font-semibold w-fit`}
        >
          {recipe.title}
        </h1>
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
          <div
            className={`${
              search ? "hidden" : "block"
            } font-satoshi text-base font-medium`}
          >
            servings: {recipe.servings}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
