import { FaAngleDown } from "react-icons/fa";
import { FiLogOut, FiUser } from "react-icons/fi";

import { Dropdown, Menu, Space } from "antd";

const items = [
  {
    key: "profile",
    label: "Profile",
    icon: <FiUser />,
  },
  {
    key: "Logout",
    label: "Logout",
    icon: <FiLogOut />,
  },
];

const handleClick = (i) => {
  console.log(i);
};

const DropdownMenu = ({ children, helperBlock }) => (
  <Dropdown
    className="cursor-pointer"
    overlay={
      <Menu>
        {helperBlock}
        {items.map((menu, index) => (
          <Menu.Item onClick={() => handleClick(menu)} key={index}>
            <button className="flex items-center space-x-[10px] text-[16px]">
              <span>{menu.icon}</span>
              <span> {menu.label}</span>
            </button>
          </Menu.Item>
        ))}
      </Menu>
    }
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        {children}
        <FaAngleDown />
      </Space>
    </a>
  </Dropdown>
);

export default DropdownMenu;
