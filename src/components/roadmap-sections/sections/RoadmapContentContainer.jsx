"use client";
import { useState } from "react";
import { ColumnHeader, ColumnContainer } from "../container-components";
import { StatusToggles } from "..";
import { motion, AnimatePresence } from "framer-motion";

const RoadmapContentContainer = ({ roadmapColumnData }) => {
  const [currentTabInx, setCurrentTabInx] = useState(1);
  //
  return (
    <>
      <StatusToggles
        roadmapColumns={roadmapColumnData}
        tabInxInfo={{ currentTabInx, setCurrentTabInx }}
      />
      <main className="w-full col-start-2 col-end-12 mt-6 max-w-md mx-auto lgTab:max-w-[1110px] lgTab:mx-0 lgTab:mt-8 lap:mx-auto">
        <div className="w-full lgTab:hidden">
          {
            roadmapColumnData.map((col, i) => {
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
        </div>
        {/**/}
        <div className="hidden lgTab:flex justify-between items-start gap-[10px] lap:gap-[30px]">
          {roadmapColumnData.map((col, i) => {
            return (
              <div key={col.id} className="w-full">
                <ColumnHeader {...col} />
                <ColumnContainer {...col} />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default RoadmapContentContainer;
