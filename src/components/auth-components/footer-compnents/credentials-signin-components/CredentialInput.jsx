
// name = password

const CredentialInput = ({name, label, isInputInvalid, setValue, value}) => {
  return (
    <div className="mt-4">
      <label
        htmlFor={name}
        className="text-lightNavy font-bold -tracking-[0.19px]"
      >
        {label}
      </label>
      <input
        id={name}
        className={`bg-offWhite w-full outline-none px-3 py-4 mt-3 rounded-[10px] ${
          isInputInvalid ? "border border-red" : "border border-offWhite"
        }`}
        name={name}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {isInputInvalid && (
        <p className="text-sm font-normal text-red mt-1">
          {label} is required!
        </p>
      )}
    </div>
  );
}

export default CredentialInput