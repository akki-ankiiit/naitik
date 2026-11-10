import MasterPreloader from "./MasterPreloader";
import Preloader from "./Preloader";
import CookieNotice from "./CookieNotice";
export default function ExperienceShell() {
  return (
    <>
      <MasterPreloader />
      <Preloader />
      <CookieNotice />
    </>
  );
}
