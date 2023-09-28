import { GoBackBtn } from "@/components/shared-components";
import {LogoSection,Form} from "@/components/form-page-sections"

const page = () => {
  return (
    <main className="w-full pt-[34px] pb-[77px] grid grid-cols-mob smTab:grid-cols-smTab">
      <div className="w-full col-start-2 col-end-12 max-w-[540px] mx-auto">
        <GoBackBtn />
      </div>

      {/**/}

      <div className="relative w-full col-start-2 col-end-12 px-6 pb-6 pt-11 mt-14 rounded-xl text-[13px] font-bold text-lightNavy bg-white max-w-[540px] mx-auto tab:text-sm tab:px-11 tab:pb-11 tab:pt-[52px]">
        <LogoSection />

        <h1 className="text-lg tab:text-2xl">Create New Feedback</h1>

        <Form />
      </div>
    </main>
  );
};

export default page;
