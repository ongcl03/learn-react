import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// yup is to validate form format
// react-hook-form is a hook for form and we will use useForm for handle form submission and register it for get the form data

export const Form = () => {
  // Using yup to validate the form data format
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  // Using yupResolver to integrate react-hook-form and yup
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  // This function will only run when the form data that fits the format
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name..." {...register("fullName")} />
      <input type="text" placeholder="Email..." {...register("email")} />
      <input type="number" placeholder="Age..." {...register("age")} />
      <input
        type="password"
        placeholder="Password..."
        {...register("password")}
      />
      <input
        type="password"
        placeholder="Confirm Password..."
        {...register("confirmPassword")}
      />
      <input type="submit" />
    </form>
  );
};
