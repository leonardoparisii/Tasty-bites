import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BsCircle } from "react-icons/bs";

function Recipe() {
  const location = useLocation();
  const apiUrl = import.meta.env.VITE_API_URL;
  const params = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async (id) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information/?apiKey=${apiUrl}`
    );

    const dataDetails = await data.json();
    localStorage.setItem("recipe", JSON.stringify(dataDetails));
    setDetails(dataDetails);
    console.log(details);
  };

  useEffect(() => {
    localStorage.removeItem("recipe");
  }, [location]);

  useEffect(() => {
    fetchDetails(params.id);
  }, [params.id]);

  return (
    <div className="flex flex-col mx-auto my-12 w-[70%]">
      <div className="flex flex-col gap-14">
        <h1 className="text-3xl font-inter font-medium w-fit mx-auto text-[#d3b16e]">
          {details.title}
        </h1>
        <div className="flex lg:flex-row flex-col w-full z-40 justify-center">
          <img
            src={details.image}
            alt="image"
            className="w-[750px] sm:h-[275px] md:h-[350px] lg:h-[400px] h-[225px]"
          />
          <div className="flex flex-col bg-[#fff] p-8 lg:shadow-md z-20">
            {!details.vegetarian &&
            !details.glutenFree &&
            !details.dairyFree &&
            !details.vegan ? null : (
              <div className="flex items-center justify-center bg-[#f6f5f9] p-4 gap-2 font-satoshi txt-2xl font-normal">
                {details.vegetarian ? <p>vegetarian</p> : null}
                {details.glutenFree ? <p>gluten free</p> : null}
                {details.dairyFree ? <p>dairy free</p> : null}
                {details.vegan ? <p>vegan</p> : null}
              </div>
            )}
            <div className="flex flex-col font-satoshi gap-4 my-4 lg:pr-28">
              <p className="flex gap-1">
                Difficulty:
                <span className="font-medium">
                  {details.cheap ? "cheap" : "expensive"}
                </span>
              </p>
              <p className="flex gap-1">
                Preparation:
                <span className="font-medium">
                  {details.readyInMinutes} min
                </span>
              </p>
              <p className="flex gap-1">
                Servings:
                <span className="font-medium">
                  {details.servings}{" "}
                  {details.servings > 1 ? "people" : "person"}
                </span>
              </p>
              <p className="flex gap-1">
                Cost:
                <span className="font-medium">
                  {details.winePairing
                    ? details.winePairing.productMatches.map((diocane) => {
                        diocane.price;
                      })
                    : null}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-14 mt-24 font-satoshi">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 w-fit">
            <p className="text-3xl">PRESENTATION</p>
            <div className="h-[4px] w-[40%] rounded-2xl bg-[#F9BC42]"></div>
          </div>
          <p
            className="text-xl w-[90%] font-light"
            dangerouslySetInnerHTML={{ __html: details.summary }}
          ></p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 w-fit">
            <p className="text-3xl">INGREDIENTS</p>
            <div className="h-[4px] w-[40%] rounded-2xl bg-[#F9BC42]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {details.extendedIngredients
              ? details.extendedIngredients.map((ingredient, id) => (
                  <div
                    key={id}
                    className="flex gap-2 justify-center items-center w-fit"
                  >
                    <BsCircle size={14} />
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-satoshi font-normal text-xl flex gap-2">
                        {ingredient.originalName}
                      </p>
                      <div className="flex gap-1 text-sm items-center">
                        <span className="font-semibold flex items-center">
                          {ingredient.measures.metric.amount}
                          {ingredient.measures.metric.unitShort}
                        </span>
                        <span className="text-xl text-normal">|</span>
                        <span className="flex items-center">
                          {ingredient.measures.us.amount}
                          {ingredient.measures.us.unitShort}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 w-fit">
            <p className="text-3xl">PREPARATION</p>
            <div className="h-[4px] w-[40%] rounded-2xl bg-[#F9BC42]"></div>
          </div>
          <p
            className="text-xl w-[90%] font-light"
            dangerouslySetInnerHTML={{ __html: details.instructions }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
