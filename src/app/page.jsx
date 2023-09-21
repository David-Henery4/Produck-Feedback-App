import {FeedbackBarSection, FeedbackListSection, NavSection} from "@/components"

// CHANGE THE HEIGHT ON THE ITEMS IN THE SIDEBAR ON SMALLER SCREENS
// ADD OVERFLOW SCROLL TO SIDEBAR

export default function Home() {
  return (
    <main className="grid grid-cols-mob auto-rows-min min-h-[100svh] overflow-x-hidden overflow-y-clip pb-14 smTab:grid-cols-smTab lgTab:pt-14 lgTab:pb-28 lap:grid-cols-lap">
      <NavSection />
      <FeedbackBarSection /> 
      <FeedbackListSection />
    </main>
  );
}
