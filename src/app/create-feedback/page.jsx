import { GoBackBtn } from "@/components/shared-components";

const page = () => {
  return (
    <main className="w-full pt-[34px] pb-[77px] grid grid-cols-mob smTab:grid-cols-smTab">
      <div className="w-full col-start-2 col-end-12">
        <GoBackBtn />
      </div>

      {/**/}

      <div className="w-full col-start-2 col-end-12 px-6 pb-6 pt-11 mt-14 rounded-xl text-[13px] font-bold text-lightNavy bg-white">
        <h1 className="text-lg">Create New Feedback</h1>

        <form className="mt-6">
          <div>
            <div>
              <label htmlFor="feedback-title">Feedback Title</label>
              <p className="text-gray font-medium">
                Add a short, descriptive headline
              </p>
            </div>
            <input
              type="text"
              id="feedback-title"
              name="feedback-title"
              className="w-full p-4 bg-offWhite"
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default page;
