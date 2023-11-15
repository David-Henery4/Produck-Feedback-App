// export const dynamic = "force-dynamic"; = allowed const { data } = await getFeedbackList(), to work in this component, need to research why!
import {SignOutAndThemeToggle,Dashboard} from "@/components";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/auth/signin");
  }
  //
  return (
    <>
      <SignOutAndThemeToggle user={session} />
      <Dashboard/>
    </>
  );
}
