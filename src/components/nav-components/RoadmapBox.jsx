"use client"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Link from "next/link"


const RoadmapBox = () => {
  const { placeholderRequests } = useSelector(
    (store) => store.productRequestsReducer
  );
  const [roadmap, setRoadmap] = useState([]);
  //
  const handleSettingStatusQuantities = () => {
    setRoadmap([
      {
        id: 1,
        label: "Planned",
        quantity: placeholderRequests?.filter(
          (req) => req.status === "planned"
        ).length || 0,
        colour: "bg-orange",
      },
      {
        id: 2,
        label: "In-Progress",
        quantity: placeholderRequests?.filter(
          (req) => req.status === "in-progress"
        ).length || 0,
        colour: "bg-purple",
      },
      {
        id: 3,
        label: "Live",
        quantity: placeholderRequests?.filter((req) => req.status === "live")
          .length || 0,
        colour: "bg-lightBlue",
      },
    ]);
  };
  //
  useEffect(() => {
    handleSettingStatusQuantities();
  }, [placeholderRequests]);
  //
  return (
    <div className="bg-white p-6 rounded-[10px] w-full grid gap-6 max-w-[350px] lgTab:max-w-none lgTab:h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-lightNavy font-bold -tracking-[0.25px] text-lg">
          Roadmap
        </h2>
        <Link className="text-blue font-semibold underline" href="/roadmap">
          View
        </Link>
      </div>
      <ul className="grid gap-2">
        {roadmap?.map((road) => {
          return (
            <li key={road?.id} className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-4">
                <div className={`rounded-full h-2 w-2 ${road?.colour}`}></div>
                <h3 className="text-base text-gray font-normal">
                  {road?.label}
                </h3>
              </div>
              <p className="font-bold text-base text-gray">{road?.quantity}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RoadmapBox