import { useEffect } from "react";
import { useFetchNewsByCategoryList } from "../../hooks/useFetch";
import { findParam, toCapitalizeLetter } from "../../utils/helpers";
import NewsSection from "../home/components/NewsSection";
function SearchPage() {
  const [newsList, fetcNewsList, newsLoading] = useFetchNewsByCategoryList();
  const category = findParam();
  const title = toCapitalizeLetter(category);
  useEffect(() => {
    fetcNewsList();
  }, [category]);
  return <NewsSection items={newsList} loading={newsLoading} title={title} />;
}

export default SearchPage;
