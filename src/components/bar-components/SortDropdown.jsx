"use client";
import { CheckIcon } from "public/assets/shared";
import { handleSort } from "@/redux/features/sortSlice";
import { useDispatch, useSelector } from "react-redux";

const SortDropdown = ({ dropdownInfo }) => {
  const { sortData } = useSelector(
    (store) => store.sortReducer
  );
  const dispatch = useDispatch();
  const { isSortOpen, setIsSortOpen } = dropdownInfo;
  //
  return (
    <div
      className={`absolute top-14 left-0 bg-white dark:bg-lightNavy shadow-sortDropdown dark:shadow-sortDropdownDark w-64 z-20 rounded-[10px] ${
        isSortOpen ? "block" : "hidden"
      }`}
    >
      <ul>
        {sortData?.map((s) => {
          return (
            <li
              className="relative py-3 px-6 text-sm group flex justify-between items-center border-b border-lightNavy/20 dark:border-pink/20 last:border-none"
              key={s?.id}
              onClick={() => setIsSortOpen(!isSortOpen)}
            >
              <label htmlFor={s?.sortBy}>
                <input
                  type="radio"
                  name="sort-option"
                  id={s?.sortBy}
                  value={s?.sortBy}
                  className="absolute top-0 left-0 w-full h-full opacity-0 hover:cursor-pointer"
                  checked={s?.isActive}
                  onChange={() => {
                    dispatch(handleSort(s));
                  }}
                />
                <span>
                  <p className="text-gray dark:text-offWhite group-hover:text-purple dark:group-hover:text-blue">
                    {s?.label}
                  </p>
                </span>
              </label>
              {s?.isActive && <CheckIcon className="stroke-purple dark:stroke-blue" />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SortDropdown;
