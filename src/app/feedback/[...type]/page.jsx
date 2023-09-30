import { GoBackBtn } from "@/components/shared-components";
import {LogoSection,Form, FormTitle} from "@/components/form-page-sections"


const page = ({ params: {type} }) => {
  return (
    <main className="w-full pt-[34px] pb-[77px] grid grid-cols-mob smTab:grid-cols-smTab">
      <div className="w-full col-start-2 col-end-12 max-w-[540px] mx-auto">
        <GoBackBtn type={type}/>
      </div>

      {/**/}

      <div className="relative w-full col-start-2 col-end-12 px-6 pb-6 pt-11 mt-14 rounded-xl text-[13px] font-bold text-lightNavy bg-white max-w-[540px] mx-auto tab:text-sm tab:px-11 tab:pb-11 tab:pt-[52px]">
        <LogoSection type={type} />

        <FormTitle type={type} />

        <Form type={type} />
      </div>
    </main>
  );
};

export default page;
