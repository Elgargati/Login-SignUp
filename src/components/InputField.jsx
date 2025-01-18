const InputField = ({
  name,
  type,
  placeholder,
  icon,
  value,
  onChange,
  onBlur,
  error,
  touched,
  showPassword,
  setShowPassword,
  toggleIcon,
}) => {
  return (
    <div className="space-y-2 ">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="appearance-none rounded-lg relative block w-full pl-10 pr-10 px-3 py-2 bg-white/5 border border-gray-600 placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
        />
        {toggleIcon && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
          >
            {toggleIcon}
          </button>
        )}
      </div>
      {error && touched && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default InputField;
