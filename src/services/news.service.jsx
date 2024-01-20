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

export const ServiceNewsBySearchFetchList = async (params = {}) => {
  const res = await get(NewsApi.list, params);
  return res;
};
export const ServiceNewsBySlugFetchList = async (slug) => {
  const res = await get(NewsApi.showBySlug.replace(":id", slug));
  return res;
};
export const ServiceNewsByAuthorFetchList = async (params = {}) => {
  const res = await get(NewsApi.list, params);
  return res.data;
};
export const ServiceNewsByCommentsList = async (id) => {
  const res = await get(NewsApi.comments.replace(":id", id));
  return res;
};
