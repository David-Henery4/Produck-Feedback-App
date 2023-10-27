
const FormTitle = ({ type, feedbackValuesForEdit }) => {
  return (
    <h1 className="text-lg tab:text-2xl">
      {type[0] === "edit"
        ? `Editing ‘${feedbackValuesForEdit?.title}’`
        : "Create New Feedback"}
    </h1>
  );
};

export default FormTitle