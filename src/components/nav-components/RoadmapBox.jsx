import Link from "next/link"
import { RoadmapList } from ".";


const RoadmapBox = () => {
  //
  return (
    <div className="bg-white p-6 rounded-[10px] w-full grid gap-6 max-w-[350px] lgTab:max-w-none lgTab:h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-lightNavy font-bold -tracking-[0.25px] text-lg">
          Roadmap
        </h2>
        <Link className="text-blue font-semibold underline" href="/roadmap">
          View
        </Link>
      </div>
      <RoadmapList/>
    </div>
  );
}

export default RoadmapBox