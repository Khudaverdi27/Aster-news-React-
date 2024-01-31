import { FaRegFileAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";

function AboutPage() {
  return (
    <section className=" bg-stone-100 font-poppins darkMode sm:mt-0 ">
      <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6 mt-24">
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <div className="lg:max-w-md">
              <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                <span className="text-sm text-gray-600 uppercase ">
                  Who we are?
                </span>
                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                  About Us
                </h1>
              </div>
              <p className="px-4 mb-10 text-base leading-7 text-gray-500 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam Lorem ipsum dolor sit amet.
              </p>
              <div className="flex flex-wrap items-center">
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:bg-amberBlack">
                    <span className="text-blue-500 text-4xl ">
                      <FaRegFileAlt />
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-white">
                      2097
                    </p>
                    <h2 className="text-sm text-gray-700 dark:text-white">
                      Projects and Plans
                    </h2>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:bg-amberBlack">
                    <span className="text-blue-500 text-4xl ">
                      <IoPersonSharp />
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-white">
                      3,590
                    </p>
                    <h2 className="text-sm text-gray-700 dark:text-white">
                      Helped people
                    </h2>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:bg-amberBlack">
                    <span className="text-blue-500 text-4xl ">
                      <FiUsers />
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-white">
                      74
                    </p>
                    <h2 className="text-sm text-gray-700 dark:text-white">
                      Volunteer
                    </h2>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:bg-amberBlack">
                    <span className="text-blue-500 text-4xl ">
                      <LuAlarmClock />
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-white">
                      100
                    </p>
                    <h2 className="text-sm text-gray-700 dark:text-white">
                      Timing
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img
              src="https://i.postimg.cc/9MW8G96J/pexels-the-coach-space-2977565.jpg"
              alt=""
              className="relative z-40 object-cover w-full h-full rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
