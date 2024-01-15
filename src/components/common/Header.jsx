import React from "react";
import { FiUser } from "react-icons/fi";
import { Input, Space } from "antd";
import DropdownMenu from "../ui/dropdown";
import menus from "../../routers/menus";
import { NavLink } from "react-router-dom";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

function Header() {
  return (
    <div className="flex justify-between pt-[23px] pb-[40px]">
      <div className="flex items-center space-x-11">
        <div>
          <Space className="w-[300px] " direction="vertical">
            <Search placeholder="input search text" onSearch={onSearch} />
          </Space>
        </div>
        <div className="flex items-center space-x-9 text-[17px]">
          {menus.map((menu, index) => (
            <NavLink to={menu.path} key={index} className="flex items-center">
              <span>{menu.icon}</span>
              <span className="flex items-center px-1">{menu.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div>
        <DropdownMenu
          helperBlock={
            <div className="flex items-center space-x-2 border-b">
              <figure className="size-[40px] rounded-full p-1">
                <img
                  className="img-cover overflow-hidden rounded-full"
                  src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </figure>
              <div className="font-medium pr-2">Lachlan Dempsey</div>
            </div>
          }
        >
          <span className="flex items-center space-x-[13px]">
            <span>
              <FiUser className="text-[24px]" />
            </span>
            <span>My Profile</span>
          </span>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Header;
