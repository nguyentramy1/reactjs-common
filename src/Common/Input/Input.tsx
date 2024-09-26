import React, { useState } from "react";
import "./Input.scss";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  disabled,
  className,
  style,
}) => {
  const [isFocus, setFocus] = useState(false);
  return (
    <div
      className={`custom-input ${isFocus ? "custom-input-focus" : ""} ${
        className ? className : ""
      }`}
      style={style}
    >
      <input
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        disabled={disabled}
        type="text"
        placeholder="Enter your name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
