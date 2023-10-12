"use client"
import { motion } from "framer-motion";

const StatusToggles = ({
  roadmapColumns,
  tabInxInfo: { currentTabInx, setCurrentTabInx },
}) => {
  //
  return (
    <div className="w-full col-start-1 col-end-13 border-b border-b-lightGray/25 lgTab:hidden">
      <div className="px-3 w-full flex justify-between items-center text-[11px] smMob:text-sm text-lightNavy/40 font-bold max-w-[500px] mx-auto">
        {roadmapColumns.map((tabs, i) => {
          return (
            <button
              key={tabs.id}
              className={`relative px-3 py-5 ${
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
                  className={`absolute  -bottom-[1px] left-0 right-0 h-1 ${
                    (tabs.label === "in-progress" && "bg-purple") ||
                    (tabs.label === "planned" && "bg-orange") ||
                    (tabs.label === "live" && "bg-lightBlue")
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

export default StatusToggles;
