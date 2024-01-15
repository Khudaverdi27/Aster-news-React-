import { useFetchNewsList, useFetchRandomNewsList } from "../../hooks/useFetch";
import { useEffect } from "react";
import NewsSection from "./components/NewsSection";

function HomePage() {
  const [randomNews, fetcRandomNews, randomLoading] = useFetchRandomNewsList();
  const [newsList, fetcNewsList, newsLoading] = useFetchNewsList();
  useEffect(() => {
    fetcRandomNews();
    fetcNewsList();
  }, []);

  return (
    <>
      <div>
        <NewsSection
          title={"Ən çox oxunanlar"}
          items={randomNews}
          loading={randomLoading}
        />
      </div>
      <div>
        <NewsSection
          title={"Ən son xəbərlər"}
          items={newsList}
          loading={newsLoading}
        />
      </div>
    </>
  );
}

export default HomePage;
