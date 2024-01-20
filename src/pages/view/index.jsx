import { useEffect, useState } from "react";
import { useFetchNewsBySlug } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { findParam } from "../../utils/helpers";
import Button from "@/components/ui/button";
import { Spin } from "antd";
import moment from "moment";

function ViewPage() {
  const [slugNews, setSlugNews, slugLoading] = useFetchNewsBySlug();
  const [visible, setVisible] = useState(false);
  const slugParams = findParam();

  useEffect(() => {
    setSlugNews();
  }, [slugParams]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
           in place of 'smooth' */
    });
  };

  return (
    <>
      {slugLoading ? (
        <div className="flex items-center justify-center min-h-80">
          <Spin size="large" />
        </div>
      ) : (
        slugNews && (
          <>
            <Helmet>
              <title>Aster News / {slugNews?.title}</title>
            </Helmet>
            <h1 className="text-2xl font-bold">{slugNews.title}</h1>
            <div>
              <div className="text-sky-600 mt-2 text-xs space-x-1">
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
            </div>
            <div className="mt-4">
              <figure className="rounded-theme overflow-hidden aspect-3/2">
                <img
                  className="img-cover"
                  src={slugNews?.photo}
                  alt="newsDetailPhoto"
                />
              </figure>
            </div>
            <div className="mt-2">
              {slugNews.content && (
                <div dangerouslySetInnerHTML={{ __html: slugNews?.content }} />
              )}
            </div>
            <div className="text-xs flex justify-center items-center mt-9">
              <div className="text-center">
                <p className="opacity-30">
                  Published -
                  {moment(slugNews.published_date).format(
                    "MMMM Do YYYY - h:mm:ss a"
                  )}
                </p>
                <p className="mb-4">{slugNews.author?.fullname}</p>
                <div className="flex justify-center items-center mb-11">
                  <Button
                    onClick={scrollToTop}
                    padding={true}
                    size={"xs"}
                    border={true}
                  >
                    <span className="text-skyBlue underline">Back to top</span>
                  </Button>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </>
  );
}

export default ViewPage;
