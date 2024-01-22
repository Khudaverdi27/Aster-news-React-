import { FiUser } from "react-icons/fi";
import DropdownMenu from "../ui/dropdown";
import menus from "../../routers/menus";
import { NavLink } from "react-router-dom";
import FormSearch from "../ui/Form/FormSearch";
import { getStorage } from "../../storage/storage";
import ModalForLogin from "../ui/modal";

function Header() {
  const token = getStorage("token");
  const user = getStorage("user");
  return (
    <div
      className="flex justify-between pt-[23px] pb-[40px] fixed bg-[#F4F9F8]
   w-[1024px] z-50 "
    >
      <div className="flex items-center space-x-11">
        <FormSearch />
        <div className=" menu-link">
          {menus.map((menu, index) => (
            <NavLink to={menu.path} key={index} className="flex items-center">
              <span>{menu.icon}</span>
              <span className="flex items-center px-1">{menu.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div>
        {token ? (
          <DropdownMenu
            helperBlock={
              <div className="flex items-center space-x-2 border-b">
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
            <span className="flex items-center space-x-[13px]">
              <span>
                <FiUser className="text-[24px]" />
              </span>
              <span>Mənim Profilim</span>
            </span>
          </DropdownMenu>
        ) : (
          <ModalForLogin />
        )}
      </div>
    </div>
  );
}

export default Header;
