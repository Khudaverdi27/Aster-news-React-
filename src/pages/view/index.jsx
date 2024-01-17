import { useEffect } from "react";
import { useFetchNewsBySlug } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function ViewPage() {
  const [slugNews, setSlugNews, slugLoading] = useFetchNewsBySlug();

  useEffect(() => {
    setSlugNews();
  }, []);

  return (
    <>
      {slugNews && (
        <Helmet>
          <title>Aster News / {slugNews?.title}</title>
        </Helmet>
      )}
      <h1 className="text-2xl font-bold">{slugNews.title}</h1>
      <div>
        {slugNews && (
          <div className=" text-sky-600 mt-2 text-xs space-x-1">
            <Link
              className="inline-flex bg-sky-200 px-2 py-1 rounded-theme"
              to={`/search/${slugNews.category?.slug}`}
            >
              {slugNews?.category?.name}
            </Link>
            <Link
              className="inline-flex bg-sky-200 px-2 py-1 rounded-theme"
              to={`/search/${slugNews.author?.slug}`}
            >
              {`Yazar: ${slugNews.author?.fullname}`}
            </Link>
          </div>
        )}
      </div>
      <div className="mt-4">
        <figure className="aspect-ratio-4/3 rounded-theme overflow-hidden">
          <img src={slugNews?.photo} alt="newsDetailPhoto" />
        </figure>
      </div>
      <div
        className="mt-2"
        dangerouslySetInnerHTML={{ __html: slugNews?.content }}
      />
    </>
  );
}

export default ViewPage;
