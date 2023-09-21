

const StatusToggles = () => {
  return (
    <div className="w-full col-start-1 col-end-13 border-b border-b-lightGray/25 lgTab:hidden">
      <div className="w-full flex justify-between items-center text-sm text-lightNavy/40 font-bold max-w-[500px] mx-auto">
        <button className="px-7 py-5">
          Planned (2)
        </button>
        <button className=" text-lightNavy px-7 py-5 border-b-4 border-b-purple">
          In-Progress (3)
        </button>
        <button className="px-7 py-5">
          Live (1)
        </button>
      </div>
    </div>
  );
}

export default StatusToggles