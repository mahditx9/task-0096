import { FormicTextInput } from "@/components/Formik";
import { Button } from "@/components/UI";
import { useMutateData } from "@/hooks";
import { SuccessResponseUserSignUp } from "@/interface/user";
import { validationSignUpSchema } from "@/schemas";
import { Form, Formik, FormikState } from "formik";
import toast from "react-hot-toast";

interface SignUpInterface {
  username: string;
  email: string;
  password: string;
}

export const SignUpForm = () => {
  const signUpFormInitialValues: SignUpInterface = {
    username: "",
    email: "",
    password: "",
  };

  const signUpRequest = useMutateData<
    SuccessResponseUserSignUp,
    SignUpInterface,
    unknown
  >({
    method: "POST",
    url: "/api/signup/",
  });

  const handleSubmit = async (
    values: SignUpInterface,
    resetForm: (
      nextState?: Partial<FormikState<SignUpInterface>> | undefined
    ) => void,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    await signUpRequest.mutate(
      {
        email: values.email,
        password: values.password,
        username: values.username,
      },
      {
        onSuccess(data) {
          if (data) toast.success(data.message ?? "عملیات موفقیت آمیز بود");
          resetForm();
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
        initialValues={signUpFormInitialValues}
        validationSchema={validationSignUpSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          await handleSubmit(values, resetForm, setSubmitting);
        }}
      >
        {({ isValid, isSubmitting }) => (
          <Form className="w-full flex flex-col gap-2.5">
            <FormicTextInput label="نام کاربری : " name="username" />
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
              ثبت نام
            </Button>
          </Form>
        )}
      </Formik>
      <div className="flex items-center gap-5 py-2.5">
        <h3 className="h3-semibold">حساب کاربری دارید ؟</h3>
        <Button
          className="py-2.5 px-8"
          btnType="button"
          type="info"
          path="/login"
        >
          ورود
        </Button>
      </div>
    </div>
  );
};
