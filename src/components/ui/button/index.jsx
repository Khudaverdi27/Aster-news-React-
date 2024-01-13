import classNames from "classnames";

function Button({
  children,
  property,
  rounded = false,
  size = "md",
  block = false,
  onClick = () => {},
}) {
  return (
    <button
      onClick={onClick}
      className={classNames([
        "btn",
        property ? `btn--${property}` : "",
        { "btn--rounded": rounded, "btn--block": block },
        `btn--${size}`,
      ])}
    >
      {children}
    </button>
  );
}

export default Button;
