// import React, { useState, useRef, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css"; // استيراد تنسيقات مكتبة التاريخ

// // محاكاة للـ props القادمة من Inertia.js
// const usePage = () => ({
//   props: {
//     errors: {},
//     flash: {},
//   },
// });

// const ServiceRequest = () => {
//   const { errors } = usePage().props;

//   const [formData, setFormData] = useState({
//     full_name: "",
//     email: "",
//     phone: "",
//     service_id: "",
//     submission_deadline: null,
//     description: "",
//   });

//   const services = [
//     { id: "1", name: "تطوير موقع إلكتروني" },
//     { id: "2", name: "تصميم هوية بصرية" },
//     { id: "3", name: "استضافة وحماية" },
//     { id: "4", name: "استشارة تقنية" },
//     { id: "5", name: "أخرى" },
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleDateChange = (date) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       submission_deadline: date,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Data_Send:", formData);
//   };

//   // --- منطق قائمة نوع الخدمة ---
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleSelectService = (id) => {
//     setFormData((prev) => ({ ...prev, service_id: id }));
//     setIsOpen(false);
//   };

//   const selectedService = services.find((s) => s.id === formData.service_id);

//   // إغلاق عند النقر خارج القائمة
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div
//       dir="rtl"
//       className=" min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8"
//     >
//       <div className="w-[89vw] max-w-[90vw] bg-[#FBFAFF] rounded-lg shadow-md p-8">
//         <div className="text-white text-center w-[125px] py-3 px-3 mr-5 rounded-full bg-secondary mb-6">
//           اطلب خدمة
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
//             {/* حقل الاسم الكامل */}
//             <div>
//               <label
//                 htmlFor="full_name"
//                 className="block text-lg font-medium text-[#241B41] mb-2"
//               >
//                 الاسم الكامل
//               </label>
//               <input
//                 type="text"
//                 name="full_name"
//                 id="full_name"
//                 value={formData.full_name}
//                 onChange={handleChange}
//                 className="w-full px-6 py-3 text-text-2 bg-[#F3EFFD] border border-gray-200 rounded-full focus:ring-blue-500 focus:border-blue-500 transition outline-0"
//                 placeholder="أدخل اسمك الكامل"
//               />
//               {errors.full_name && (
//                 <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>
//               )}
//             </div>

//             {/* حقل البريد الإلكتروني */}
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-lg font-medium text-[#241B41] mb-2"
//               >
//                 البريد الإلكتروني
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-6 py-3 text-text-2 bg-[#F3EFFD] border border-gray-200 rounded-full focus:ring-blue-500 focus:border-blue-500 transition outline-0"
//                 placeholder="adelkharzoum@gmail.com"
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//               )}
//             </div>

//             {/* حقل رقم الهاتف */}
//             <div>
//               <label
//                 htmlFor="phone"
//                 className="block text-lg font-medium text-[#241B41] mb-2"
//               >
//                 رقم الهاتف
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 id="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="text-right w-full px-6 py-3 text-text-2 bg-[#F3EFFD] border border-gray-200 rounded-full focus:ring-blue-500 focus:border-blue-500 transition outline-0"
//                 placeholder="+963 933 656 197"
//               />
//               {errors.phone && (
//                 <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
//               )}
//             </div>

//             {/* حقل نوع الخدمة كتلة واحدة تتمدد */}
//             <div ref={dropdownRef}>
//               <label
//                 htmlFor="service_id"
//                 className="block text-lg font-medium text-[#241B41] mb-2"
//               >
//                 نوع الخدمة
//               </label>

//               <div
//                 onClick={() => setIsOpen(!isOpen)}
//                 className={`bg-[#F3EFFD] border border-gray-200 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300`}
//                 style={{
//                   height: isOpen
//                     ? `${(services.length + 1) * 48}px` // +1 للعنصر المختار
//                     : "48px",
//                 }}
//               >
//                 <div className="px-6 py-3 flex justify-between items-center">
//                   <span className="text-[#362963]">
//                     {selectedService
//                       ? selectedService.name
//                       :<span className="text-text-2"> الرجاء تحديد اختيار</span>}
//                   </span>
//                   <span className="text-[#7E60E2]">
//                     {isOpen ? "▲" : "▼"}
//                   </span>
//                 </div>

//                 {isOpen && (
//                   <div className="flex flex-col">
//                     {services.map((service) => (
//                       <div
//                         key={service.id}
//                         onClick={() => handleSelectService(service.id)}
//                         className={`px-6 py-3 text-[#362963] hover:bg-gray-100 ${
//                           formData.service_id === service.id
//                             ? "bg-gray-200"
//                             : ""
//                         }`}
//                       >
//                         {service.name}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {errors.service_id && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.service_id}
//                 </p>
//               )}
//             </div>

//             {/* حقل وصف الخدمة */}
//             <div>
//               <label
//                 htmlFor="description"
//                 className="block text-lg font-medium text-[#241B41] mb-2"
//               >
//                 وصف مختصر للخدمة التي تحتاجها
//               </label>
//               <textarea
//                 name="description"
//                 id="description"
//                 rows="1"
//                 value={formData.description}
//                 onChange={handleChange}
//                 className="w-full px-6 py-3 text-text-2 bg-[#F3EFFD] border border-gray-200 rounded-full focus:ring-blue-500 focus:border-blue-500 transition outline-0"
//                 placeholder="وصف مختصر للخدمة التي تحتاجها"
//               ></textarea>
//               {errors.description && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.description}
//                 </p>
//               )}
//             </div>

//             {/* حقل الموعد النهائي للتسليم */}
//             <div className="custom-datepicker">
//               <label
//                 htmlFor="submission_deadline"
//                 className="block text-lg font-medium text-[#241B41] mb-2"
//               >
//                 الموعد النهائي لتسليم الخدمة
//               </label>
//               <DatePicker
//                 selected={formData.submission_deadline}
//                 onChange={handleDateChange}
//                 dateFormat="yyyy/MM/dd"
//                 className="w-full px-6 py-3 text-text-2 bg-[#F3EFFD] border border-gray-200 rounded-full focus:ring-blue-500 focus:border-blue-500 transition outline-0"
//                 placeholderText="اختر التاريخ المناسب"
//                 name="submission_deadline"
//                 id="submission_deadline"
//               />
//               {errors.submission_deadline && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.submission_deadline}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* زر الإرسال */}
//           <div className="mt-8 flex justify-start">
//             <button
//               type="submit"
//               className="px-18 py-3 mr-5 mt-2 bg-secondary text-white font-semibold rounded-full hover:bg-[#53419E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer"
//             >
//               إرسال
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ServiceRequest;


import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GET, POST } from "../../services/http.service";
import { successToaster, errorToaster } from "../../helpers/toasterConfiguration"; // استدعاء التوستر
import dateIcon from "../../assets/Group 69.svg"


const usePage = () => ({
  props: {
    errors: {},
    flash: {},
  },
});

const ServiceRequest = () => {
  const { errors: inertiaErrors } = usePage().props;

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    service_id: "",
    submission_deadline: null,
    description: "",
  });

  const [services, setServices] = useState([]);
  const [loadingServices, setLoadingServices] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [errors, setErrors] = useState({}); // لحفظ الأخطاء القادمة من السيرفر

  // --- جلب الخدمات ---
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoadingServices(true);
        const resp = await GET("services");
        const list = resp?.data?.data || [];
        setServices(list);
      } catch (err) {
        console.error("Failed to fetch services", err);
        errorToaster("فشل جلب الخدمات");
      } finally {
        setLoadingServices(false);
      }
    };
    fetchServices();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      submission_deadline: date,
    }));
  };

  const formatDate = (date) => {
    if (!date) return null;
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.service_id) {
      errorToaster("الرجاء اختيار الخدمة أولا");
      return;
    }
    try {
      setSubmitLoading(true);
      setErrors({}); // إعادة تعيين الأخطاء
      console.log(`POST URL: services/${formData.service_id}/requests`);

      const resp = await POST(`services/${formData.service_id}/requests`, {
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        description: formData.description,
        submission_deadline: formatDate(formData.submission_deadline),
      });

      const message = resp?.data?.message || "تم إرسال الطلب بنجاح";
      successToaster(message);

      // إعادة تعيين البيانات بعد النجاح
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        service_id: "",
        submission_deadline: null,
        description: "",
      });
    } catch (err) {
      console.error("فشل الإرسال", err);
      const message =
        err?.message || err?.data?.message || "حدث خطأ أثناء إرسال الطلب";
      errorToaster(message);

      // حفظ الأخطاء إذا كانت موجودة
      if (err?.errors) {
        setErrors(err.errors);
      }
    } finally {
      setSubmitLoading(false);
    }
  };

  // --- منطق قائمة نوع الخدمة ---
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelectService = (id) => {
    setFormData((prev) => ({ ...prev, service_id: id }));
    setIsOpen(false);
  };

  const selectedService = services.find(
    (s) => String(s.id) === String(formData.service_id)
  );

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const CustomDateInput = React.forwardRef(
    ({ value, onClick, placeholder, id, name, onChange }, ref) => {
      return (
        <div className="relative">
          {/* أيقونة التاريخ داخل الحقل من اليسار */}
          <img
            src={dateIcon}
            alt="calendar"
            className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
          />
          <input
            ref={ref}
            value={value}
            onClick={onClick}
            onChange={onChange}
            placeholder={placeholder}
            id={id}
            name={name}
            // ملاحظة: نترك إمكانية الكتابة كما كانت؛ لذلك لا نضع readOnly
            className="w-full px-6 py-3 text-text-2 bg-[#F3EFFD] border border-gray-200 rounded-full outline-0 pl-14"
          />
        </div>
      );
    }
  );

  return (
    <div
      dir="rtl"
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8"
    >
      <div className="w-[89vw] max-w-[90vw] bg-[#FBFAFF] rounded-lg shadow-md p-8 -mt-8">
        {/* <div className="text-white text-center w-[125px] py-3 px-3 mr-5 rounded-full bg-secondary mb-6">
          اطلب خدمة
        </div> */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* الاسم الكامل */}
            <div>
              <label
                htmlFor="full_name"
                className="block text-lg font-medium text-[#241B41] mb-2"
              >
                الاسم الكامل
              </label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                value={formData.full_name}
                onChange={handleChange}
                className="w-full px-6 py-3 text-text-2 bg-[#F3EFFD] border border-gray-200 rounded-full outline-0"
                placeholder="أدخل اسمك الكامل"
              />
              {(errors.full_name || inertiaErrors.full_name) && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.full_name || inertiaErrors.full_name}
                </p>
              )}
            </div>

            {/* البريد الإلكتروني */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-[#241B41] mb-2"
              >
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-3 text-text-2 bg-[#F3EFFD] border border-gray-200 rounded-full outline-0"
                placeholder="adelkharzoum@gmail.com"
              />
              {(errors.email || inertiaErrors.email) && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email || inertiaErrors.email}
                </p>
              )}
            </div>

            {/* رقم الهاتف */}
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-[#241B41] mb-2"
              >
                رقم الهاتف
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="text-right w-full px-6 py-3 text-text-2 bg-[#F3EFFD] border border-gray-200 rounded-full outline-0"
                placeholder="+963 933 656 197"
              />
              {(errors.phone || inertiaErrors.phone) && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone || inertiaErrors.phone}
                </p>
              )}
            </div>

            {/* نوع الخدمة */}
            <div ref={dropdownRef}>
              <label
                htmlFor="service_id"
                className="block text-lg font-medium text-[#241B41] mb-2"
              >
                نوع الخدمة
              </label>

              <div
                onClick={() => !loadingServices && setIsOpen(!isOpen)}
                className={`bg-[#F3EFFD] border border-gray-200 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300`}
                style={{
                  height: isOpen ? `${(services.length + 1) * 48}px` : "48px",
                }}
              >
                <div className="px-6 py-3 flex justify-between items-center">
                  {loadingServices ? (
                    <span className="text-gray-400">جارٍ التحميل...</span>
                  ) : (
                    <span className="text-[#362963]">
                      {selectedService ? (
                        selectedService.name
                      ) : (
                        <span className="text-text-2">
                          الرجاء تحديد اختيار
                        </span>
                      )}
                    </span>
                  )}
                  <span className="text-[#7E60E2]">
                    {isOpen ? "▲" : "▼"}
                  </span>
                </div>

                {isOpen && (
                  <div className="flex flex-col">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        onClick={() => handleSelectService(service.id)}
                        className={`px-6 py-3 text-[#362963] hover:bg-gray-100 ${
                          String(formData.service_id) === String(service.id)
                            ? "bg-gray-200"
                            : ""
                        }`}
                      >
                        {service.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {(errors.service_id || inertiaErrors.service_id) && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.service_id || inertiaErrors.service_id}
                </p>
              )}
            </div>

            {/* وصف الخدمة */}
            <div>
              <label
                htmlFor="description"
                className="block text-lg font-medium text-[#241B41] mb-2"
              >
                وصف مختصر للخدمة
              </label>
              <textarea
                name="description"
                id="description"
                rows="1"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-6 py-3 text-text-2 bg-[#F3EFFD] border border-gray-200 rounded-full outline-0"
                placeholder="اكتب وصف مختصر للخدمة"
              ></textarea>
              {(errors.description || inertiaErrors.description) && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.description || inertiaErrors.description}
                </p>
              )}
            </div>

            {/* الموعد النهائي */}
            <div className="custom-datepicker">
              <label
                htmlFor="submission_deadline"
                className="block text-lg font-medium text-[#241B41] mb-2"
              >
                الموعد النهائي لتسليم الخدمة
              </label>
              <DatePicker
                selected={formData.submission_deadline}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                placeholderText="اختر التاريخ المناسب"
                name="submission_deadline"
                id="submission_deadline"
                customInput={<CustomDateInput />}
              />
              {(errors.submission_deadline ||
                inertiaErrors.submission_deadline) && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.submission_deadline ||
                    inertiaErrors.submission_deadline}
                </p>
              )}
            </div>
          </div>

          {/* زر الإرسال */}
          <div className="mt-8 flex justify-start">
            <button
              type="submit"
              disabled={submitLoading}
              className="px-20 py-3  mt-2 bg-secondary text-white font-semibold rounded-full hover:bg-[#53419E] disabled:opacity-50 cursor-pointer w-full sm:w-auto "
            >
              {submitLoading ? "جارٍ الإرسال..." : "إرسال"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceRequest;
