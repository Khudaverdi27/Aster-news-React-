import classNames from "classnames";

function Button({
  children,
  property,
  rounded = false,
  size = "md",
  padding = false,
  border = false,
  block = false,
  onClick = () => {},
}) {
  return (
    <button
      onClick={onClick}
      className={classNames([
        "btn",
        "whitespace-nowrap",
        property ? `btn--${property}` : "",
        { "btn--rounded": rounded, "btn--block": block },
        `btn--${size}`,
        border ? "border border-skyBlue" : "",
        padding ? "px-[6px]" : "px-[25px]",
      ])}
    >
      {children}
    </button>
  );
}

export default Button;
