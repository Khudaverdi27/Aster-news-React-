import { FiUser } from "react-icons/fi";
import DropdownMenu from "../ui/dropdown";
import menus from "../../routers/menus";
import { NavLink } from "react-router-dom";
import FormSearch from "../ui/Form/FormSearch";
import { getStorage } from "../../storage/storage";
import ModalForLogin from "../ui/modal";
import ToggleMenu from "./Navbar/ToggleMenu";

function Header() {
  const token = getStorage("token");
  const user = getStorage("user");
  return (
    <div
      className="sm:flex sm:justify-between pt-[23px] pb-[40px] top-[-8px] fixed bg-[#F4F9F8]
   sm:w-[1024px] w-full z-50 left-0 sm:left-[301px]"
    >
      <div className="flex w-10 space-x-2 items-center">
        <ToggleMenu />
        <FormSearch />
      </div>
      <div className="flex items-center sm:space-x-5 sm:mt-0 mt-5 justify-between mx-3 ">
        <div className="order-1 sm:text-[16px] text-sm sm:ml-10">
          {token ? (
            <DropdownMenu
              helperBlock={
                <div className="flex items-center space-x-2 border-b ">
                  <figure className="size-[40px] rounded-full p-1">
                    <img
                      className="img-cover overflow-hidden rounded-full"
                      src={user?.photo}
                      alt=""
                    />
                  </figure>
                  <div className="font-medium pr-2">
                    {user?.name + " " + user?.surname}
                  </div>
                </div>
              }
            >
              <span className="flex items-center  ml-2">
                <span>
                  <FiUser className="sm:text-[24px] mr-1 text-[16px]" />
                </span>
                <span className="whitespace-nowrap mt-1">Profilim</span>
              </span>
            </DropdownMenu>
          ) : (
            <ModalForLogin />
          )}
        </div>
        <div className=" menu-link">
          {menus.map((menu, index) => (
            <NavLink
              to={menu.path}
              key={index}
              className="flex items-center sm:text-[16px] text-sm "
            >
              <span>{menu.icon}</span>
              <span className="flex items-center px-1 whitespace-nowrap">
                {menu.name}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
