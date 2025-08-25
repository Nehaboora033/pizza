import React, { useState } from "react";
import SubHeading from "./common/SubHeading";
import Button from "./common/Button";
import { Famous_Data } from "../utils/helper";
import Description from "./common/Description";
import { Star } from "../utils/icon";

const FamousDishes = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false); // ✅ state for Show More / Less

  const categories = [
    "All",
    "Vegetarian",
    "Non-Vegetarian",
    "Top Rated",
    "Price : Low to High",
    "Price : High to Low",
  ];

  const getDishesToShow = () => {
    let dishes = [...Famous_Data];

    if (activeTab === "Vegetarian") {
      dishes = dishes.filter((d) => d.category === "Vegetarian");
    } else if (activeTab === "Non-Vegetarian") {
      dishes = dishes.filter((d) => d.category === "Non-Vegetarian");
    } else if (activeTab === "Top Rated") {
      dishes = dishes.filter((d) => parseFloat(d.rating) >= 4.5);
    } else if (activeTab === "Price : Low to High") {
      dishes = [...dishes].sort(
        (a, b) => parseInt(a.price.replace("₹", "")) - parseInt(b.price.replace("₹", ""))
      );
    } else if (activeTab === "Price : High to Low") {
      dishes = [...dishes].sort(
        (a, b) => parseInt(b.price.replace("₹", "")) - parseInt(a.price.replace("₹", ""))
      );
    }

    return dishes;
  };

  const dishesToShow = getDishesToShow();
  const limitedDishes = showAll ? dishesToShow : dishesToShow.slice(0, 4); // ✅ only 4 by default

  return (
    <div className="bg-[#F9FAFB]">
      <div className="max-w-[1164px] mx-auto px-3 py-[100px] ">
        <div className="max-w-[1140px]">
          <SubHeading className="mb-[32px]" text="Famous Dishes in Hisar" />

          {/* Tabs */}
          <div className="flex gap-[14px] flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveTab(cat);
                  setShowAll(false); // reset to 4 when tab changes
                }}
                className={`!py-[8px] !px-[14px] cursor-pointer whitespace-nowrap w-[170px] border text-[14px] !rounded-[12px] transition
                  ${activeTab === cat
                    ? "bg-prime text-white border-prime"
                    : "bg-white text-[#C1C1C1] border-[#C1C1C1]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dish Cards */}
          <div className="grid grid-cols-4 gap-x-[24px] gap-y-[40px] mt-[40px]">
            {limitedDishes.map((item, index) => (
              <div
                key={index}
                className="rounded-[8px] shadow-card overflow-hidden hover:scale-95 cursor-pointer transition"
              >
                <img src={item.img} alt="img" />
                <div className="p-3">
                  <div className="flex justify-between">
                    <SubHeading className="!font-bold !text-[20px]" text={item.title} />
                    <div className="bg-[#15803D] rounded-[2px] py-[2px] px-[6px] flex gap-[3px] items-center">
                      <Star />
                      <span className="text-white text-[12px] font-normal">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                  <Description
                    className="!text-[12px] mb-[6px] mt-[2px]"
                    text={item.description}
                  />
                  <Description
                    className="!font-bold mb-[12px]"
                    text={item.price}
                  />
                  <Button className="text-prime border border-[#F87F24] w-full bg-prime">
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Show Less */}
          {dishesToShow.length > 4 && (
            <div className="flex justify-center mt-[40px]">
              <button
                className="bg-prime text-white rounded-[12px] py-4 px-[32px] text-[16px] font-semibold cursor-pointer"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FamousDishes;