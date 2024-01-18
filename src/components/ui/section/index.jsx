import { Skeleton } from "antd";

function Section({ title, children, loading }) {
  return (
    <section className={loading ? "" : "mb-[40px]"}>
      <div>
        {loading ? (
          <Skeleton
            paragraph={{
              rows: 0,
            }}
            active
          />
        ) : (
          <h3 className="text-[20px] font-[700] mb-2">{title}</h3>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
}

export default Section;
