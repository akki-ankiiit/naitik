import HeaderLogo from "../components/layout/HeaderLogo";
import Navigation from "../components/contactpage/Navigation";
import ContactPageBreadcrumbs from "../components/contactpage/ContactPageBreadcrumbs";
import ContactPageContent from "../components/contactpage/ContactPageContent";
import SeaViews from "../components/contactpage/SeaViews";
import Footer from "../components/layout/Footer";
import CallModal from "../components/layout/CallModal";
import MenuModal from "../components/contactpage/MenuModal";
export default function ContactPage() {
  return (
    <main
      data-barba="container"
      data-barba-namespace="contact"
      className="transition-container"
    >
      <HeaderLogo />
      <Navigation />
      <ContactPageBreadcrumbs />
      <ContactPageContent />
      <SeaViews />
      <Footer showTop={false} />
      <CallModal />
      <MenuModal />
    </main>
  );
}
