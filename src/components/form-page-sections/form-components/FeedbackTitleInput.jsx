

const FeedbackTitleInput = () => {
  return (
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
        className="w-full p-4 mt-4 rounded-md bg-offWhite"
      />
    </div>
  );
}

export default FeedbackTitleInput