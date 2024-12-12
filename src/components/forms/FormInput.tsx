"use client";
import { getErrorMessageByPropertyName } from "@/utils/schema-validation";
import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface IInput {
  name: string;
  type?: string;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  name,
  type = "text",
  value,
  id,
  placeholder,
  validation,
  disabled,
  label,
  required,
  className,
  defaultValue,
  onChange,
}: IInput) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div>
      {label && (
        <label className="block mb-1 font-semibold">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          const fieldValue =
            value !== undefined ? value : field.value || defaultValue || ""; 

          return type === "password" ? (
            <span className="relative">
              <input
                id={id}
                type={isPasswordShow ? "text" : "password"}
                placeholder={placeholder}
                {...field}
                value={fieldValue} 
                onChange={onChange || field.onChange} 
                required={required}
                disabled={disabled}
                className={`${className} py-2 pr-8 w-full`}
              />
              <span className="absolute right-2 top-0 h-full pr-2 flex items-center">
                {isPasswordShow ? (
                  <FaEye
                    size={20}
                    className="text-lg cursor-pointer text-gray-500"
                    onClick={() => setIsPasswordShow(!isPasswordShow)}
                  />
                ) : (
                  <FaEyeSlash
                    size={20}
                    className="text-lg cursor-pointer text-gray-500"
                    onClick={() => setIsPasswordShow(!isPasswordShow)}
                  />
                )}
              </span>
            </span>
          ) : (
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              {...field}
              value={fieldValue} 
              onChange={onChange || field.onChange} 
              required={required}
              disabled={disabled}
              className={`${className} py-2 w-full`}
            />
          );
        }}
      />
      <small className="text-red-500">{errorMessage}</small>
    </div>
  );
};

export default FormInput;
