"use client"
import { useState } from "react";
import { ArrowDownIcon } from "../../../public/assets/shared";
import {SortDropdown, DropdownOverlay} from "."
import { useSelector } from "react-redux";

const SortContainer = () => {
  const { currentSortLabel } = useSelector((store) => store.sortReducer);
  const [isSortOpen, setIsSortOpen] = useState(false);
  //
  return (
    <div className="relative z-20">
      <DropdownOverlay dropdownInfo={{ isSortOpen, setIsSortOpen }} />
      <p
        className="hover:cursor-pointer"
        onClick={() => setIsSortOpen(!isSortOpen)}
      >
        Sort by :{" "}
        <span className="inline-flex justify-center items-center gap-2 font-bold text-sm">
          {currentSortLabel}
          <ArrowDownIcon className="stroke-white" />
        </span>
      </p>
      <SortDropdown dropdownInfo={{ isSortOpen, setIsSortOpen }} />
    </div>
  );
};

export default SortContainer;
