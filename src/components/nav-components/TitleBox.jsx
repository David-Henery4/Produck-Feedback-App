import { Titles } from "."
import { backgroundHeaderMobile } from "public/assets/suggestions"

const TitleBox = () => {
  return (
    <div className="relative h-full w-full flex flex-col items-start p-6 justify-end rounded-[10px] overflow-hidden lap:pt-[62px]">
      <Titles />
      <img
        className="absolute top-0 left-0 w-full h-full"
        src={backgroundHeaderMobile.src}
        alt="header background gradient"
      />
    </div>
  );
}

export default TitleBox