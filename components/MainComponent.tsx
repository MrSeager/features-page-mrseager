//Components
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

export default function MainComponent() {
    return(
      <main className="rounded-md flex flex-1 w-full max-w-[120rem] flex-col items-center justify-between px-5">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
    );
}