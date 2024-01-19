function FormText({ placeholder }) {
  return (
    <div>
      <input
        className="w-full outline-none border border-gray-400 p-2 rounded-theme"
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
}

export default FormText;
