import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import RightAside from "../components/common/RighAside";
import HomePage from "../pages/home";

function AppLayout() {
    return (
        <main className="w-[1200px] mx-auto flex gap-x-[45px]">
            <div className="w-[260px] shrink-0 bg-slate-500 ">
                <Navbar />
            </div>
            <div className="flex-1 bg-slate-300">
                <Header />
                <div className="flex gap-x-[45px]">
                    <div className="flex-1 bg-slate-200">
                        <HomePage />
                    </div>
                    <div className="w-[285px] bg-slate-400 shrink-0">
                        <RightAside />
                    </div>
                </div>
            </div>

        </main>
    );
}

export default AppLayout;