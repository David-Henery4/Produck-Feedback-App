import Link from "next/link"
import { RoadmapList, RoadmapLink } from ".";


const RoadmapBox = () => {
  //
  return (
    <div className="bg-white dark:bg-lightNavy p-6 rounded-[10px] w-full grid gap-6 max-w-[350px] lgTab:max-w-none lgTab:h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-lightNavy dark:text-white font-bold -tracking-[0.25px] text-lg">
          Roadmap
        </h2>
        <RoadmapLink/>
      </div>
      <RoadmapList/>
    </div>
  );
}

export default RoadmapBox