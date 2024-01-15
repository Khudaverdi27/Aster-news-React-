import { get } from "../utils/request";
import NewsApi from "../api/news.api";

export const ServiceNewsFetchRandomList = async (params = {}) => {
  const res = await get(NewsApi.random, params);
  return res;
};
