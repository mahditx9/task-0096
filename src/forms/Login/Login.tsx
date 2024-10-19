import { FormicTextInput } from "@/components/Formik";
import { Button } from "@/components/UI";
import { useAppDispatch, useLoginUser } from "@/hooks";
import { LoginInterface } from "@/interface/user";
import { validationLoginSchema } from "@/schemas";
import { loginUser } from "@/store";
import { Form, Formik, FormikState } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const loginFormInitialValues: LoginInterface = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loginRequest } = useLoginUser();

  const handleSubmit = async (
    values: LoginInterface,
    resetForm: (
      nextState?: Partial<FormikState<LoginInterface>> | undefined
    ) => void,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    await loginRequest.mutate(
      {
        email: values.email,
        password: values.password,
      },
      {
        onSuccess(data) {
          if (data) toast.success(data.message ?? "عملیات موفقیت آمیز بود");
          console.log(data, "data after login");
          const userTokenData = {
            token: { access: data.access, refresh: data.refresh },
          };
          dispatch(loginUser({ ...userTokenData }));
          resetForm();
          navigate("/");
        },
        onError(err) {
          toast.error(err.error);
        },
      }
    );
    setTimeout(() => {
      setSubmitting(false);
    }, 500);
  };
  return (
    <div className="space-y-5">
      <Formik
        initialValues={loginFormInitialValues}
        validationSchema={validationLoginSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          await handleSubmit(values, resetForm, setSubmitting);
        }}
      >
        {({ isValid, isSubmitting }) => (
          <Form className="w-full flex flex-col gap-2.5">
            <FormicTextInput label="ایمیل : " name="email" />
            <FormicTextInput
              label="رمز عبور : "
              name="password"
              type="password"
            />
            <Button
              type="success"
              btnType="submit"
              disable={!isValid || isSubmitting}
            >
              ورود
            </Button>
          </Form>
        )}
      </Formik>
      <div className="flex items-center gap-5 py-2.5">
        <h3 className="h3-semibold">حساب کاربری ندارید ؟</h3>
        <Button
          className="py-2.5 px-8"
          btnType="button"
          type="info"
          path="/sign-up"
        >
          ثبت نام
        </Button>
      </div>
    </div>
  );
};
