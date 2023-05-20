import React from "react";
import styled from "@emotion/styled";
import Arrow from "../assets/arrow.svg";

function Card(props) {
  const { header } = props;
  const truncatedHeader =
    header.length > 16 ? header.slice(0, 16) + "..." : header;

  return (
    <>
      {props.veggie ? (
        <VeggieCardContainer
          margin={true}
          image={props.image}
          className="bg-cover flex items-end p-[14px] left-40 rounded-2xl h-[340px] w-[280px] box-border transition-shadow duration-1000 ease-out hover:shadow-3xl hover:duration-100"
        >
          <h1 className="text-2xl font-sans font-medium text-slate-50 w-full">
            {props.header}
          </h1>
        </VeggieCardContainer>
      ) : (
        <div
          margin={false}
          className="flex flex-col justify-center w-[22rem] h-[290px] box-border p-[14px] rounded-2xl bg-transparent transition-shadow duration-1000 ease-out hover:shadow-3xl hover:duration-100"
        >
          <ImgContainer
            image={props.image}
            className="w-full m-auto h-[175px] min-h-[70%] bg-cover object-cover rounded-2xl"
          ></ImgContainer>
          <div className="flex w-full justify-center">
            <h1 className="text-2xl font-satoshi font-medium text-slate-50 w-full mb-1">
              {truncatedHeader}
            </h1>
            <h2 className="mt-1 font-sans font-medium p-1 text-slate-100 text-base">
              {props.minutes ? props.minutes + "`" : ""}
            </h2>
          </div>
          <div>
            <img
              src={Arrow}
              alt="Click here in order to view the recipe"
              className="w-6 rotate-90"
            />
          </div>
        </div>
      )}
    </>
  );
}

//styling
const VeggieCardContainer = styled.div`
  background: url(${(props) => props.image});
`;

const ImgContainer = styled.div`
  background: url(${(props) => props.image});
`;

export default Card;
