import { useParams } from "react-router-dom";

export const objectToQueryString = (obj) => {
  return Object.entries(obj)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
};

export const findParam = () => {
  const param = useParams();
  return param.slug;
};

export const toCapitalizeLetter = (str) => {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
};
