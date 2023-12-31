"use client";
import { useDispatch, useSelector } from "react-redux";
import { upDateFilterUi } from "@/redux/features/filtersSlice";

const CategoryBox = () => {
  const dispatch = useDispatch();
  const { filterOptions } = useSelector((store) => store.filterReducer);
  //
  return (
    <div className="w-full bg-white dark:bg-lightNavy p-6 flex flex-wrap justify-start items-center content-evenly gap-2 rounded-[10px] max-w-[350px] lgTab:max-w-none lgTab:h-full">
      {filterOptions?.map((prod) => {
        return (
          <div
            key={prod?.id}
            className={`font-semibold text-[13px] py-[6px] px-4 rounded-[10px] capitalize hover:cursor-pointer ${
              prod.isActive
                ? "bg-blue dark:bg-purple text-white hover:bg-blueShade"
                : "text-blue dark:text-pink bg-iceWhite dark:bg-navy hover:bg-purpleShade"
            }`}
            onClick={() => {
              dispatch(upDateFilterUi(prod?.id));
            }}
          >
            <p>{prod?.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryBox;
