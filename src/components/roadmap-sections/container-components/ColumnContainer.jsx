import { RoadmapFeedbackBox } from "."

const ColumnContainer = ({ columnData, color }) => {
  return (
    <div className="mt-6 lap:mt-8 grid gap-6">
      {columnData.map(col => {
        return <RoadmapFeedbackBox key={col.id} {...col} color={color} />;
      })}
    </div>
  );
};

export default ColumnContainer