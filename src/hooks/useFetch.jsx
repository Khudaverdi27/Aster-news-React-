import { useState } from "react";
import { ServiceCategoryFetchList } from "../services/category.service";
import {
  ServiceNewsFetchList,
  ServiceNewsFetchRandomList,
} from "../services/news.service";

const useFetch = (state = false) => {
  const [data, setData] = useState(state);
  const [loading, setLoading] = useState(false);

  const fetch = async (service, params) => {
    setLoading(true);
    const res = await service(params);
    setData(res);
    setLoading(false);
  };
  return [data, fetch, loading];
};
//category fetch
export const useFetchCategoryList = () => {
  const [data, fetch, loading] = useFetch([]);

  const apiFetch = async (params = {}) => {
    fetch(ServiceCategoryFetchList, params);
  };

  return [data, apiFetch, loading];
};

//Random news fetch
export const useFetchRandomNewsList = () => {
  const [data, fetch, loading] = useFetch([]);

  const apiFetch = async () => {
    fetch(ServiceNewsFetchRandomList, { limit: 6 });
  };

  return [data?.data || [], apiFetch, loading];
};

export const useFetchNewsList = () => {
  const [data, fetch, loading] = useFetch([]);

  const apiFetch = async () => {
    fetch(ServiceNewsFetchList, { limit: 6 });
  };

  return [data?.data || [], apiFetch, loading];
};
