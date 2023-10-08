
const updateDropdownInputs = (id, overallData, currentValue, currentData, dataType) => {
  const updatedOverall = overallData.map((item) => {
    if (item.id === id || dataType === item.dataType) {
      item.isActive = true;
      currentValue = item.label;
      currentData = item;
    } else {
      item.isActive = false;
    }
    return item;
  });
  return { updatedOverall, currentValue, currentData };
};

export default updateDropdownInputs