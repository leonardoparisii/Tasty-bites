import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";

function Recipe() {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [activeSection, setActiveSection] = useState("instructions");
  const [showText, setShowText] = useState(false);

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information/?apiKey=634c1e814b0f4107baf9181fde33b0ec`
    );
    const dataDetails = await data.json();
    setDetails(dataDetails);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);
  useEffect(() => {
    console.log(details.extendedIngredients);
  }, []);

  return (
    <Wrapper>
      <H1>{details.title ? details.title : "Loading..."}</H1>
      <RecipeContainer>
        <Img image={details.image}></Img>
        <Info>
          <Buttons>
            <Button
              className={activeSection === "instructions" ? "active" : ""}
              onClick={() => setActiveSection("instructions")}
            >
              Instructions
            </Button>
            <Button
              className={activeSection === "ingredients" ? "active" : ""}
              onClick={() => setActiveSection("ingredients")}
            >
              Ingredients
            </Button>
          </Buttons>
          {activeSection === "instructions" && (
            <InfoContainer>
              <div className="flex flex-col mb-2 gap-4 items-center">
                <h2>Summary</h2>
                <h3
                  dangerouslySetInnerHTML={{ __html: details.summary }}
                  className={showText === "showSummary" ? "" : "line-clamp-3"}
                ></h3>
                <button
                  className="bg-white hover:bg-gray-100
               text-gray-800 font-semibold py-2 px-4
               border border-gray-400 rounded shadow font-satoshi"
                  onClick={() =>
                    setShowText(
                      showText !== "showSummary" ? "showSummary" : false
                    )
                  }
                >
                  {showText !== "showSummary" ? "Show More" : "Show Less"}
                </button>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <h2>Instructions</h2>
                <h3
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                  className={
                    showText === "showInstructions" ? "" : "line-clamp-3"
                  }
                ></h3>
                <button
                  className="bg-white hover:bg-gray-100
               text-gray-800 font-semibold py-2 px-4
               border border-gray-400 rounded shadow font-satoshi"
                  onClick={() =>
                    setShowText(
                      showText !== "showInstructions"
                        ? "showInstructions"
                        : false
                    )
                  }
                >
                  {showText !== "showInstructions" ? "Show More" : "Show Less"}
                </button>
              </div>
            </InfoContainer>
          )}
          {activeSection === "ingredients" && (
            <Ul>
              {details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </Ul>
          )}
        </Info>
      </RecipeContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  margin: 0 auto;
  gap: 35px;
`;

const H1 = styled.h1`
  font-size: 34px;
  font-weight: 700;
  color: #f1f1f1;
  font-family: "Satoshi";
  margin: 0;
`;

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 100%;
  margin: 0 auto;
`;

const Img = styled.image`
  background: url(${(props) => props.image});
  width: 60%;
  height: 450px;
  background-size: cover;
  border-radius: 15px;
  transition: box-shadow 1s ease-out;
  &&:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: 0.1s;
  }
  @media only screen and (max-width: 740px) {
    height: 300px;
    width: 90%;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 60%;
`;
const Buttons = styled.div`
  display: flex;
  gap: 50px;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  font-size: 16px;
  color: #f1f1f1;
  font-family: "Satoshi";
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;
  border: none;
  background-color: ${(props) =>
    props.className == "active" ? "rgba(80, 63, 205, 0.7)" : "#1e1c1c"};
  transition: box-shadow 1s ease-out;
  &&:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: 0.1s;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 25px;
  h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 400;
    color: #f1f1f1;
    font-family: "Satoshi";
    a {
      color: rgba(218, 208, 208, 0.7);
      font-style: normal;
    }
  }
  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 400;
    color: #f1f1f1;
    font-family: "Satoshi";
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  font-family: "Satoshi";
  font-size: 20px;
  color: #f1f1f1;
  gap: 10px;
`;

export default Recipe;
