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
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          perMove: 1,
          drag: "free",
          type: "loop",
          rewind: true,
          rewindSpeed: 2000,
          breakpoints: {
            1275: {
              perPage: 2,
            },
            768: {
              perPage: 1,
              arrows: false,
              drag: true,
            },
          },
        }}
        className="\md:p-12 rounded-2xl md:w-100% w-352px"
      >
        {veggie.map((recipe) => {
          return (
            <SplideContainer key={`Splide_ ${recipe.id}`} className="w-352px">
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
      </Splide>
    </Wrapper>
  );
}

//styling
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1485px;
`;

const H1 = styled.h1`
  font-size: 34px;
  font-weight: 700;
  color: #f1f1f1;
  font-family: "Satoshi";
  width: fit-content;
  margin: 0 auto;
  @media screen and (max-width: 430px) {
    font-size: 28px;
  }
  @media screen and (max-width: 350px) {
    font-size: 24px;
  }
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
