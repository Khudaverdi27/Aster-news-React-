import { FiCrosshair } from "react-icons/fi";
import { FiFeather } from "react-icons/fi";
import Button from "@/components/ui/button";
import FormText from "../ui/Form/FormText";
import SliderCard from "../widgets/slider";
import { useEffect, useState } from "react";
import { useFetchWeatherData } from "../../hooks/useFetch";
import { getWeatherIcon } from "../../utils/helpers";
import NewsSkleton from "../widgets/news/NewsSkleton";
function RightAside() {
  const [weatherInfo, setWeather, weatherLoading] = useFetchWeatherData();
  const [fahrenheit, setFahrenheit] = useState(false);
  useEffect(() => {
    setWeather();
  }, []);

  return (
    <aside className="space-y-[15px] mt-24 sticky top-24">
      <div className="right-section-cards">
        {weatherLoading ? (
          <NewsSkleton image={false} />
        ) : (
          <>
            <div className="flex justify-between border-b">
              <p className="text-[15px]">
                {weatherInfo?.name}, {weatherInfo?.sys?.country}
              </p>
              <FiCrosshair />
            </div>
            <div className="flex justify-between py-[15px]">
              <div>
                <p className="text-[15px]">{weatherInfo?.weather?.[0]?.main}</p>
                <span className="text-[26px] font-bold">
                  {fahrenheit
                    ? fahrenheit.toFixed(0)
                    : Math.round(weatherInfo?.main?.temp - 272.15)}{" "}
                  <sup>{!fahrenheit && "o"}</sup>{" "}
                  <small>{fahrenheit ? "F" : "C"}</small>
                </span>
              </div>
              <div className="size-[52px]">
                <span className="text-[#dcc674] text-[32px] size-full">
                  {getWeatherIcon(weatherInfo?.weather?.[0]?.icon)}
                </span>
              </div>
            </div>
            <div className="flex text-[12px] space-x-[23px]">
              <button
                className={fahrenheit ? "opacity-30" : ""}
                onClick={() => setFahrenheit(false)}
              >
                Celsius
              </button>
              <button
                onClick={() => {
                  setFahrenheit(
                    ((weatherInfo?.main?.temp - 272.15) * 9) / 5 + 32
                  );
                }}
                className={!fahrenheit ? "opacity-30" : ""}
              >
                Fahrenheit
              </button>
            </div>
          </>
        )}
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
