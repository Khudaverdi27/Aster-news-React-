import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Logo from "../components/common/Logo";
import AboutPage from "../pages/about";

function AboutLayout() {
  return (
    <div>
      <Logo />
      <Header />
      <AboutPage />
      <Footer />
    </div>
  );
}

export default AboutLayout;
