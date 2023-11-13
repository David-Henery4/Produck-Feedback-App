import Link from "next/link"
import {GoBackBtn} from "@/components/shared-components"

const DetailsNav = ({id}) => {
  return (
    <nav className="w-full flex justify-between items-center font-bold text-[13px] lgTab:text-sm">
      <GoBackBtn />
      <Link
        href={`/feedback/edit/${id}`}
        className="bg-blue dark:bg-purple text-white px-4 py-[10px] rounded-xl hover:bg-blueShade dark:hover:bg-purple/75 active:bg-blue active:dark:bg-purple"
      >
        Edit Feedback
      </Link>
    </nav>
  );
}

export default DetailsNav