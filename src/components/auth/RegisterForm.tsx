import { FC } from "react";
import { useForm } from "react-hook-form";
import styles from "./Auth.module.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

type FormValuesType = {
  name?: string;
  email: string;
  password: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup
    .string()
    .min(4, "Min length is 4")
    .max(32, "Max length is 32")
    .required("Password is required"),
});

const RegisterForm: FC = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValuesType>({
    resolver: yupResolver(schema),
    shouldFocusError: true,
  });

  const onSubmit = (values: FormValuesType) => {
    console.log(JSON.stringify({ data: values }));
    router.push("/")
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.inputs}>
      <div className={styles.item}>
        <input {...register("name")} placeholder={"Name"} autoComplete={"false"}/>
        {errors.name && (
          <span className={styles.errorMessage}>{errors.name.message}</span>
        )}
      </div>

      <div className={styles.item}>
        <input {...register("email")} placeholder={"Email"} autoComplete={"false"} />
        {errors.email && (
          <span className={styles.errorMessage}>{errors.email.message}</span>
        )}
      </div>
      <div className={styles.item}>
        <input
          {...register("password")}
          type="password"
          placeholder={"Password"}
          autoComplete={"false"}
        />
        {errors.password && (
          <span className={styles.errorMessage}>{errors.password.message}</span>
        )}
      </div>
      <button type="submit" className={styles.button}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
