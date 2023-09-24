import { ArrowLeftIcon } from "public/assets/shared";
import Link from "next/link";
import {GoBackBtn} from "@/components/shared-components"

const TitleAndBackLink = () => {
  return (
    <div className="text-white font-bold flex flex-col justify-start items-center">
      <GoBackBtn isRoadmap={true}/>
      <h1 className="text-lg lgTab:text-2xl">Roadmap</h1>
    </div>
  );
};

export default TitleAndBackLink;
