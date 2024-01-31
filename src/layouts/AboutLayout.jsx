import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Logo from "../components/common/Logo";
import AboutPage from "../pages/about";

function AboutLayout() {
  return (
    <div className="relative">
      <span className="fixed top-0 darkMode w-full z-[50]">
        <Logo />
      </span>
      <Header />
      <AboutPage />
      <Footer />
    </div>
  );
}

export default AboutLayout;
