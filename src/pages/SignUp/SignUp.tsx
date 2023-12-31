/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import logo from "./../../assets/logo/logo.png";
import Button from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSignUpSchema } from "../Schema/signin-signUp";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { PayloadAction } from "@reduxjs/toolkit";
import { signUp } from "../../redux/auth/authActions";
import toast from "react-hot-toast";

type loginType = {
  email: string;
  password: string;
};

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSignUpSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: loginType) => {
    console.log(data);
    const res: PayloadAction<any> = await dispatch(signUp(data));

    console.log(res);

    if (res.payload.token) {
      console.log(res.payload);
      toast.success("Successfully Registered");
      navigate("/");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center">
      <div className="m-3 p-8 sm:p-12 rounded-lg shadow-lg border">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img className="w-[50px] h-[40px]" src={logo} alt="logo" />
            <span className=" text-xl font-bold">Stack</span>
          </Link>
          <p className="mt-4 font-bold">Sign up to join with Stack</p>
        </div>

        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="block font-semibold">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="input input-bordered input-primary w-[300px] "
            placeholder="Enter Email"
          />
          <p className="text-red-500">{errors.email?.message}</p>

          <label htmlFor="password" className="block font-semibold mt-5">
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            className="input input-bordered input-primary w-[300px]"
            placeholder="Enter Password"
          />
          <p className="text-red-500">{errors.password?.message}</p>
          <div className="mt-5">
            <Button type="submit" className="w-full">
              Sign Up{" "}
            </Button>
          </div>
          <p className="mt-5">
            Already have an account? <Link to="/sign-in ">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
