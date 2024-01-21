import { FiCrosshair } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import { FiFeather } from "react-icons/fi";
import Button from "@/components/ui/button";
import FormText from "../ui/Form/FormText";
import SliderCard from "../widgets/slider";
function RightAside() {
  return (
    <aside className="space-y-[15px] mt-24 sticky top-24">
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
      <SliderCard />
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
