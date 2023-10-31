"use client"
import {useRouter} from "next/navigation"
import Link from "next/link";
import { ArrowLeftIcon } from "public/assets/shared";

const GoBackBtn = ({isRoadmap = false}) => {
  const router = useRouter()
  return (
    <div>
      <Link
        href=""
        className={`${
          isRoadmap ? "text-white" : "text-gray"
        } inline-flex justify-center items-center gap-4 text-[13px] lgTab:text-[14px] hover:underline`}
        onClick={() => router.back()}
      >
        <span>
          <ArrowLeftIcon
            className={`${
              isRoadmap ? "stroke-slightWhite" : "stroke-blue"
            } stroke-2`}
          />
        </span>
        Go Back
      </Link>
    </div>
  );
};

export default GoBackBtn;
