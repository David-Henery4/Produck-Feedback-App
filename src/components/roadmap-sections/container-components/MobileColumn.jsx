"use client";
import { ColumnHeader, ColumnContainer } from ".";
import { motion, AnimatePresence } from "framer-motion";

const MobileColumn = ({ roadmapColumns, currentColumn }) => {
  //
  return (
    <div className="w-full col-start-2 col-end-12 max-w-md mx-auto mt-6 lgTab:hidden">
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
        })[currentColumn]
      }
    </div>
  );
};

export default MobileColumn;
