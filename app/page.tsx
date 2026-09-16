//Components
import HeaderNav from "@/components/HeaderNav";
import MainComponent from "@/components/MainComponent";

// #F9FAFC #525252 #4438CA

export default function Home() {
  return (
    <div className="bg-[#F9FAFC] select-none flex flex-col flex-1 items-center justify-center font-sans">
      <HeaderNav />
      <MainComponent />
    </div>
  );
}
