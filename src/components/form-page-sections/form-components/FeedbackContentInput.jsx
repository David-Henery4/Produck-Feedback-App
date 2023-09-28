

const feedbackContentInput = ({formInfo}) => {
  const { setFormInputs, formInputs } = formInfo;
  return (
    <div>
      <div>
        <label htmlFor="feedback-content">Feedback Detail</label>
        <p className="text-gray font-medium mt-1">
          Include any specific comments on what should be improved, added, etc.
        </p>
      </div>

      <textarea
        className="resize-none w-full p-4 mt-4 rounded-md bg-offWhite outline-blue min-h-[120px] tab:text-[15px]"
        name="feedback-content"
        id="feedback-content"
        value={formInputs?.comment}
        onChange={(e) => setFormInputs((oldValues) => {
          return {...oldValues, comment: e.target.value}
        })}
      ></textarea>
    </div>
  );
}

export default feedbackContentInput