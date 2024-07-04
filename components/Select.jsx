import { twMerge } from 'tailwind-merge';

function Select({
  options,
  defaultOption,
  selectedValue,
  onChange,
  errorMessage,
  classNames,
  ...props
}) {
  return (
    <>
      <select
        value={selectedValue}
        onChange={onChange}
        className={twMerge(
          'border border-solid border-gray-300 rounded-md w-full p-2.5 text-sm text-gray-700',
          classNames
        )}
        {...props}
      >
        {/* DEFAULT OPTION */}
        {defaultOption && (
          <option value={defaultOption.value} disabled>
            {defaultOption.label}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* ERROR MESSAGE */}
      <p className="text-red-600 invalidMessage tracking-wide">
        <span>{errorMessage}</span>
      </p>
    </>
  );
}

export default Select;
