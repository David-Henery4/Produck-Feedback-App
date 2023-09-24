

const AddComments = () => {
  return (
    <div className="w-full p-6 text-[13px] font-medium bg-white rounded-xl tab:px-8 lgTab:text-[15px]">
      <label
        htmlFor="comment-input"
        className="text-lg font-bold text-lightNavy"
      >
        Add comment
      </label>
      <textarea
        placeholder="Type your comment here"
        name="comment-input"
        id="comment-input"
        className="resize-none outline-blue w-full h-20 p-4 bg-offWhite mt-6"
      ></textarea>
      <div className="w-full flex justify-center items-center flex-wrap gap-4 mt-4 smMob:justify-between">
        <p className="text-gray">250 Characters left</p>
        <button className="rounded-xl bg-purple font-bold text-iceWhite px-4 py-3 hover:bg-pink active:bg-purple lgTab:text-[14px]">
          Post Comment
        </button>
      </div>
    </div>
  );
}

export default AddComments