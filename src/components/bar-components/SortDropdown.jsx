"use client"
import { CheckIcon } from "public/assets/shared";

const SortDropdown = ({ dropdownInfo }) => {
  const {isSortOpen, sortInfo, setIsSortOpen, handleSort} = dropdownInfo
  return (
    <div
      className={`absolute top-14 left-0 bg-white shadow-sortDropdown w-64 z-20 rounded-[10px] ${
        isSortOpen ? "block" : "hidden"
      }`}
    >
      <ul>
        {sortInfo?.map((s) => {
          return (
            <li
              className="relative py-3 px-6 text-sm group flex justify-between items-center border-b border-lightNavy/20 last:border-none"
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
                    handleSort(s);
                  }}
                />
                <span>
                  <p className="text-gray group-hover:text-purple">{s?.label}</p>
                </span>
              </label>
              {s?.isActive && <CheckIcon />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SortDropdown