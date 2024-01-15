import { useFetchRandomNewsList } from "../../hooks/useFetch";
import { useEffect } from "react";
import RandomNews from "./components/RandomNews";

function HomePage() {
  const [randomNews, fetcRandomNews, randomLoading] = useFetchRandomNewsList();
  useEffect(() => {
    fetcRandomNews();
  }, []);

  return (
    <div>
      <RandomNews items={randomNews} loading={randomLoading} />
    </div>
  );
}

export default HomePage;
