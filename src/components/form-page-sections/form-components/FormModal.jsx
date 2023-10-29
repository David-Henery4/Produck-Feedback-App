import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import deleteFeedback from "@/lib/deleteFeedback";

const FormModal = ({ type, modal: { isModalActive, setIsModalActive } }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  //
  const handleDeleteFeedback = async (id) => {
    await deleteFeedback(id);
  };
  //
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/80 z-50 grid place-items-center">
      <div className="w-11/12 p-8 rounded-xl max-w-lg bg-white text-center">
        <h2 className="text-lg smMob:text-2xl font-medium">
          Are you sure you want to delete this post?
        </h2>
        <div className="w-full mt-8 flex justify-center items-center gap-6">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsModalActive(false);
            }}
            className="w-full py-3 px-7 rounded-xl bg-lightNavy text-white hover:bg-lighterNavy active:bg-lightNavy lgTab:w-24 lgTab:px-6"
          >
            Cancel
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              router.replace("/");
              handleDeleteFeedback(type[1]);
              setIsModalActive(false);
            }}
            className="w-full py-3 px-7 rounded-xl bg-red hover:bg-lightRed active:bg-red text-white lgTab:w-24 lgTab:px-6"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormModal;

// OLD COMPONENT LOGIC

// import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { deleteFeedback } from "@/redux/features/prodReqsSlice";

// const FormModal = ({ type, modal: { isModalActive, setIsModalActive } }) => {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   //
//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-black/80 z-50 grid place-items-center">
//       <div className="w-11/12 p-8 rounded-xl max-w-lg bg-white text-center">
//         <h2 className="text-lg smMob:text-2xl font-medium">
//           Are you sure you want to delete this post?
//         </h2>
//         <div className="w-full mt-8 flex justify-center items-center gap-6">
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               setIsModalActive(false);
//             }}
//             className="w-full py-3 px-7 rounded-xl bg-lightNavy text-white hover:bg-lighterNavy active:bg-lightNavy lgTab:w-24 lgTab:px-6"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               router.replace("/");
//               dispatch(deleteFeedback(type[1]));
//               setIsModalActive(false);
//             }}
//             className="w-full py-3 px-7 rounded-xl bg-red hover:bg-lightRed active:bg-red text-white lgTab:w-24 lgTab:px-6"
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
