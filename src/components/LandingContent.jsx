import LandingPhoto from "../assets/landing-image.svg";
import Searchbar from "./Searchbar";
import ProfilePic from "../assets/FeedbackProfilePic.png";
import { AiFillStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import popularLogo from "../assets/popular-category.jpg";
import veggieLogo from "../assets/veggie-category.jpg";
import VeganLogo from "../assets/vegan-category.jpg";
import Category from "./Category";

const LandingContent = () => {
  const navigate = useNavigate();
  const params = useParams();

  const categories = [
    {
      title: "popular",
      onclick: () => navigate(`/discover/popular`),
      img: popularLogo,
    },
    {
      title: "vegetarian",
      onclick: () => navigate(`/discover/vegetarian`),
      img: veggieLogo,
    },
    {
      title: "vegan",
      onclick: () => navigate(`/discover/vegan`),
      img: VeganLogo,
    },
  ];
  return (
    <div className="max-w-[1485px] w-[90%] mx-auto">
      <div className="flex flex-col landing-br:grid landing-br:grid-cols-2 items-center justify-center landing-br:gap-6">
        <div className="flex flex-col justify-center gap-7 w-fit items-center">
          <h1 className="text-center landing-br:text-left text-7xl sm:text-8xl landing-br:text-7xl font-satoshi font-extrabold text-[#2d4739]">
            Look for a <br />
            <span className="text-[#e5c687] font-extrabold">TASTY</span> Recipe
          </h1>
          <p className="text-[#909090] font-satoshi font-medium text-center md:text-3xl text-xl landing-br:text-left landing-br:text-xl ml-2">
            Discover a vast and diverse compendium of thousands <br /> of
            meticulously crafted recipes to masterfully create <br />
            unforgettable, tantalizing dishes, leaving a lasting <br />
            impression on all taste buds
          </p>
          <Searchbar
            placeholder="Start searching now"
            styles="w-[400px] sm:w-[400px] rounded-full bg-transparent border border-[#bebfbf] font-semibold p-5"
          />
        </div>
        <div className="relative select-none">
          <div className="absolute bottom-0 right-0 flex backdrop-blur-3xl p-5 rounded-3xl bg-[rgba(225,225,225,0.4)] gap-4 shadow-md">
            <img
              src={ProfilePic}
              alt="profile-pic"
              className=" w-[75px] h-[75px] object-cover rounded-3xl"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <h3 className="font-satoshi text-lg font-extrabold text-[#34383a]">
                  Paul
                </h3>
                <div className="flex">
                  <AiFillStar size={15} alt="star" className="fill-[#ef8f1e]" />
                  <AiFillStar size={15} alt="star" className="fill-[#ef8f1e]" />
                  <AiFillStar size={15} alt="star" className="fill-[#ef8f1e]" />
                  <AiFillStar size={15} alt="star" className="fill-[#ef8f1e]" />
                  <AiFillStar size={15} alt="star" className="fill-[#ef8f1e]" />
                </div>
              </div>
              <p className="text-[#75807b] text-sm font-satoshi font-medium">
                Simply delicious! This recipe is a game-changer. <br />
                Easy to use, mouthwatering results! <br />A must-have for all
                foodies!
              </p>
            </div>
          </div>
          <img
            src={LandingPhoto}
            className="flex-1 w-[700px] landing-br:w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-12 mt-14">
        <h1 className="font-satoshi text-3xl text-stone-900 font-semibold flex items-start gap-3">
          Categories{" "}
          <span
            className={`text-base text-stone-600 font-medium ${
              !params.category ? "block" : "hidden"
            }`}
          >
            * select a category
          </span>
        </h1>
        <div className="flex gap-8">
          {categories.map((item, index) => (
            <div
              onClick={item.onclick}
              key={index}
              className="flex flex-col gap-4 items-center justify-center select-none cursor-pointer transition"
            >
              <img
                src={item.img}
                alt="img"
                draggable="false"
                className={`${
                  params.category == item.title ? "" : "grayscale-[60%]"
                }
                    w-[140px] h-[140px] object-cover rounded-full`}
              />
              <h1
                className={`${
                  params.category == item.title
                    ? "text-stone-900 font-semibold"
                    : "text-stone-600 font-medium"
                } font-satoshi text-lg`}
              >
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        {params.category ? <Category /> : null}
      </div>
    </div>
  );
};

export default LandingContent;
