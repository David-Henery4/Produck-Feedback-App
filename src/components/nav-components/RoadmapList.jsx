import getFeedbackList from "@/lib/getFeedbackList";

const RoadmapList = async () => {
  const { data: feedbackList } = await getFeedbackList();
  //
  const handleSettingStatusQuantities = () => {
    return [
      {
        id: 1,
        label: "Planned",
        quantity:
        feedbackList?.filter((req) => req.status === "planned")
        .length || 0,
        colour: "bg-orange",
      },
      {
        id: 2,
        label: "In-Progress",
        quantity:
        feedbackList?.filter((req) => req.status === "in-progress")
        .length || 0,
        colour: "bg-purple",
      },
      {
        id: 3,
        label: "Live",
        quantity:
        feedbackList?.filter((req) => req.status === "live").length ||
          0,
        colour: "bg-lightBlue",
      },
    ];
  };
  //
  return (
    <ul className="grid gap-2">
      {handleSettingStatusQuantities()?.map((road) => {
        return (
          <li key={road?.id} className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <div className={`rounded-full h-2 w-2 ${road?.colour}`}></div>
              <h3 className="text-base text-gray dark:text-offWhite font-normal">
                {road?.label}
              </h3>
            </div>
            <p className="font-bold text-base text-gray dark:text-offWhite">
              {road?.quantity}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default RoadmapList;
