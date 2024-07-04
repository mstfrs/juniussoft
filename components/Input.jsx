'use client';

import { useEffect, useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { twMerge } from 'tailwind-merge';

const Input = ({ type, id, label, placeholder, errorMessage, ...props }) => {
  const { isModalOpen, applyModalOpen } = useModal();

  const [focused, setFocused] = useState(false);

  const handleFocused = (e) => {
    setFocused(true);
  };

  useEffect(() => {
    if (!isModalOpen && !applyModalOpen) {
      setFocused(false);
    }
  }, [applyModalOpen, isModalOpen]);

  return (
    <div className="mb-6 w-full">
      {/* LABEL */}
      {label && (
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
          {label}
          {errorMessage && <span className="text-red-500">*</span>}
        </label>
      )}
      {/* INPUT */}
      <input
        type={type}
        id={id}
        className={twMerge(
          `shadow-sm bg-gray-50 border border-gray-300 border-solid text-gray-900 text-sm rounded-md block w-full p-2.5`,
          props.classNames
        )}
        placeholder={placeholder}
        onBlur={handleFocused}
        focused={focused.toString()}
        {...props}
      />
      {/* ERROR MESSAGE */}
      <p className="text-red-600 invalidMessage tracking-wide">
        <span>{errorMessage}</span>
      </p>
    </div>
  );
};
export default Input;

export const FloatedLabelInput = ({ type, id, placeholder, label, classNames }) => {
  return (
    <div className="relative">
      {/* INPUT */}
      <input
        type={type}
        id={id}
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-solid border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
        placeholder={placeholder}
      />
      {/* LABEL */}
      <label
        for={id}
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
    </div>
  );
};

export function Textarea({ id, label, value, placeholder, onChange, classNames, ...props }) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={twMerge(
          'border border-solid border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight resize-y max-h-24 min-h-[80px]',
          classNames
        )}
        {...props}
      />
    </div>
  );
}
