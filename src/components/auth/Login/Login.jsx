/** @format */

// /** @format */
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { loginSchema } from "../../../validation/loginSchema";
// import { Eye, EyeOff } from "lucide-react";
// import AuthLayout from "../../layout/AuthLayout";

// function InputField({ label, type = "text", placeholder = "", name, register, errors }) {
//   return (
//     <div className="w-full mb-6 relative">
//       {label && (
//         <label className="absolute -top-3 right-3 bg-white px-2 text-sm text-[#7056CC] font-medium select-none">
//           {label}
//         </label>
//       )}
//       <div
//         className={`flex items-center border ${
//           errors[name] ? "border-red-500" : "border-text-2"
//         } rounded-md px-4 py-3 focus-within:border-[#7056CC]`}
//       >
//         <input
//           {...register(name)}
//           dir="rtl"
//           type={type}
//           placeholder={placeholder}
//           className="w-full outline-none text-sm placeholder-text-2 bg-transparent text-text-1"
//         />
//       </div>
//       {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>}
//     </div>
//   );
// }

// export default function Login() {
//   const [showPassword, setShowPassword] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(loginSchema),
//   });

//   const onSubmit = (data) => {
//     console.log("Login Data:", data);
//   };

//   return (
//     <AuthLayout
//       title="تسجيل الدخول إلى Teknova"
//       titleSize="3xl md:text-[32px]"
//       subtitle={
//         <>
//          ادخل الايميل وكلمة المرور حتى تتمكن من تسجيل الدخول الى موقع{" "}
//           <span className="font-bold text-text-2">شركة Teknova البرمجية</span>
//         </>
//       }
//     >
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <InputField
//           name="email"
//           label="البريد الإلكتروني"
//           placeholder="أدخل البريد الإلكتروني"
//           type="email"
//           register={register}
//           errors={errors}
//         />

//         {/* Password */}
//         <div className="w-full mb-6 relative">
//           {/* <label className="absolute -top-3 right-3 bg-white px-2 text-sm text-[#7056CC] font-medium select-none">
//             كلمة المرور
//           </label> */}
//           <div
//             className={`flex items-center border ${
//               errors.password ? "border-red-500" : "border-text-2"
//             } rounded-md px-4 py-3 focus-within:border-[#7056CC]`}
//           >
//             <button
//               type="button"
//               onClick={() => setShowPassword((s) => !s)}
//               className="ml-3 text-gray-400"
//             >
//               {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
//             </button>
//             <input
//               {...register("password")}
//               dir="rtl"
//               type={showPassword ? "text" : "password"}
//               placeholder="كلمة المرور"
//               className="w-full outline-none text-sm placeholder-text-2 bg-transparent text-text-1"
//             />
//           </div>
//           {errors.password && (
//             <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
//           )}
//         </div>

//         <div className="text-sm mb-6">
//           <a href="#" className="text-[#7056CC] underline font-bold">
//             نسيت كلمة المرور ؟
//           </a>
//         </div>

//         <button
//           type="submit"
//           className="w-full py-3 rounded-lg bg-third text-white font-medium shadow-md hover:bg-[#53419E] transition"
//         >
//           تسجيل الدخول
//         </button>
//       </form>
//     </AuthLayout>
//   );
// }

/** @format */
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../validation/loginSchema";
import { Eye, EyeOff } from "lucide-react";
import AuthLayout from "../../layout/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { loginUser } from "../../../store/auth/action/loginAction";

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
        } rounded-md px-4 py-3 focus-within:border-[#7056CC]`}
      >
        <input
          {...register(name)}
          dir="rtl"
          type={type}
          placeholder={placeholder}
          className="w-full outline-none text-sm placeholder-text-2 bg-transparent text-text-1"
        />
      </div>
      {/* تم تعديل هذا الجزء للتعامل مع الأخطاء القادمة كـ array */}
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">
          {Array.isArray(errors[name]) ? errors[name][0] : errors[name].message}
        </p>
      )}
    </div>
  );
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/"); // Redirect to home or dashboard
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <AuthLayout
      title="تسجيل الدخول إلى Teknova"
      titleSize="3xl md:text-[32px]"
      subtitle={
        <>
          ادخل الايميل وكلمة المرور حتى تتمكن من تسجيل الدخول الى موقع{" "}
          <span className="font-bold text-text-2">شركة Teknova البرمجية</span>
        </>
      }
    >
      {error && error.message && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <span className="block sm:inline">{error.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="email"
          label="البريد الإلكتروني"
          placeholder="أدخل البريد الإلكتروني"
          type="email"
          register={register}
          errors={{ ...errors, ...(error?.errors || {}) }}
        />

        <div className="w-full mb-6 relative">
          {/* <label className="absolute -top-3 right-3 bg-white px-2 text-sm text-[#7056CC] font-medium select-none">
            كلمة المرور
          </label> */}
          <div
            className={`flex items-center border ${
              errors.password || error?.errors?.password
                ? "border-red-500"
                : "border-text-2"
            } rounded-md px-4 py-3 focus-within:border-[#7056CC]`}
          >
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="ml-3 text-gray-400"
            >
              {showPassword ? (
                <Eye className="h-5 w-5" />
              ) : (
                <EyeOff className="h-5 w-5" />
              )}
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
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
          {error?.errors?.password && (
            <p className="text-red-500 text-xs mt-1">
              {error.errors.password[0]}
            </p>
          )}
        </div>
        <div dir="rtl" className="flex items-center justify-between mb-3">
          <div dir="rtl" className="text-sm ">
            <NavLink to="/register" className="text-[#7056CC] underline font-bold">
              ليس لديك حساب؟
            </NavLink>
          </div>

          <div className="text-sm ">
            <a href="#" className="text-[#7056CC] underline font-bold">
              نسيت كلمة المرور ؟
            </a>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 rounded-lg bg-third text-white font-medium shadow-md hover:bg-[#53419E] transition disabled:bg-gray-400 cursor-pointer"
        >
          {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
        </button>
      </form>
    </AuthLayout>
  );
}
