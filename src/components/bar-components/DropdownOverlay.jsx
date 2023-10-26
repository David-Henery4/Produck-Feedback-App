
const DropdownOverlay = ({dropdownInfo: { isSortOpen, setIsSortOpen }}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-10 ${
        isSortOpen ? "block" : "hidden"
      }`}
      onClick={() => isSortOpen && setIsSortOpen(false)}></div>
  );
}

export default DropdownOverlay