import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import NavbarComponent from "../components/common/Navbar/NavbarComponenet";
import RightAside from "../components/common/RighAside";
import SliderCard from "../components/widgets/slider";
import Subscription from "../components/widgets/subscription";
import SubscribeEmail from "../components/widgets/subscription/subscribe";

function AppLayout({ children }) {
  return (
    <main className="sm:w-[1300px]  mx-auto flex sm:gap-x-[45px] overflow-hidden ">
      <div className="w-0 sm:w-[240px] shrink-0 relative">
        <div>
          <NavbarComponent classForResponsive={"hidden sm:block"} />
          <Subscription className={"mt-[40px]"} />
        </div>
      </div>
      <div className="flex-1">
        <Header />
        <div className="flex sm:gap-x-[45px]">
          <div className="flex-1">
            <RightAside visible={"block sm:hidden"} />
            {children}
            <SliderCard className={"sm:hidden block"} />
            <SubscribeEmail
              className={"sm:hidden block"}
              block={true}
              p={"p-2"}
            />
            <Footer />
          </div>
          <div className="w-0 sm:w-[260px] shrink-0 ">
            <RightAside visible={"hidden sm:block"} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default AppLayout;
