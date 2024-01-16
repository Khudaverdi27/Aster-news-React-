import { get } from "../utils/request";
import NewsApi from "../api/news.api";

export const ServiceNewsFetchRandomList = async (params = {}) => {
  const res = await get(NewsApi.random, params);
  return res;
};
export const ServiceNewsFetchList = async (params = {}) => {
  const res = await get(NewsApi.list, params);
  return res;
};

export const ServiceNewsByCategoryFetchList = async (params = {}) => {
  const res = await get(NewsApi.list, params);
  return res;
};
