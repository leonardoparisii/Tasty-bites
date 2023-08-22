import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("Popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=634c1e814b0f4107baf9181fde33b0ec&number=16`
      );
      const data = await api.json();

      localStorage.setItem("Popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <div className="m-auto max-w-[1485px] md:flex md:flex-col md:items-center md:my-6 md:mt-12 -z-20">
      <h1 className="m-auto w-fit text-4xl font-bold text-slate-100 font-satoshi">
        Popular recipes
      </h1>
      <div className="box-border w-fit max-w-[1485px] flex flex-wrap justify-center gap-6 mt-6">
        {popular.map((recipe) => {
          return (
            <Link
              to={`/recipe/${recipe.id}`}
              key={`Link_${recipe.id}`}
              id={`Link_${recipe.id}`}
              className="no-underline flex justify-center"
            >
              <Card
                key={recipe.id}
                header={recipe.title}
                image={recipe.image}
                minutes={recipe.readyInMinutes}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
