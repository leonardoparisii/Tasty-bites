import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
const Searchbar = (props) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={
        props.styles
          ? props.styles
          : `backdrop-blur-sm flex justify-between item-center w-[500px] px-3 py-[6px] bg-transparent border border-[#bebfbf] rounded-lg`
      }
    >
      <div className="w-full flex">
        <input
          type="text"
          placeholder={props.placeholder || "Search"}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className={`w-full bg-transparent focus:outline-none border-none box-border text-[#707070] placeholder:text-[#bebfbf] placeholder:font-normal font-satoshi text-md`}
        />
        <AiOutlineSearch
          size={24}
          onClick={handleSubmit}
          className="cursor-pointer"
        />
      </div>
    </form>
  );
};

export default Searchbar;
