"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import FormInput from "./FormInput";
import Form from "./Form";
import { instance } from "@/axios/axiosInstance";
import LoadingSpinner from "../common/LoadingSpinner";

const ResetPasswordForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
//   const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const email = Cookies.get("email") || "";
  const otp = Cookies.get("otp") || "";



  const handleResetPassword = async ({
    password,
}: {
    password: string;
}) => {
    setLoading(true);
    setError(null);

    if (!email || !otp) {
      setError("Email or OTP is missing. Please try again.");
      setLoading(false);
      return;
    }

    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    try {
      const body = { email, otp, password };
      const response = await instance.post(`RecoverResetPass`, body);
      console.log({response})

      if (response?.data?.status === "success") {
        Cookies.remove("email");
        Cookies.remove("otp");
        router.push("/login");
      }
    } catch (error) {
      setError(`Something went wrong: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form submitHandler={handleResetPassword} className="min-w-full flex flex-col gap-4">
      <FormInput
        name="email"
        id="email"
        value={email}
        placeholder="ENTER YOUR EMAIL"
        disabled
        type="email"
        className="min-w-full border hover:border-black rounded-sm px-4 py-3 text-sm"
      />
      <FormInput
        name="password"
        id="password"
        placeholder="NEW PASSWORD"
        type="password"
        className="min-w-full border hover:border-black rounded-sm px-4 py-3 text-sm"
      />
      {error && <p className="text-red-500 text-[10px]">{error}</p>}
      <button
        className="w-full bg-blue hover:bg-black text-white text-sm font-semibold shadow-sm py-3 rounded-sm duration-300 ease-in"
        disabled={loading}
      >
        {loading ? <LoadingSpinner /> : "CREATE SAVE PASSWORD"}
      </button>
    </Form>
  );
};

export default ResetPasswordForm;
