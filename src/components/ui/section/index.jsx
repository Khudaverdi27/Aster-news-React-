function Section({ title, children }) {
  return (
    <section className="mb-[40px]">
      <div>
        <h3 className="text-[20px] font-[700] mb-2">{title}</h3>
      </div>
      <div>{children}</div>
    </section>
  );
}

export default Section;
