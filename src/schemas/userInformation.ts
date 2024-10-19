import * as Yup from "yup";

export const validationUserInformationSchema = Yup.object().shape({
  full_name: Yup.string()
    .min(1, "نام باید حداقل 1 کاراکتر باشد")
    .max(255, "نام نمی‌تواند بیشتر از 255 کاراکتر باشد")
    .required("نام کامل الزامی است"),

  national_id: Yup.string()
    .min(1, "کد ملی باید حداقل 1 کاراکتر باشد")
    .max(20, "کد ملی نمی‌تواند بیشتر از 20 کاراکتر باشد")
    .required("کد ملی الزامی است"),

  date_of_birth: Yup.date()
    .required("تاریخ تولد الزامی است")
    .typeError("تاریخ تولد نامعتبر است"),

  address: Yup.string()
    .min(1, "آدرس باید حداقل 1 کاراکتر باشد")
    .required("آدرس الزامی است"),

  phone_number: Yup.string()
    .min(1, "شماره تلفن باید حداقل 1 کاراکتر باشد")
    .max(20, "شماره تلفن نمی‌تواند بیشتر از 20 کاراکتر باشد")
    .required("شماره تلفن الزامی است"),
});
