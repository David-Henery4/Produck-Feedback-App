"use client";
import { useEffect } from "react";
import { ColumnHeader, ColumnContainer } from "../container-components";
import { useSelector, useDispatch } from "react-redux";
import { setInitialRoadmapColumns } from "@/redux/features/prodReqsSlice";

const RoadmapContentContainer = () => {
  const dispatch = useDispatch()
  const { placeholderRequests, roadmapColumns } = useSelector(
    (store) => store.productRequestsReducer
  );
  //
  useEffect(() => {
    dispatch(setInitialRoadmapColumns())
  }, [placeholderRequests]);
  //
  return (
    <main className="w-full col-start-2 col-end-12 flex justify-between items-start gap-[10px] mt-6 max-w-md mx-auto lgTab:max-w-[1110px] lgTab:mx-0 lgTab:mt-8 lap:mx-auto lap:gap-[30px]">
      {roadmapColumns.map(col => {
        return (
          <div key={col.id} className="w-full">
            <ColumnHeader {...col} />
            <ColumnContainer {...col}/>
          </div>
        );
      })[1]}
      {/* <div className="w-full">
        <ColumnHeader />
        <ColumnContainer />
      </div> */}
      {/* JUST FOR NOW, WILL BE DIFFERENT WHEN FUNCTIONAL */}
      {/* Temp style: hidden lgTab:block */}
      {/* <div className="w-full hidden lgTab:block">
        <ColumnHeader />
        <ColumnContainer />
      </div>
      <div className="w-full hidden lgTab:block">
        <ColumnHeader />
        <ColumnContainer />
      </div> */}
    </main>
  );
};

export default RoadmapContentContainer;
