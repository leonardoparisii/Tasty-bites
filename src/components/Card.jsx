import React from "react";
import { Link } from "react-router-dom";

function Card({ recipe, search }) {
  return (
    <div
      className={`h-full flex flex-col justify-between rounded-2xl ${
        search ? "w-[80%] mx-auto" : "shadow-white-md w-full"
      } `}
    >
      <div className="object-contain">
        <img
          src={recipe.image}
          alt="image"
          className={`w-full ${search ? "rounded-lg" : "rounded-t-2xl"}`}
        />
      </div>
      <div
        className={`${
          search
            ? "bg-transparent items-between h-full w-full"
            : "bg-[#fbfafa] p-5"
        }  font-satoshi transition rounded-b-[30px] flex justify-between  flex-col`}
      >
        <h1
          className={`text-[#222528] text-xl ${
            search ? "px-2  py-4" : ""
          }   font-semibold w-fit`}
        >
          {recipe.title}
        </h1>
        <p
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
          className="text-[#616161] text-base font-satoshi font-normal line-clamp-3"
        ></p>
        <div
          className={`flex ${
            search ? "flex-col" : "flex-row mt-2"
          } justify-between items-center`}
        >
          <Link
            to={`/recipe/${recipe.id}`}
            className={`p-2 h-fit ${
              search ? "sm:w-full w-[70%] mx-auto" : ""
            }  flex justify-center items-center bg-[#098149] font-satoshi text-white rounded-md`}
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
