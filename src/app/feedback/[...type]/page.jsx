import { GoBackBtn } from "@/components/shared-components";
import { LogoSection, Form, FormTitle } from "@/components/form-page-sections";
import getSingleFeedback from "@/lib/getSingleFeedback";
import { ThemeInit } from "@/components";
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const page = async ({ params: { type } }) => {
    const session = await getServerSession(options);
  const getEditValues = async () => {
    const mode = type[0];
    const feedbackId = type[1];
    if (mode === "edit") {
      const { data: feedbackValues } = await getSingleFeedback(feedbackId);
      return await feedbackValues;
    }
  };
  const feedbackValuesForEdit = await getEditValues();
  //
  if (!session) {
    redirect("/auth/signin");
  }
  //
  return (
    <main className="w-full pt-[34px] pb-[77px] grid grid-cols-mob smTab:grid-cols-smTab">
      <ThemeInit/>
      <div className="w-full col-start-2 col-end-12 max-w-[540px] mx-auto">
        <GoBackBtn />
      </div>

      {/**/}

      <div className="relative w-full col-start-2 col-end-12 px-6 pb-6 pt-11 mt-14 rounded-xl text-[13px] font-bold text-lightNavy dark:text-white bg-white dark:bg-lightNavy max-w-[540px] mx-auto tab:text-sm tab:px-11 tab:pb-11 tab:pt-[52px]">
        <LogoSection type={type} />

        <FormTitle type={type} feedbackValuesForEdit={feedbackValuesForEdit} />

        <Form type={type} feedbackValuesForEdit={feedbackValuesForEdit} />
      </div>
    </main>
  );
};

export default page;
