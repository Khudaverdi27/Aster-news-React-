function FormText({
  placeholder,
  padding,
  labelName,
  type,
  errorMsg,
  value,
  onChange = () => {},
}) {
  return (
    <>
      <label className="mt-3  flex justify-between ">
        <p className="font-bold ">{labelName}</p>
        <div className={`${!labelName ? "w-full " : ""} `}>
          <input
            autoCapitalize="off"
            autoCorrect="off"
            value={value}
            onChange={onChange}
            className={`${
              labelName ? "lg:w-[385px] w-[270px] " : "w-full "
            } outline-none border border-gray-400 ${padding} rounded-theme`}
            placeholder={placeholder}
            type={type}
          />
          {errorMsg}
        </div>
      </label>
    </>
  );
}

export default FormText;
