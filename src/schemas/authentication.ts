import * as Yup from "yup";

export const validationSignUpSchema = Yup.object({
  username: Yup.string()
    .matches(
      /^[\w.@+-]+$/,
      "نام کاربری فقط باید شامل حروف,اعداد و نماد های :@/./+/-/_ باشد"
    )
    .min(1, "نام کاربری باید بیش از 1 کاراکتر باشد")
    .max(150, "نام کاربری نمیتواند بیش از 150 کاراکتر باشد")
    .required("نام کاربری نمیتواند خالی باشد"),

  email: Yup.string()
    .email("یک ایمیل معتبر وارد کنید")
    .min(1, "یک ایمیل معتبر وارد کنید")
    .max(254, "یک ایمیل معتبر وارد کنید")
    .required("ایمیل نمیتواند خالی باشد"),

  password: Yup.string()
    .min(1, "یک پسورد معتبر وارد کنید")
    .required("پسورد نمیتواند خالی باشد"),
});
export const validationLoginSchema = Yup.object({
  email: Yup.string()
    .email("یک ایمیل معتبر وارد کنید")
    .min(1, "یک ایمیل معتبر وارد کنید")
    .max(254, "یک ایمیل معتبر وارد کنید")
    .required("ایمیل نمیتواند خالی باشد"),

  password: Yup.string()
    .min(1, "یک پسورد معتبر وارد کنید")
    .required("پسورد نمیتواند خالی باشد"),
});
