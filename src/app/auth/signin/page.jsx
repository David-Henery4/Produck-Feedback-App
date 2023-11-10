import { CardHeader, CardFooter } from "@/components/auth-components";

export default async function Signin( ) {
  //
  return (
    <main className="bg-offWhite text-center grid grid-cols-mob smTab:grid-cols-smTab smTab:pt-14 smTab:pb-28">
      {/* CARD */}
      <div className="w-full max-w-lg col-start-1 col-end-13 smTab:col-start-2 smTab:col-end-12 smTab:rounded-[10px] smTab:overflow-hidden smTab:mx-auto">
        {/* card header */}
        <CardHeader/>

        {/* card footer */}
        <CardFooter/>

      </div>
      {/**/}
    </main>
  );
}
