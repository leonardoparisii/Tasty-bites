import { useEffect, useState } from "react";
import Card from "./Card";
import styled from "@emotion/styled";
import "@splidejs/splide/css";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);
  const getVeggie = async () => {
    const check = localStorage.getItem("Veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=634c1e814b0f4107baf9181fde33b0ec&number=24&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("Veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };

  return (
    <Wrapper>
      <H1>Popular vegetarian recipes</H1>
      <StyledSplide
        options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          perMove: 1,
          gap: "0em",
          drag: "free",
          type: "loop",
          rewind: true,
          rewindSpeed: 2000,
          breakpoints: {
            1275: {
              perPage: 2,
            },
            735: {
              perPage: 1,
              drag: false,
            },
          },
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideContainer key={`Splide_ ${recipe.id}`}>
              <StyledLinks to={`/recipe/${recipe.id}`}>
                <Card
                  key={recipe.id}
                  header={recipe.title}
                  image={recipe.image}
                  minutes={recipe.readyInMinutes}
                  veggie="true"
                />
              </StyledLinks>
            </SplideContainer>
          );
        })}
      </StyledSplide>
    </Wrapper>
  );
}

//styling
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1485px;
  padding: 15px;
  box-sizing: border-box;
`;

const StyledSplide = styled(Splide)`
  border-radius: 15px;
  padding: 50px;
`;
const H1 = styled.h1`
  font-size: 34px;
  font-weight: 700;
  color: #f1f1f1;
  font-family: "Satoshi";
  width: fit-content;
  margin: 0 auto;
`;

const StyledLinks = styled(Link)`
  text-decoration: none;
  width: 80%;
`;

const SplideContainer = styled(SplideSlide)`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  margin: 2.4rem;
`;

export default Veggie;
