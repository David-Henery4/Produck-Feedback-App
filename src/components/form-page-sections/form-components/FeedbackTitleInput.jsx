

const FeedbackTitleInput = ({ formInfo }) => {
  const {setFormInputs, formInputs} = formInfo
  return (
    <div>
      <div>
        <label htmlFor="feedback-title">Feedback Title</label>
        <p className="text-gray font-medium mt-1">
          Add a short, descriptive headline
        </p>
      </div>
      <input
        type="text"
        id="feedback-title"
        name="feedback-title"
        className="w-full p-4 mt-4 rounded-md bg-offWhite outline-blue tab:text-[15px]"
        value={formInputs?.title}
        onChange={(e) => setFormInputs((oldValues) => {
          return {...oldValues, title: e.target.value}
        })}
      />
    </div>
  );
};

export default FeedbackTitleInput