import Link from "next/link"
import {GoBackBtn} from "@/components/shared-components"

const DetailsNav = () => {
  return (
    <nav className="w-full flex justify-between items-center font-bold text-[13px] lgTab:text-sm">
      <GoBackBtn/>
      <Link href="#" className="bg-blue text-white px-4 py-[10px] rounded-xl hover:bg-blueShade active:bg-blue">
        Edit Feedback
      </Link>
    </nav>
  );
}

export default DetailsNav