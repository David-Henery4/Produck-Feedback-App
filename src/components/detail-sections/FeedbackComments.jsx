import {avatarJackson} from "public/assets/user-images"
import { Comment } from "./comments-components";

const FeedbackComments = ({ comments }) => {
  return (
    <div className="w-full p-6 bg-white rounded-xl tab:px-8">
      <h1 className="font-bold text-lg text-lightNavy">
        {comments ? comments?.length : 0} Comments
      </h1>

      {/* Comments */}
      <div className="w-full mt-6">
        {comments?.map(comment => {
          return <Comment key={comment?.id} />
        })}
        {/* Comment */}
        {/* <Comment /> */}
        {/* <Comment /> */}
      </div>
    </div>
  );
};

export default FeedbackComments