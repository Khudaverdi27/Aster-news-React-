import { Skeleton } from "antd";

function Section({ title, children, loading, authorImage }) {
  return (
    <section className={loading ? "" : "mb-[40px]"}>
      <div className="mt-24 mb-4">
        {loading ? (
          <Skeleton
            paragraph={{
              rows: 0,
            }}
            active
          />
        ) : (
          <div className="flex space-x-2 items-center">
            {authorImage && (
              <figure className="size-10 ">
                {" "}
                <img
                  className="img-cover rounded-full"
                  src={authorImage}
                  alt="author"
                />{" "}
              </figure>
            )}
            <h3 className="text-[20px] font-[700] mb-2">{title}</h3>
          </div>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
}

export default Section;
