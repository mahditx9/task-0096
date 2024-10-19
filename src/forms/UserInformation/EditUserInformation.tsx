import { FormicTextInput } from "@/components/Formik";
import { Button } from "@/components/UI";
import {
  useAppDispatch,
  useCreateUserInformation,
  useGetUserInformation,
} from "@/hooks";
import { CreateUserInformationInterface } from "@/interface/user";
import { validationUserInformationSchema } from "@/schemas/userInformation";
import { updateUSer } from "@/store";
import { useUserSelector } from "@/store/selectors";
import { Form, Formik, FormikState } from "formik";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FormikDateTimePicker } from "../../components/Formik";

export const EditUserInformationForm = () => {
  const { id } = useUserSelector();
  const [userInformationFormValues, setUserInformationFormValues] =
    useState<CreateUserInformationInterface>({
      address: "",
      date_of_birth: "",
      full_name: "",
      national_id: "",
      phone_number: "",
    });
  const dispatch = useAppDispatch();
  const { createUserInformationRequest } = useCreateUserInformation();
  const { getUserInformationRequest } = useGetUserInformation({
    fetchInitial: true,
    id: id!,
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
    createUserInformationRequest.mutate(values, {
      onSuccess(data) {
        console.log(data, " <====> data after information");
        toast.success("اطلاعات شما با موفقیت ثبت گردید");
        dispatch(
          updateUSer({
            address: data.address,
            full_name: data.full_name,
            phone_number: data.phone_number,
            date_of_birth: data.date_of_birth,
            national_id: data.national_id,
          })
        );
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
              ثبت{" "}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
