import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { FaBars } from "react-icons/fa";
import NavbarComponent from "./NavbarComponenet";
import Logo from "../Logo";
import Subscription from "../../widgets/subscription";
import { IoMdClose } from "react-icons/io";

const ToggleMenu = () => {
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
    <div className="block sm:hidden ">
      <Button type="primary" onClick={showDrawer}>
        <FaBars className="text-gray-500" />
      </Button>
      <Drawer
        title={
          <div className="flex justify-between">
            <Logo />{" "}
            <Button onClick={onClose}>
              <IoMdClose className="text-[20px] text-skyBlue" />
            </Button>
          </div>
        }
        placement={placement}
        key={placement}
        closable={false}
        open={open}
      >
        <NavbarComponent
          setOpen={setOpen}
          classForResponsive={"block sm:hidden"}
        />
        {/* <Subscription className={"mt-[40px]"} /> */}
      </Drawer>
    </div>
  );
};
export default ToggleMenu;
