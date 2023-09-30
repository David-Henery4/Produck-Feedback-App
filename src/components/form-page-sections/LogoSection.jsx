import { EditFeedbackIcon, NewFeedbackIcon } from "public/assets/shared";

const LogoSection = ({ type }) => {
  return (
    <div className="absolute -top-5 left-6 w-10 h-10 tab:h-14 tab:w-14 tab:-top-7">
      {type[0] === "edit" ? (
        <EditFeedbackIcon className="w-full h-full" />
      ) : (
        <NewFeedbackIcon className="w-full h-full" />
      )}
    </div>
  );
};

export default LogoSection;
