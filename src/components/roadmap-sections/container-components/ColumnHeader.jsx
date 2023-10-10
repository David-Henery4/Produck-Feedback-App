

const ColumnHeader = ({ label, description, columnData }) => {
  return (
    <div>
      <h2 className="text-lg font-bold capitalize text-lightNavy -tracking-[0.25px] lgTab:text-sm lap:text-lg">
        {label} ({columnData.length})
      </h2>
      <p className="pt-1 text-[13px] text-gray lgTab:text-sm lap:text-base">
        {description}
      </p>
    </div>
  );
};

export default ColumnHeader