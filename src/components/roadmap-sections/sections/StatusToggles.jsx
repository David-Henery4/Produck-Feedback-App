"use client"
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { changeRoadmapColumn } from "@/redux/features/prodReqsSlice";

const StatusToggles = ({
  roadmapColumns,
}) => {
  const dispatch = useDispatch()
  const { currentRoadmapColumnIndex } = useSelector(
    (store) => store.productRequestsReducer
  );
  //
  return (
    <div className="w-full col-start-1 col-end-13 border-b border-b-lightGray/25 dark:border-b-pink/25 lgTab:hidden">
      <div className="px-3 w-full flex justify-between items-center text-[11px] smMob:text-sm text-lightNavy/40 dark:text-offWhite/40 font-bold max-w-[500px] mx-auto">
        {roadmapColumns.map((tabs, i) => {
          return (
            <button
              key={tabs.id}
              className={`relative px-3 py-5 ${
                currentRoadmapColumnIndex === i
                  ? "text-lightNavy dark:text-offWhite"
                  : ""
              }`}
              onClick={() => dispatch(changeRoadmapColumn(i))}
            >
              <p
                className={`capitalize transition-all ${
                  currentRoadmapColumnIndex === i ? "scale-110" : "scale-100"
                }`}
              >
                {tabs.label} ({tabs?.columnData.length})
              </p>
              {i === currentRoadmapColumnIndex ? (
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
