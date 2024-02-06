import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { FaBars } from "react-icons/fa";
import NavbarComponent from "./NavbarComponenet";
import Logo from "../Logo";
import { IoMdClose } from "react-icons/io";
import { isMobile } from "react-device-detect";

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

  if (open && isMobile) {
    document.querySelector("body").classList.add("overflow-y-hidden");
  }

  return (
    <div className="block lg:hidden md:hidden dark:bg-amberBlack ">
      <Button type="primary" onClick={showDrawer}>
        <FaBars className="text-gray-500 dark:text-white" />
      </Button>
      <Drawer
        className="h-full dark:bg-[#22303c]"
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
          classForResponsive={"block lg:hidden"}
        />
        {/* <Subscription className={"mt-[40px]"} /> */}
      </Drawer>
    </div>
  );
};
export default ToggleMenu;
