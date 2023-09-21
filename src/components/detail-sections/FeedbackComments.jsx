import {avatarJackson} from "public/assets/user-images"

const FeedbackComments = () => {
  return (
    <div className="w-full p-6 bg-white rounded-xl">

      <h1 className="font-bold text-lg text-lightNavy">4 Comments</h1>

      {/* Comments */}
      <div className="w-full mt-6">

        {/* Comment */}
        <div>
          <img src={avatarJackson.src} alt="Avatar of the user" />
        </div>

      </div>

    </div>
  );
}

export default FeedbackComments