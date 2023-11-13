"use client"
import Link from "next/link";

const RoadmapLink = () => {
  //
  const resetScrollbar = () => {
    document.body.classList.remove("overflow-y-hidden");
  }
  //
  return (
    <Link
      className="text-blue dark:text-pink font-semibold underline"
      href="/roadmap"
      onClick={() => {
        resetScrollbar()
      }}
    >
      View
    </Link>
  );
};

export default RoadmapLink;
