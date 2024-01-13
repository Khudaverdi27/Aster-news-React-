import { GoGift } from "react-icons/go";
import Button from "../../ui/button";
import { useState } from "react";

function Subscription({ className }) {
  const [text, setText] = useState("Upgrade");
  return (
    <div
      className={`bg-skyBlue rounded-theme text-white ml-[16px] ${
        className ? className : ""
      } p-[20px]`}
    >
      {" "}
      <div className="flex items-center justify-between mb-[13px] ">
        <GoGift className="text-[24px]" />
        <span>Subscribe to premium</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[30px]">
          $8 <small className="text-[15px]">/m</small>
        </span>
        <Button
          onClick={() => setText("Upgraded")}
          property={"primary"}
          rounded={true}
        >
          {text}
        </Button>
      </div>
    </div>
  );
}

export default Subscription;
