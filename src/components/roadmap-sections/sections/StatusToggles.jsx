"use client"
import { TaskAbortError } from "@reduxjs/toolkit";
import { motion } from "framer-motion";

const StatusToggles = ({
  roadmapColumns,
  tabInxInfo: { currentTabInx, setCurrentTabInx },
}) => {
  //
  return (
    <div className="w-full col-start-1 col-end-13 border-b border-b-lightGray/25 lgTab:hidden">
      <div className="w-full flex justify-between items-center text-sm text-lightNavy/40 font-bold max-w-[500px] mx-auto">
        {roadmapColumns.map((tabs, i) => {
          return (
            <button
              key={tabs.id}
              className={`relative px-7 py-5 ${
                currentTabInx === i ? "text-lightNavy" : ""
              }`}
              onClick={() => setCurrentTabInx(i)}
            >
              <p
                className={`capitalize transition-all ${
                  currentTabInx === i ? "scale-110" : "scale-100"
                }`}
              >
                {tabs.label} ({tabs?.columnData.length})
              </p>
              {i === currentTabInx ? (
                <motion.div
                  className={`absolute -bottom-[1px] left-0 right-0 h-1 ${
                    tabs.label === "in-progress" && "bg-purple" || tabs.label === "planned" && "bg-orange" || tabs.label === "live" && "bg-lightBlue"
                  }`}
                  layoutId="underline"
                />
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// styles

{
  /* <div className="w-full flex justify-between items-center text-sm text-lightNavy/40 font-bold max-w-[500px] mx-auto">
  <button className="px-7 py-5">
    <p className="scale-100 transition-all">Planned (2)</p>
  </button>
  <button className=" text-lightNavy px-7 py-5 border-b-4 border-b-purple">
    <p className="scale-110 transition-all">In-Progress (3)</p>
  </button>
  <button className="px-7 py-5">
    <p className="scale-100 transition-all">Live (1)</p>
  </button>
</div>; */
}

export default StatusToggles;
