import styles from "./Auth.module.scss";
import { useState } from "react";
import RegisterForm from "../../auth/RegisterForm";
import LoginForm from "../../auth/LoginForm";

export type variantType = "signIn" | "register";

const Auth = () => {
  const [variant, setVariant] = useState<variantType>("register");


  return (
    <div className={styles.auth}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <h1>{variant === "register" ? "Register" : "Sign In"}</h1>
            
            { variant === "register"
              ? <RegisterForm />
              : <LoginForm /> 
            }

            <div className={styles.setVariant}>
              {variant === "register"
                ? "Are you already have an account?"
                : "New to Netflix?"}
              <span
                onClick={() => {
                  variant === "register"
                    ? setVariant("signIn")
                    : setVariant("register");
                }}
              >
                {" "}
                {variant === "register" ? "Sign In Now." : "Register Now"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
