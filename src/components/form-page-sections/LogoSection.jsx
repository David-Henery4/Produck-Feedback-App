import { backgroundHeaderDesktop } from "public/assets/suggestions";

const LogoSection = () => {
  return (
    <div className="absolute -top-5 left-6 w-10 h-10 rounded-full overflow-hidden">
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] z-10 text-xl text-white">
        +
      </p>
      <img
        className="object-cover object-center h-full w-full"
        src={backgroundHeaderDesktop.src}
        alt="Logo for the create/edit feedback form"
      />
    </div>
  );
};

export default LogoSection;
