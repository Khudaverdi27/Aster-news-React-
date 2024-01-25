import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { FaBars } from "react-icons/fa";
import NavbarComponent from "./NavbarComponenet";
import Logo from "../Logo";
const Test = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
    setPlacement("left");
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="block sm:hidden">
      <Button type="primary" onClick={showDrawer}>
        <FaBars className="text-gray-500" />
      </Button>
      <Drawer
        title={<Logo />}
        placement={placement}
        closable={false}
        onClose={onClose}
        key={placement}
        open={open}
      >
        <NavbarComponent classForResponsive={"block sm:hidden"} />
      </Drawer>
    </div>
  );
};
export default Test;
