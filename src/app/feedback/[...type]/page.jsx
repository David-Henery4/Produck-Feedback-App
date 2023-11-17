import { GoBackBtn } from "@/components/shared-components";
import { LogoSection, Form, FormTitle } from "@/components/form-page-sections";
import getSingleFeedback from "@/lib/getSingleFeedback";
import { ThemeInit } from "@/components";
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
// import productRequests from "@/app/models/FeedbackSchema";
import { notFound } from "next/navigation";


// Couldn't use because: Page changed from static to dynamic at runtime, reason: headers

// export async function generateStaticParams() {
//   // Couldn't call internal api here, instead had to call db directly
//   const allFeedback = await productRequests.find({});
//   return allFeedback.map((item) => ({
//     id: item.id.toString(),
//   }));
// }


const page = async ({ params: { type } }) => {
  const mode = type[0];
  const feedbackId = type[1];
  //
  if (mode !== "edit" && mode !== "create") {
    return notFound();
  }
  //
  const session = await getServerSession(options);
  const getEditValues = async () => {
    if (mode === "edit") {
      const { data: feedbackValues } = await getSingleFeedback(feedbackId);
      if (!feedbackValues) {
        return notFound();
      }
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
      <ThemeInit />
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
