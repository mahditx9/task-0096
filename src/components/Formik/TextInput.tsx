/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useFormikContext, Field, FieldProps } from "formik";
import { LocalIcon } from "../UI";

interface FormicTextInputProps {
  id?: string;
  name: string;
  label: string;
  type?: "text" | "password";
  className?: string;
  disabled?: boolean;
  required?: boolean;
}

export const FormicTextInput: React.FC<FormicTextInputProps> = ({
  id,
  name,
  label,
  type = "text",
  disabled,
  required,
  className,
}) => {
  const { errors, touched } = useFormikContext<any>();
  const error = errors[name] as string | undefined;
  const [typeShown, setTypeShown] = useState<"text" | "password">(type);
  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <div className={`flex flex-col text-dark dark:text-white ${className}`}>
          <label className="flex items-center gap-1.5" htmlFor={id}>
            {required && (
              <LocalIcon
                iconType="StarSign"
                className="w-2 h-2 text-danger-dark"
              />
            )}
            {label}
          </label>

          <div
            className={`flex-between  overflow-hidden mt-1  bg-white border w-full  border-gray-light rounded-md  shadow-sm               ${
              touched[name] && error
                ? "!border-danger-light"
                : "focus:border-green-dark focus:ring-1 focus:ring-green-dark"
            } ${
              disabled
                ? "bg-slate-50 text-slate-500 border-slate-200 shadow-none"
                : ""
            }`}
          >
            <input
              id={id}
              type={type === "text" ? type : typeShown}
              placeholder={label}
              disabled={disabled}
              className={`  block flex-1 w-full px-3 py-2 text-dark placeholder-slate-400 focus:outline-none`}
              {...field}
            />
            {type === "password" && (
              <div className="px-2.5">
                <LocalIcon
                  iconType={typeShown === "text" ? "Show" : "Hide"}
                  className="w-8 h-8 cursor-pointer"
                  onClick={() =>
                    setTypeShown((prev) =>
                      prev === "password" ? "text" : "password"
                    )
                  }
                />
              </div>
            )}
          </div>
          {touched[name] && error ? (
            <div className="text-danger-light">{error}</div>
          ) : null}
        </div>
      )}
    </Field>
  );
};
