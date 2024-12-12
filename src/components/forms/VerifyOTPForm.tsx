"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import FormInput from "./FormInput";
import Form from "./Form";
import { instance } from "@/axios/axiosInstance";
import LoadingSpinner from "../common/LoadingSpinner";
import ReactCodeInput from "react-code-input";

const VerifyOTPForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState<string>("");
  const router = useRouter();
  const email = Cookies.get("email");

  const handleOtpChange = (value: string) => setOtp(value);

  const handleVerifyOTP = async () => {
    setLoading(true);
    setError(null);

    if (!email) {
      setError("Email not found in cookies. Please try again.");
      setLoading(false);
      return;
    }

    if (!otp || otp.length !== 5) {
      setError("Please enter a valid 5-digit OTP.");
      setLoading(false);
      return;
    }

    try {
      const response = await instance.get(`RecoverVerifyOTP/${email}/${otp}`);
      if (response?.data?.status === "success") {
        Cookies.set("otp",otp);
        router.push("/otp/reset-password"); 
      }
    } catch (error) {
      setError(`Something went wrong: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form submitHandler={handleVerifyOTP} className="min-w-full flex flex-col gap-4">
      <FormInput
        name="email"
        id="email"
        value={email || ""}
        placeholder="ENTER YOUR EMAIL"
        disabled
        type="email"
        className="min-w-full border hover:border-black rounded-sm px-4 py-3 text-sm"
      />
      <div className=" flex justify-center items-center">
      <ReactCodeInput
        type="text"
        fields={5}
        value={otp}
        onChange={handleOtpChange}
        name="otp"
        inputMode="numeric"
        className=""
      />
      </div>
      {error && <p className="text-red-500 text-[10px]">{error}</p>}
      <button
        className="w-full bg-blue hover:bg-black text-white text-sm font-semibold shadow-sm py-3 rounded-sm duration-300 ease-in"
        disabled={loading}
      >
        {loading ? <LoadingSpinner /> : "VERIFY OTP"}
      </button>
    </Form>
  );
};

export default VerifyOTPForm;
