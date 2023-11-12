// name = password
import { Visible, NotVisible } from "public/assets/providers";

const CredentialInput = ({
  name,
  label,
  isInputInvalid,
  setValue,
  value,
  isPasswordVisible = null,
  setIsPasswordVisible = null,
}) => {
  //
  return (
    <div className="mt-4 grid gap-1">
      <label
        htmlFor={name}
        className="text-lightNavy font-bold -tracking-[0.19px]"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          className={`bg-offWhite dark:bg-navy w-full outline-none pl-3 py-4 pr-12 rounded-[10px] ${
            isInputInvalid
              ? "border border-red"
              : "border border-offWhite dark:border-navy"
          } ${
            name === "password" &&
            !isPasswordVisible &&
            "font-[math] tracking-[2px]"
          }`}
          name={name}
          type={
            name === "password" && isPasswordVisible
              ? "text"
              : name === "password"
              ? !isPasswordVisible && "password"
              : "text"
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {name === "password" && isPasswordVisible ? (
          <Visible
            className="absolute top-1/2 right-[14px] -translate-y-1/2 fill-black dark:fill-white hover:cursor-pointer"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        ) : (
          name === "password" &&
          !isPasswordVisible && (
            <NotVisible
              className="absolute top-1/2 right-[14px] -translate-y-1/2 fill-black dark:fill-white hover:cursor-pointer"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          )
        )}
      </div>
      {isInputInvalid && (
        <p className="text-sm font-normal text-red">{label} is required!</p>
      )}
    </div>
  );
};

export default CredentialInput;
