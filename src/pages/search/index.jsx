import { useEffect } from "react";
import { useFetchNewsByCategoryList } from "../../hooks/useFetch";
import { findParam } from "../../utils/helpers";
import NewsSection from "../home/components/NewsSection";
import { getStorage } from "../../storage/storage";

function SearchPage() {
  const [newsList, fetcNewsList, newsLoading] = useFetchNewsByCategoryList();

  const categories = getStorage("categories");

  const categoryName = findParam();
  const title = categories.find((name) => name.slug === categoryName);

  useEffect(() => {
    fetcNewsList();
  }, [categoryName]);
  return (
    <NewsSection items={newsList} loading={newsLoading} title={title?.name} />
  );
}

export default SearchPage;
