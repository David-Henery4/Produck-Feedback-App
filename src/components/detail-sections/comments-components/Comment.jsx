// import { avatarJackson } from "public/assets/user-images";

const Comment = ({ id, content, user, replies, isReply, replyingTo = null }) => {
  const { name, username, image } = user;
  //
  return (
    <div
      className={`text-[13px] text-gray font-medium grid grid-cols-commentMob lgTab:grid-cols-commentTab lgTab:gap-x-0 ${
        isReply
          ? "pl-6 py-0 gap-4 lgTab:gap-[10px] lgTab:pl-11 lgTab:py-0"
          : "py-6 gap-4 lgTab:py-8"
      }`}
    >
      <img
        className="w-10 h-10 rounded-full object-cover object-center"
        src={`/assets/user-images/${image}`}
        alt="Avatar of the user"
      />

      <div className="flex justify-between items-center lgTab:col-start-3 lgTab:col-end-4">
        <div>
          <h3 className="font-bold text-lightNavy">{name}</h3>
          <h4>{username}</h4>
        </div>
        <button className="font-semibold text-blue hover:underline">
          Reply
        </button>
      </div>

      {/* Bottom */}

      <div className="col-start-1 col-end-3 lgTab:col-start-3 lgTab:col-end-4">
        {isReply ? (
          <p>
            <span className="text-purple font-bold">@{replyingTo}</span>{" "}
            {content}
          </p>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default Comment;
