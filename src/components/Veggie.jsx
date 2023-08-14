import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { BiLeaf } from "react-icons/bi";
import Tooltip from "@mui/material/Tooltip";

function Veggie() {
  //   const [veggie, setVeggie] = useState([]);

  //   const getVeggie = async () => {
  //     const api = await fetch(
  //       `https://api.spoonacular.com/recipes/random?apiKey=634c1e814b0f4107baf9181fde33b0ec&number=10&tags=vegetarian`
  //     );
  //     const data = await api.json();
  //     setVeggie(data.recipes);
  //   };
  //   useEffect(() => {
  //     getVeggie();
  //   }, []);

  return (
    <Wrapper>
      <h1 className="flex text-stone-800 font-semibold font-satoshi text-4xl relative">
        Veggie
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6 p-6">
        {/* {veggie.map((recipe) => {
          return (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
              <Card
                header={recipe.title}
                image={recipe.image}
                minutes={recipe.readyInMinutes}
                veggie="true"
              />
            </Link>
          );
        })} */}
      </div>
    </Wrapper>
  );
}

//styling
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1485px;
  align-items: center;
  margin-top: 50px;
  justify-content: center;
`;

export default Veggie;
