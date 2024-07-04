import React from "react";

function Checkbox({ id, label, checked, onChange, ...props }) {
  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
        {...props}
      />
      <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 ">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
