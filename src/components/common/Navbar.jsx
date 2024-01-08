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

function Icon({ slug }) {
    const icons = {
        "world": <GiWorld />,
        "politics": <FaFileContract />,
        "sports": <MdOutlineSportsBasketball />,
        "technology": <FaRobot />,
        "economy": <GiTakeMyMoney />,
        "entertainment": <SiAmazongames />,
        "health": <MdHealthAndSafety />,
        "science": <MdOutlineScience />,
        "culture": <GiTeamUpgrade />,
        "environment": <MdNature />
    }
    return (icons[slug]);
}


function Navbar() {
    const [categories, fetchCategories, loading] = useFetchCategoryList()

    useEffect(() => {
        fetchCategories()
    }, [])
    return (
        <div className="pr-[17px]">
            {categories.map((category, index) => (
                <a key={index} className="flex items-center text-amberBlack space-x-[22px]" href="#">
                    <span className="text-[24px]">
                        <Icon slug={category.slug} />
                    </span>
                    <span>{category.name}</span>
                </a>
            ))}
        </div>
    );
}

export default Navbar;