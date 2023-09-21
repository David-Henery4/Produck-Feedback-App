import Link from "next/link"
import { ArrowLeftIcon } from "public/assets/shared";

const DetailsNav = () => {
  return (
    <nav className="w-full flex justify-between items-center font-bold text-[13px] lgTab:text-sm">
      <div className="flex justify-center items-center gap-4">
        <ArrowLeftIcon />
        <Link href="/" className="text-gray hover:underline">
          Go Back
        </Link>
      </div>
      <Link href="#" className="bg-blue text-white px-4 py-[10px] rounded-xl hover:bg-blueShade active:bg-blue">
        Edit Feedback
      </Link>
    </nav>
  );
}

export default DetailsNav