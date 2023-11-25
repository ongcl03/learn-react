import { useForm } from "react-hook-form";

export const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* need to register the data for the form */}
      <input type="text" placeholder="Full Name..." {...register("fullName")} />
      <input type="text" placeholder="Email..." {...register("email")} />
      <input type="text" placeholder="Age..." {...register("age")} />
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
