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
      <label className="mt-3 w-full flex justify-between">
        <p className="font-bold">{labelName}</p>
        <div>
          <input
            value={value}
            onChange={onChange}
            className={`${
              labelName ? "w-[375px]" : "w-full"
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
