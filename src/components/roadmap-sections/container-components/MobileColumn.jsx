"use client"
import { ColumnHeader, ColumnContainer } from ".";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const MobileColumn = ({ roadmapColumns }) => {
  const { currentRoadmapColumnIndex } = useSelector(
    (store) => store.productRequestsReducer
  );
  //
  return (
    <div className="w-full lgTab:hidden">
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
        })[currentRoadmapColumnIndex]
      }
    </div>
  );
};

export default MobileColumn