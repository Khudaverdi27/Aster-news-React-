function FormText({ placeholder, padding }) {
  return (
    <div className="mt-3 w-full">
      <input
        className={`w-full outline-none border border-gray-400 ${padding} rounded-theme`}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
}

export default FormText;
