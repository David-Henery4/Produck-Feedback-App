
const Overlay = ({ isSidebarOpen , setIsSidebarOpen }) => {
  return (
    // () => {}
    <div
      className={`absolute top-full left-0 w-full h-screen bg-black/75 z-40 ${
        isSidebarOpen ? "block" : "hidden"
      }`}
      onClick={() => setIsSidebarOpen(false)}
    ></div>
  );
};

export default Overlay