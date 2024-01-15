import { GiWorld } from "react-icons/gi";
import { FaFileContract } from "react-icons/fa";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiAmazongames } from "react-icons/si";
import { MdHealthAndSafety } from "react-icons/md";
import { MdOutlineScience } from "react-icons/md";
import { MdNature } from "react-icons/md";
import { GiTeamUpgrade } from "react-icons/gi";
import { useFetchCategoryList } from "../../hooks/useFetch";
import { useEffect } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

function Icon({ slug }) {
  const icons = {
    world: <GiWorld />,
    politics: <FaFileContract />,
    sports: <MdOutlineSportsBasketball />,
    technology: <FaRobot />,
    economy: <GiTakeMyMoney />,
    entertainment: <SiAmazongames />,
    health: <MdHealthAndSafety />,
    science: <MdOutlineScience />,
    culture: <GiTeamUpgrade />,
    environment: <MdNature />,
  };
  return icons[slug];
}

function Navbar() {
  const [categories, fetchCategories, loading] = useFetchCategoryList();

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="pr-[17px]">
      {categories.map((category, index) => (
        <NavLink
          to={"/search/" + category.slug}
          key={index}
          className={classNames({
            "flex items-center h-[50px] rounded-tr-full relative rounded-br-full pl-[33px] text-amberBlack space-x-[22px]": true,
            "bg-[#e0f0f8] text-skyBlue font-bold after:content-[''] after:absolute after:left-[15px] after:size-2 after:rounded-full after:bg-skyBlue":
              index == 0,
          })}
          href="#"
        >
          <span className="text-[24px]">
            <Icon slug={category.slug} />
          </span>
          <span>{category.name}</span>
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
