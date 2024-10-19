import { FormicTextInput } from "@/components/Formik";
import { Button } from "@/components/UI";
import { useEditUser, useGetUserInformation } from "@/hooks";
import {
  CreateUserFormValuesInterface,
  CreateUserInformationInterface,
} from "@/interface/user";
import { validationUserInformationSchema } from "@/schemas/userInformation";
import { Form, Formik, FormikState } from "formik";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { FormikDateTimePicker } from "../../components/Formik";
import { useEffect, useState } from "react";

export const EditUserForm = () => {
  const params = useParams<{ id: string }>();
  const [userInformationFormValues, setUserInformationFormValues] =
    useState<CreateUserFormValuesInterface>({
      address: "",
      date_of_birth: "",
      full_name: "",
      national_id: "",
      phone_number: "",
    });
  const { editUserRequest } = useEditUser({ id: params.id! });
  const { getUserInformationRequest } = useGetUserInformation({
    id: Number(params.id),
    fetchInitial: true,
  });
  useEffect(() => {
    const getUserInformation = async () => {
      const {
        data: userInformationData,
        isError,
        error,
        isSuccess,
      } = await getUserInformationRequest;
      if (isSuccess && userInformationData) {
        setUserInformationFormValues({
          address: userInformationData?.address ?? "",
          date_of_birth: userInformationData?.date_of_birth ?? "",
          full_name: userInformationData?.full_name ?? "",
          national_id: userInformationData?.national_id ?? "",
          phone_number: userInformationData?.phone_number ?? "",
        });
      }
      if (isError && error) {
        console.log(error, "get info err");

        toast.error("مشکلی پیش آمده");
      }
    };
    getUserInformation();
  }, []);
  const handleSubmit = async (
    values: CreateUserInformationInterface,
    resetForm: (
      nextState?:
        | Partial<FormikState<CreateUserInformationInterface>>
        | undefined
    ) => void,

    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    editUserRequest.mutate(values, {
      onSuccess(data) {
        console.log(data, " <====> data after information");
        toast.success("ویرایش انجام شد");
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
            <FormicTextInput label="تاریخ تولد : " name="date_of_birth" />
            <FormikDateTimePicker
              label="تاریخ تولد :"
              name="date_of_birth"
              type="DATE"
            />
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
