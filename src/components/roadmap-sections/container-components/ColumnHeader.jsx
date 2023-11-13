

const ColumnHeader = ({ label, description, columnData }) => {
  return (
    <div>
      <h2 className="text-lg font-bold capitalize text-lightNavy dark:text-white -tracking-[0.25px] lgTab:text-sm lap:text-lg">
        {label} ({columnData.length})
      </h2>
      <p className="pt-1 text-[13px] text-gray dark:text-offWhite lgTab:text-sm lap:text-base">
        {description}
      </p>
    </div>
  );
};

export default ColumnHeader