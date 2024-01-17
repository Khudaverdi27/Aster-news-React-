import { Space, Input, Spin } from "antd";
import { useFetchNewsBySearch } from "@/hooks/useFetch";
import { useClickAway } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const { Search } = Input;

function FormSearch() {
  const [text, setText] = useState("");
  const [searchRes, fetchSearchRes, searchLoading] = useFetchNewsBySearch(
    text.trim()
  );
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const onSearch = (e) => {
    setText(e.target.value);
    if (isOpen === false) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    fetchSearchRes();
    if (!text) {
      setIsOpen(false);
    }
  }, [text]);

  return (
    <div>
      <Space className="w-[300px] mb-0" direction="vertical">
        <div className="relative">
          <Search placeholder="Axtar..." onChange={(e) => onSearch(e)} />
          {searchLoading && (
            <Spin
              size="small"
              className="absolute top-[8px] right-[10px] bg-[#EFF4F3] z-20"
            />
          )}
        </div>
      </Space>
      {isOpen && (
        <ul
          ref={ref}
          className="bg-white rounded-theme mt-1 p-1 absolute min-w-[300px] z-10 border border-gray-400 divide-y divide-gray-200 text-[14px]"
        >
          {searchRes.length > 0 ? (
            searchRes.map((searchedItem, index) => (
              <Link
                to={`/view/${searchedItem.slug}`}
                className=" flex justify-between items-center"
                key={index}
              >
                <p>{searchedItem.title}</p>
                <figure className="size-[34px] m-1">
                  <img
                    className="img-cover rounded-full"
                    src={searchedItem.photo}
                    alt="searchbarPhoto"
                  />
                </figure>
              </Link>
            ))
          ) : (
            <li className="text-red-500">Axtardığınız xəbər tapılmadı...</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default FormSearch;