import { IllustrationIcon } from "public/assets/suggestions";
import { AddFeedbackLink } from "../shared-components";

const EmptyFeedbackSection = () => {
  return (
    <div className="w-full h-full bg-white rounded-[10px] py-[76px] px-6 text-center grid place-items-center gap-10 smTab:gap-14 lgTab:py-[110px] lgTab:px-[140px] lap:px-[206px]">
      <IllustrationIcon />
      <div className="w-full h-full">
        <div className="mb-6 smTab:mb-12">
          <h2 className="text-lg font-bold text-lightNavy -tracking-[0.25px] mb-4 tab:text-2xl">
            There is no feedback yet.
          </h2>
          <p className="text-base font-normal text-gray">
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
        </div>
        <div className="flex justify-center">
          <AddFeedbackLink/>
        </div>
      </div>
    </div>
  );
};

export default EmptyFeedbackSection;
