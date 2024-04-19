"use client";
import React from "react";

const LabelledInput = ({
  label,
  placeholder,
  onChange,
}: {
  label: string;
  placeholder: string;
  onChange: () => void;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <label>{label}</label>
      <input
        className="px-4 py-2"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default LabelledInput;
