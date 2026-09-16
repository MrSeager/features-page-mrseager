//Components
import SectionOne from "./SectionOne";

export default function MainComponent() {
    return(
      <main className="rounded-md flex flex-1 w-full max-w-[120rem] flex-col items-center justify-between px-5">
        <SectionOne />
      </main>
    );
}