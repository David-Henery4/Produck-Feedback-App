import { CheckIcon } from "public/assets/shared";

const FormDropdown = ({ isDropdownOpen, inputName, inputOptions }) => {
  return (
    <div
      className={`absolute top-14 left-0 bg-white shadow-sortDropdown w-full z-20 rounded-[10px] ${
        isDropdownOpen ? "block" : "hidden"
      }`}
    >
      <ul>
        {inputOptions.map((category) => {
          return (
            <li
              key={category.id}
              className="relative py-3 px-6 text-sm group flex justify-between items-center border-b group border-lightNavy/20 last:border-none"
            >
              <label htmlFor={category.dataType}>
                <input
                  type="radio"
                  name={inputName}
                  id={category.dataType}
                  value={category.dataType}
                  checked={category.isActive}
                  className="absolute top-0 left-0 w-full h-full opacity-0 hover:cursor-pointer"
                  onChange={() => console.log(category.dataType)}
                />
                <span className="group-hover:text-purple">
                  <p>{category.label}</p>
                </span>
              </label>
              {category.isActive && <CheckIcon />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FormDropdown;
