"use client";

import React, { forwardRef } from "react";

interface Props {
  id?: string;
  name?: string;
  label?: string;
  type?: string; // text, email, password, number, etc.
  placeholder?: string;
  textarea?: boolean;
  rows?: number;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  className?: string;
  required?: boolean;
  disabled?: boolean;
}

const InputField = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  (
    {
      id,
      name,
      label,
      type = "text",
      placeholder = "",
      textarea = false,
      rows = 4,
      value,
      onChange,
      className = "",
      required = false,
      disabled = false,
    },
    ref
  ) => {
    const baseClasses =
      "w-full p-3 rounded-3xl border border-gray-20 placeholder-gray-400 focus:outline-none  transition  border-3";

    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        {label && (
          <label htmlFor={id || name} className="text-sm font-medium">
            {label}
          </label>
        )}

        {textarea ? (
          <textarea
            id={id || name}
            name={name}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className={baseClasses}
          />
        ) : (
          <input
            id={id || name}
            name={name}
            ref={ref as React.Ref<HTMLInputElement>}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className={baseClasses}
          />
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
