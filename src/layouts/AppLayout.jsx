import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Logo from "../components/common/Logo";
import NavbarComponent from "../components/common/Navbar/NavbarComponenet";
import RightAside from "../components/common/RighAside";
import Subscription from "../components/widgets/subscription";

function AppLayout({ children }) {
  return (
    <main className="w-[1300px] mx-auto flex gap-x-[45px]">
      <div className="w-[240px] shrink-0 ">
        <Logo />
        <NavbarComponent />
        <Subscription className={"mt-[40px]"} />
      </div>
      <div className="flex-1">
        <Header />
        <div className="flex gap-x-[45px]">
          <div className="flex-1">
            {children}
            <Footer />
          </div>
          <div className="w-[260px] shrink-0">
            <RightAside />
          </div>
        </div>
      </div>
    </main>
  );
}

export default AppLayout;
