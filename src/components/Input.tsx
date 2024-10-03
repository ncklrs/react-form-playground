import React from "react";
import { Button } from "@headlessui/react";

type InputProps = {
  name: string;
  type?: string;
  optional?: boolean;
  placeholder?: string;
  label?: string;
  [key: string]: any;
};

const Input: React.FC<InputProps> = ({ register, name, type, ...rest }) => {
  const { optional, placeholder, label } = rest;
  if (type === "submit") {
    return (
      <Button
        type="submit"
        className="rounded-lg mt-4 w-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        {...rest}
      >
        Submit
      </Button>
    );
  }
  return (
    <div>
      <div className="flex justify-between">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label || name}
        </label>
        {optional && (
          <span
            id={`${name}-optional`}
            className="text-sm leading-6 text-gray-500"
          >
            Optional
          </span>
        )}
      </div>
      <div className="mt-2">
        <input
          {...register(name)}
          type={type}
          {...rest}
          placeholder={placeholder}
          aria-describedby="email-optional"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
  // <input {...register(name)} type={type} {...rest} />;
};

export default Input;
