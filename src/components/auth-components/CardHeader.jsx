import { backgroundHeaderMobile, DuckLogo } from "/public/assets/suggestions";

const CardHeader = () => {
  return (
    <div className="relative px-6 py-9 smTab:px-14 tab:px-20">
      {/* Might Change to Background IMG */}
      <img
        className="absolute w-full h-full top-0 left-0"
        src={backgroundHeaderMobile.src}
        alt="background for the sign-in/sign-up page header."
      />
      <div className="relative text-white flex flex-col justify-center items-center gap-8">
        <h1 className="text-3xl font-bold">Produck Feedback</h1>
        <DuckLogo />
        <p className="font-medium text-white/75">
          The feedback board application you’ve been waiting for
        </p>
      </div>
    </div>
  );
}

export default CardHeader