
const updateDropdownInputs = (id, overallData, currentValue, currentData) => {
  const updatedOverall = overallData.map((item) => {
    if (item.id === id) {
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