import MainLyout from "@/components/layouts/MainLayout";
import LastEducations from "@/components/templates/main/LastEducations/LastEducations";
import LatestBlugs from "@/components/templates/main/LastestBlugs/LatestBlugs";
import LastMarketing from "@/components/templates/main/LastMarketing/LastMarketing";
import Travel from "@/components/templates/main/Travel/Travel";

export default function Home() {
  return (
    <>
      <MainLyout>
        <LatestBlugs />
        <LastEducations/>
        <LastMarketing/>
        <Travel/>
      </MainLyout>
    </>
  );
}
