import React from "react";
import { Field, FieldProps } from "formik";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import Toolbar from "react-multi-date-picker/plugins/toolbar";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

type DateTimePickerPropsType = {
  name: string;
  label: string;
  required?: boolean;
  className?: string;
  style?: React.CSSProperties;
  type: "TIME" | "DATE" | "DATE_TIME";
  id?: string;
  placeholder?: string;
};

export const FormikDateTimePicker: React.FC<DateTimePickerPropsType> = ({
  name,
  label,
  required,
  className,
  style,
  type,
  id,
  placeholder,
}) => {
  let formattedValue: string;
  switch (type) {
    case "DATE_TIME":
      formattedValue = "YYYY/MM/DD --- HH:mm";
      break;
    case "TIME":
      formattedValue = "HH:mm";
      break;
    case "DATE":
      formattedValue = "YYYY/MM/DD";
      break;

    default:
      break;
  }
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="flex items-center gap-1.5">
        {required && <span className="text-danger-dark">*</span>}
        {label}
      </label>

      <Field name={name}>
        {({ field, form }: FieldProps) => {
          const { setFieldValue, setFieldTouched, touched, errors } = form;
          const error = errors[name] as string | undefined;
          const isTouched = touched[name];
          const hasError = !!error;

          return (
            <div className="flex flex-col">
              <DatePicker
                id={id}
                style={{
                  height: "100%",
                  borderRadius: "8px",
                  fontSize: "14px",
                  padding: "0.5rem 1rem",
                  marginTop: "0.25rem",
                  color: "#1d1d1d",
                  background: "#fff",
                  width: "100%",
                  ...style,
                }}
                disableDayPicker={type === "TIME"}
                disableMonthPicker={type === "TIME"}
                disableYearPicker={type === "TIME"}
                displayWeekNumbers={type === "TIME"}
                format={formattedValue}
                plugins={[
                  <TimePicker
                    hideSeconds
                    disabled={type === "DATE"}
                    position="bottom"
                    key="timePicker"
                  />,
                  <Toolbar
                    key="toolbar"
                    position="bottom"
                    names={{
                      today: type === "TIME" ? "زمان فعلی" : "تاریخ فعلی",
                      deselect: "حذف",
                      close: "بسته شدن",
                    }}
                  />,
                ]}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                name={name}
                value={field.value}
                onChange={(e: any) => {
                  const date = e.valueOf();
                  setFieldValue(name, date);
                }}
                onFocusedDateChange={() => setFieldTouched(name, true)}
                placeholder={placeholder}
              />
              {isTouched && hasError && (
                <div className="text-danger-light text-sm mt-1">{error}</div>
              )}
            </div>
          );
        }}
      </Field>
    </div>
  );
};
