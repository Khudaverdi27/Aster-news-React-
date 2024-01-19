import { FiCrosshair } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import { FiFeather } from "react-icons/fi";
import { LuFileText } from "react-icons/lu";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import Button from "@/components/ui/button";
import FormText from "../ui/Form/FormText";
function RightAside() {
  return (
    <aside className="space-y-[15px]">
      <div className="right-section-cards">
        <div className="flex justify-between border-b">
          <p className="text-[15px]">Coimbatore, Tamil Nadu</p>
          <FiCrosshair />
        </div>
        <div className="flex justify-between py-[15px]">
          <div>
            <p className="text-[15px]">Günəşli</p>
            <span className="text-[26px] font-bold">
              31 <sup>o</sup> <small>C</small>
            </span>
          </div>
          <div className="size-[52px]">
            <IoSunnyOutline className="text-[#FFCF26] text-[32px] size-full" />
          </div>
        </div>
        <div className="flex text-[12px] space-x-[23px]">
          <p>Celsius</p>
          <p className="opacity-30">Fahrenheit</p>
        </div>
      </div>
      <div className="right-section-cards">
        <div className="flex items-center space-x-[12px] mb-3">
          <span className="size-[24px]">
            <FiFeather className="size-full" />
          </span>
          <p className="text-[15px]">Məqalə yazarı ol</p>
        </div>
        <div className="flex ">
          <p className="text-xs mr-4 opacity-60">
            Məqalə yazaraq qazanmağa başla
          </p>
          <Button
            rounded={"rounded-theme"}
            size={"lg"}
            border={true}
            padding={true}
          >
            <span className="text-skyBlue">Daha çox</span>
          </Button>
        </div>
      </div>
      <div className="right-section-cards space-y-[13px]">
        <div className="flex justify-between border-b pb-2">
          <div className="flex items-center space-x-[11px]">
            <span className="size-[24px]">
              <LuFileText className="size-full" />
            </span>
            <span>Sürətli Qeydlər</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="size-[24px] rounded-full bg-skyBlue flex items-center justify-center opacity-50">
              <FaAngleLeft className="text-white" />
            </span>
            <span className="rounded-full size-[24px] bg-skyBlue flex items-center justify-center">
              <FaAngleRight className="text-white  " />
            </span>
          </div>
        </div>
        <div className="text-xs opacity-60 space-y-6">
          <p>
            The price of petrol remained unchanged on July 6 after reaching a
            new record high on the previous day, according to a price
            notification by state-owned fuel retailers. The diesel price
            remained stable for the second consecutive day. The increase on July
            5, 35th in two months, took the petrol price in Delhi closer to Rs
            100 per litre-mark. The petrol price in the national capital soared
            to Rs 99.9 a litre and diesel was priced at Rs 89.4 per litre,
            according to Bharat Petroleum's price listing.
          </p>

          <p>
            The price of petrol remained unchanged on July 6 after reaching a
            new record high on the previous day, according to a price
            notification by state-owned fuel retailers. The diesel price
            remained stable for the second consecutive day. The increase on July
            5, 35th in two months, took the petrol price in Delhi closer to Rs
            100 per litre-mark. The petrol price in the national capital soared
            to Rs 99.9 a litre and diesel was priced at Rs 89.4 per litre,
            according to Bharat Petroleum's price listing.
          </p>
        </div>
      </div>
      <div className="right-section-cards space-y-3 text-[15px]">
        <p>Xəbərlərimizə abunə ol</p>
        <FormText placeholder={"Enter Email"} />
        <Button rounded={"rounded-theme"} property={"sky-blue"} block={true}>
          Abunə ol
        </Button>
      </div>
    </aside>
  );
}

export default RightAside;
