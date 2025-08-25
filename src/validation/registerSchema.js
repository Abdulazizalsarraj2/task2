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
    .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
    password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "كلمة المرور غير متطابقة")
    .required("تأكيد كلمة المرور مطلوب"),
});