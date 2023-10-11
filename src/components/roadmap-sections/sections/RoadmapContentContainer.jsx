"use client";
import { useEffect, useState } from "react";
import { ColumnHeader, ColumnContainer } from "../container-components";
import { useSelector, useDispatch } from "react-redux";
import { setInitialRoadmapColumns } from "@/redux/features/prodReqsSlice";
import { StatusToggles } from "..";
import { motion, AnimatePresence } from "framer-motion";

const RoadmapContentContainer = () => {
  const [currentTabInx,setCurrentTabInx] = useState(1)
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
    <>
      <StatusToggles
        roadmapColumns={roadmapColumns}
        tabInxInfo={{ currentTabInx, setCurrentTabInx }}
        
      />
      <main className="w-full col-start-2 col-end-12 flex justify-between items-start gap-[10px] mt-6 max-w-md mx-auto lgTab:max-w-[1110px] lgTab:mx-0 lgTab:mt-8 lap:mx-auto lap:gap-[30px]">
        {
          roadmapColumns.map((col, i) => {
            return (
              <AnimatePresence key={col.id} mode="wait">
                <motion.div
                  className="w-full"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ColumnHeader {...col} />
                  <ColumnContainer {...col} />
                </motion.div>
              </AnimatePresence>
            );
          })[currentTabInx]
        }
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
    </>
  );
};

export default RoadmapContentContainer;
