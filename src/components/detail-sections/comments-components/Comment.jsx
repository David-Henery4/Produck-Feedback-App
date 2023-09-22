import { avatarJackson } from "public/assets/user-images";

const Comment = () => {
  return (
    <div className="py-6 text-[13px] text-gray font-medium grid grid-cols-commentMob gap-4 border-t-lightGray/25 border-t first:border-none lgTab:grid-cols-commentTab lgTab:gap-x-0 lgTab:py-8">
      <img
        className="w-10 h-10 rounded-full object-cover object-center"
        src={avatarJackson.src}
        alt="Avatar of the user"
      />

      <div className="flex justify-between items-center lgTab:col-start-3 lgTab:col-end-4">
        <div>
          <h3 className="font-bold text-lightNavy">Elijah Moss</h3>
          <h4>@hexagon.bestagon</h4>
        </div>
        <button className="font-semibold text-blue">Reply</button>
      </div>

      {/* Bottom */}

      <div className="col-start-1 col-end-3 lgTab:col-start-3 lgTab:col-end-4">
        <p>
          Also, please allow styles to be applied based on system preferences. I
          would love to be able to browse Frontend Mentor in the evening after
          my device’s dark mode turns on without the bright background it
          currently has.
        </p>
      </div>
    </div>
  );
};

export default Comment;
