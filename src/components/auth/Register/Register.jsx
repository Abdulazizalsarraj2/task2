
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../validation/registerSchema.js";
import { Eye, EyeOff } from "lucide-react";
import AuthLayout from "../../layout/AuthLayout";

function InputField({
  label,
  type = "text",
  placeholder = "",
  name,
  register,
  errors,
}) {
  return (
    <div className="w-full mb-6 relative">
      {label && (
        <label className="absolute -top-3 right-3 bg-white px-2 text-sm text-[#7056CC] font-medium select-none">
          {label}
        </label>
      )}
      <div
        className={`flex items-center border ${
          errors[name] ? "border-red-500" : "border-text-2"
        } rounded-md px-4 py-3 focus-within:ring-0 focus-within:border-[#7056CC]`}
      >
        <input
          {...register(name)}
          dir="rtl"
          type={type}
          placeholder={placeholder}
          className="w-full outline-none text-sm placeholder-text-2 bg-transparent text-text-1"
        />
      </div>
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>
      )}
    </div>
  );
}

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log("Register Data:", data);
  };

  return (
    <AuthLayout
      title="حساب جديد في Teknova"
      subtitle={
        <>
          ادخل البيانات التالية حتى تتمكن من انشاء حساب جديد في موقع{" "}
          <span className="text-text-2 font-bold">شركة Teknova البرمجية</span>
        </>
      }
    >
      <form className="-mt-1" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="fullName"
          label="الاسم الثلاثي"
          placeholder="ادخل الاسم الثلاثي"
          register={register}
          errors={errors}
        />

        <InputField
          name="email"
          // label="البريد الإلكتروني"
          placeholder="الايميل"
          type="email"
          register={register}
          errors={errors}
        />

        {/* Password */}
        <div className="w-full mb-6 relative">
          {/* <label className="absolute -top-3 right-3 bg-white px-2 text-sm text-[#7056CC] font-medium select-none">
            كلمة المرور
          </label> */}
          <div
            className={`flex items-center border ${
              errors.password ? "border-red-500" : "border-text-2"
            } rounded-md px-4 py-3 focus-within:ring-0 focus-within:border-[#7056CC]`}
          >
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="ml-3 text-gray-400"
            >
              {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
            </button>
            <input
              {...register("password")}
              dir="rtl"
              type={showPassword ? "text" : "password"}
              placeholder="كلمة المرور"
              className="w-full outline-none text-sm placeholder-text-2 bg-transparent text-text-1"
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="w-full mb-2 relative">
          {/* <label className="absolute -top-3 right-3 bg-white px-2 text-sm text-[#7056CC] font-medium select-none">
            تأكيد كلمة المرور
          </label> */}
          <div
            className={`flex items-center border ${
              errors.passwordConfirm ? "border-red-500" : "border-text-2"
            } rounded-md px-4 py-3 focus-within:ring-0 focus-within:border-[#7056CC]`}
          >
            <button
              type="button"
              onClick={() => setShowConfirmPassword((s) => !s)}
              className="ml-3 text-gray-400"
            >
              {showConfirmPassword ? (
                <Eye className="h-5 w-5" />
              ) : (
                <EyeOff className="h-5 w-5" />
              )}
            </button>
            <input
              {...register("passwordConfirm")}
              dir="rtl"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="تأكيد كلمة المرور"
              className="w-full outline-none text-sm placeholder-text-2 bg-transparent text-text-1"
            />
          </div>
          {errors.passwordConfirm && (
            <p className="text-red-500 text-xs mt-1">
              {errors.passwordConfirm.message}
            </p>
          )}
        </div>

        <div className="text-sm mb-6">
          <a href="#" className="text-[#7056CC] underline font-bold">
            نسيت كلمة المرور ؟
          </a>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-third text-white font-medium shadow-md hover:bg-[#53419E] transition cursor-pointer"
        >
          تسجيل الدخول
        </button>
      </form>
    </AuthLayout>
  );
}
