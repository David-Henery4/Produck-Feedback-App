import { AddFeedbackLink } from "../../shared-components";
import { TitleAndBackLink } from "../header-components";



// Research next links

const RoadmapHeader = () => {
  return (
    <header className=" w-full col-start-1 col-end-13 bg-navy dark:bg-purple px-6 py-7 flex justify-between items-center lgTab:col-start-2 lgTab:col-end-12 lgTab:rounded-xl lgTab:max-w-[1110px] lgTab:mx-auto">
      <TitleAndBackLink />
      <AddFeedbackLink />
    </header>
  );
}

export default RoadmapHeader