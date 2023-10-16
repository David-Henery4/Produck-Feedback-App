"use client";
import { useDispatch, useSelector } from "react-redux";
import { upDateFilterUi } from "@/redux/features/filtersSlice";
import {
  filterFeedbackList,
  sortProductRequests,
} from "@/redux/features/prodReqsSlice";
import { useEffect } from "react";

const CategoryBox = () => {
  const dispatch = useDispatch();
  const { filterOptions } = useSelector((store) => store.filterReducer);
  const { currentSortData } = useSelector((store) => store.sortReducer);
  const { placeholderRequests } = useSelector(
    (store) => store.productRequestsReducer
  );
  //
  const handleRefreshFilterAfterChanges = () => {
    const currentFilterType = filterOptions.find(
      (item) => item.isActive
    ).dataType;
    dispatch(filterFeedbackList(currentFilterType));
  };
  //
  useEffect(() => {
    dispatch(sortProductRequests(currentSortData));
  }, [filterOptions]);
  //
  useEffect(() => {
    handleRefreshFilterAfterChanges()
  }, [placeholderRequests]);
  //
  return (
    <div className="w-full bg-white p-6 flex flex-wrap justify-start items-center content-evenly gap-2 rounded-[10px] max-w-[350px] lgTab:max-w-none lgTab:h-full">
      {filterOptions?.map((prod) => {
        return (
          <div
            key={prod?.id}
            className={`font-semibold text-[13px] py-[6px] px-4 rounded-[10px] capitalize hover:cursor-pointer ${
              prod.isActive
                ? "bg-blue text-white hover:bg-blueShade"
                : "text-blue bg-iceWhite hover:bg-purpleShade"
            }`}
            onClick={() => {
              dispatch(upDateFilterUi(prod?.id));
              dispatch(filterFeedbackList(prod?.dataType));
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
