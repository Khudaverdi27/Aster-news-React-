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
        <p className="font-bold">{labelName}</p>
        <div className={`${!labelName ? "w-full " : ""} `}>
          <input
            value={value}
            onChange={onChange}
            className={`${
              labelName ? "w-[385px]" : "w-full"
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
