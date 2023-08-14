import React from "react";
import styled from "@emotion/styled";
import { Tooltip } from "@mui/material";
import { BiLeaf } from "react-icons/bi";

function Card(props) {
  const { header } = props;
  const truncatedHeader =
    header.length > 22 ? header.slice(0, 22) + "..." : header;

  return (
    <div className="relative flex flex-col justify-center w-[18rem] h-[260px] box-border p-4 rounded-md bg-transparent transition-shadow duration-1000 ease-out hover:shadow-3xl hover:duration-100">
      <ImgContainer
        image={props.image}
        className="w-full m-auto h-full min-h-[70%] bg-cover object-cover rounded-md"
      ></ImgContainer>
      <div className="flex w-full justify-center my-4">
        <h1 className="text-xl font-satoshi font-medium text-[#303030] w-full">
          {truncatedHeader}
        </h1>
        <h2 className="font-satoshi font-normal p-1 text-[#303030] text-sm">
          {props.minutes ? props.minutes + "`" : ""}
        </h2>
      </div>
      {props.veggie ? (
        <Tooltip title="vegetarian" placement="right">
          <div className="absolute -top-2 -right-2 p-1 bg-emerald-600 rounded-lg text-md cursor-pointer">
            <BiLeaf size={14} />
          </div>
        </Tooltip>
      ) : null}
    </div>
  );
}

//styling
const VeggieCardContainer = styled.div`
  background: url(${(props) => props.image});
  object-fit: cover;
  @media screen and (max-width: 768px) {
    width: 340px;
  }
  position: relative;
`;

const ImgContainer = styled.div`
  background: url(${(props) => props.image});
`;

export default Card;
