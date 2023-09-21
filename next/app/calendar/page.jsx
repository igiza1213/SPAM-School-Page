import Arrow from "@/components/Arrow";
import Seo from "@/components/Seo";
import CalendarPage from "./CalendarPage";

export const metadata = {
  title: "calendar",
};

export default function Calender() {
  return (
    <>
      <Seo title="Calendar" />
      <CalendarPage></CalendarPage>
    </>
  );
}
