import { Link } from "react-router-dom";
import logo from "/src/assets/img/logo.png";
function Logo() {
  return (
    <div>
      <Link
        className="flex pl-[31px] items-center space-x-[15px] lg:py-[28px]"
        to={"/"}
      >
        <img src={logo} alt="" />
        <span className="text-primary font-bold text-[18px]">Aster News</span>
      </Link>
    </div>
  );
}

export default Logo;
