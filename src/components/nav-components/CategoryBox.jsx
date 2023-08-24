"use client";
import placeholderData from "@/data/data.json";
import { useEffect, useState } from "react";

const CategoryBox = () => {
  const [currRequestCategories, setCurrRequestCategories] = useState(
    placeholderData?.productRequests
  );
  //
  const handleRemoveDuplicates = (prev) => {
    const categories = [];
    prev.forEach((req) => {
      categories.push(req?.category);
    });
    //
    return [...new Set(categories)].map((cat, i) => {
      return {
        id: i + 1,
        category: cat,
      };
    });
  };
  //
  useEffect(() => {
    setCurrRequestCategories((prev) => {
      return handleRemoveDuplicates(prev);
    });
  }, []);
  //
  return (
    <div className="w-full bg-white p-6 flex flex-wrap justify-start items-center gap-2 rounded-[10px] max-w-[350px] lgTab:max-w-none lgTab:h-full">
      <div className="text-blue font-semibold text-[13px] py-[6px] px-4 bg-iceWhite rounded-[10px] capitalize mb-[6px]">
        <p>All</p>
      </div>
      {currRequestCategories?.map((prod) => {
        return (
          <div
            key={prod?.id}
            className="text-blue font-semibold text-[13px] py-[6px] px-4 bg-iceWhite rounded-[10px] capitalize mb-[6px]"
          >
            <p>{prod?.category}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryBox;
