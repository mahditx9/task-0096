import { FormicTextInput } from "@/components/Formik";
import { Button } from "@/components/UI";
import { useCreateUserInformation } from "@/hooks";
import { CreateUserInformationInterface } from "@/interface/user";
import { validationUserInformationSchema } from "@/schemas/userInformation";
import { Form, Formik, FormikState } from "formik";
import toast from "react-hot-toast";
import { FormikDateTimePicker } from "../../components/Formik";

export const CreateUserForm = () => {
  const userInformationFormValues = {
    address: "",
    date_of_birth: "",
    full_name: "",
    national_id: "",
    phone_number: "",
  };
  const { createUserInformationRequest } = useCreateUserInformation();

  const handleSubmit = async (
    values: CreateUserInformationInterface,
    resetForm: (
      nextState?:
        | Partial<FormikState<CreateUserInformationInterface>>
        | undefined
    ) => void,

    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    createUserInformationRequest.mutate(values, {
      onSuccess(data) {
        console.log(data, " <====> data after information");
        toast.success("کاربر با موفقیت ایجاد گردید");
        resetForm();
      },
      onError(err) {
        toast.error(err.detail ?? "مشکلی پیش آمد");
      },
    });
    setTimeout(() => {
      setSubmitting(false);
    }, 500);
  };
  return (
    <div>
      <Formik
        initialValues={userInformationFormValues}
        validationSchema={validationUserInformationSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          await handleSubmit(values, resetForm, setSubmitting);
        }}
      >
        {({ isValid, isSubmitting }) => (
          <Form className="w-full flex flex-col gap-2.5">
            <FormicTextInput label="نام کامل : " name="full_name" />
            <FormicTextInput label="کد ملی : " name="national_id" />
            <FormicTextInput label="شماره همراه : " name="phone_number" />
            <FormikDateTimePicker
              label="تاریخ تولد :"
              name="date_of_birth"
              type="DATE"
            />
            <FormicTextInput label="آدرس : " name="address" />
            <Button
              type="success"
              btnType="submit"
              disable={!isValid || isSubmitting}
            >
              ثبت
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
