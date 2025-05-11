import React from "react";
import TextField from "@mui/material/TextField";
import { TextFieldProps } from "@mui/material/TextField";

interface CustomTextFieldProps extends Omit<TextFieldProps, 'variant'> {
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: React.ReactNode;
  autoComplete?: string;
  fullWidth?: boolean;
  shrink?: boolean;
  className?: string;
}

export default function Textfield({
  label,
  placeholder,
  type = "text",
  required = false,
  value,
  onChange,
  error = false,
  helperText = "",
  autoComplete = "off",
  fullWidth = true,
  shrink = true,
  className = "",
  ...rest
}: CustomTextFieldProps) {
  return (
    <TextField
      className={className}
      label={label}
      placeholder={placeholder}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      autoComplete={autoComplete}
      fullWidth={fullWidth}
      variant="outlined"
      InputLabelProps={{ shrink }}
      sx={{
        "& .MuiInputBase-root": {
          fontSize: 14,
          height: 44,
          borderRadius: 3
        },
        "& .MuiInputBase-input": {
          fontSize: 14,
          padding: "10px 12px",
        },
        "& .MuiInputLabel-root": {
          fontSize: 13,
        },
        "& .MuiFormHelperText-root": {
          fontSize: 12,
        },
      }}
      {...rest}
    />
  );
}
