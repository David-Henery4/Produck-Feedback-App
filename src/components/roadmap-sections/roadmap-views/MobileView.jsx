"use client"
import {  useState } from "react";
import { StatusToggles} from "..";
import { MobileColumn } from "../container-components";

const MobileView = ({ roadmapColumnData }) => {
  const [currentColumn, setCurrentColumn] = useState(1)
  return (
    <>
      <StatusToggles
        roadmapColumns={roadmapColumnData}
        currentColumn={currentColumn}
        setCurrentColumn={setCurrentColumn}
      />
      <MobileColumn
        roadmapColumns={roadmapColumnData}
        currentColumn={currentColumn}
      />
    </>
  );
};

export default MobileView;
