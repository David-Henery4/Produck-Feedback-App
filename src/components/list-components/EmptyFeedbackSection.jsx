import { IllustrationIcon } from "public/assets/suggestions";
import { AddFeedbackLink } from "../shared-components";

const EmptyFeedbackSection = () => {
  // dark:bg-lightNavy = #3A4374
  return (
    <div className="w-full h-full bg-white dark:bg-lightNavy rounded-[10px] py-[76px] px-6 text-center grid place-items-center gap-10 smTab:gap-14 lgTab:py-[110px] lgTab:px-[140px] lap:px-[206px]">
      <div className="bg-offWhite p-6 rounded-full">
        <IllustrationIcon />
      </div>
      <div className="w-full h-full">
        <div className="mb-6 smTab:mb-12">
          <h2 className="text-lg font-bold text-lightNavy dark:text-white -tracking-[0.25px] mb-4 tab:text-2xl">
            There is no feedback yet.
          </h2>
          <p className="text-base max-w-[365px] mx-auto font-normal text-gray dark:text-offWhite">
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
        </div>
        <div className="flex justify-center">
          <AddFeedbackLink />
        </div>
      </div>
    </div>
  );
};

export default EmptyFeedbackSection;
