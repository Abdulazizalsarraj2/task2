import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required("الاسم الثلاثي مطلوب")
    .min(6, "الاسم يجب أن يكون 6 أحرف على الأقل")
    .matches(/^[^.]*$/, "لا يجب أن يحتوي الاسم على نقطة"),

  email: Yup.string()
    .required("البريد الإلكتروني مطلوب")
    .email("الرجاء إدخال بريد إلكتروني صالح"),

  password: Yup.string()
    .required("كلمة المرور مطلوبة")
    .min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل")
    .matches(/[a-z]/, "يجب أن تحتوي كلمة المرور على حرف صغير واحد على الأقل")
    .matches(/[A-Z]/, "يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل")
    .matches(/[!@#$%^&*(),.?":{}|<>_\-\\/\[\]=+;']/,
             "يجب أن تحتوي كلمة المرور على رمز واحد على الأقل"),

  password_confirmation: Yup.string()
    .required("تأكيد كلمة المرور مطلوب")
    .oneOf([Yup.ref("password"), null], "كلمة المرور غير متطابقة"),
});
