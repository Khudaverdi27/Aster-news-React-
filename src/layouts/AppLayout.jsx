import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Logo from "../components/common/Logo";
import NavbarComponent from "../components/common/Navbar/NavbarComponenet";
import Test from "../components/common/Navbar/test";
import RightAside from "../components/common/RighAside";
import Subscription from "../components/widgets/subscription";

function AppLayout({ children }) {
  return (
    <main className="sm:w-[1300px]  mx-auto flex sm:gap-x-[45px] overflow-hidden ">
      <div className="w-0 sm:w-[240px] shrink-0 relative">
        <div className="sticky top-0">
          <NavbarComponent classForResponsive={"hidden sm:block"} />
          <Subscription className={"mt-[40px]"} />
        </div>
      </div>
      <div className="flex-1">
        <Header />
        <div className="flex -x-[45px]">
          <div className="flex-1">
            {children}
            <Footer />
          </div>
          <div className="w-0 sm:w-[260px] shrink-0">
            {/* <RightAside /> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default AppLayout;
