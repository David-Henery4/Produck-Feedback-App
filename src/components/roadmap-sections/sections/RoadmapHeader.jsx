import { AddFeedbackLink } from "../../shared-components";
import { TitleAndBackLink } from "../header-components";



// Research next links

const RoadmapHeader = () => {
  return (
    <header className="col-start-1 col-end-13 bg-navy px-6 py-7 flex justify-between items-center">
      <TitleAndBackLink/>
      <AddFeedbackLink />
    </header>
  );
}

export default RoadmapHeader