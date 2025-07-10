function Form({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div className="w-80 flex flex-col items-start">
      <label
        htmlFor={label.toLowerCase().replace(/\s+/g, "-")}
        className="mb-1 text-xl font-semibold text-black"
      >
        {label}:
      </label>
      <input
        type={type}
        id={label.toLowerCase().replace(/\s+/g, "-")}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-white text-black px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2"
      />
    </div>
  );
}

export default Form;
