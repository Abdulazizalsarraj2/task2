// import React, { useState, useRef, useEffect } from "react";
// import { playlists } from "../../../dummy-data/playlist";

// export default function Academy() {
//   const [selectedCategory, setSelectedCategory] = useState("الكل");
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // استخراج جميع الفئات بدون تكرار
//   const categories = ["الكل", ...new Set(playlists.map((p) => p.category.name))];

//   // فلترة الكورسات
//   const filteredPlaylists =
//     selectedCategory === "الكل"
//       ? playlists
//       : playlists.filter((p) => p.category.name === selectedCategory);

//   // إغلاق القائمة عند النقر خارجها
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
//     <div className="mt-32 px-12 mr-8" dir="rtl">
//       {/* Dropdown الفلترة بتصميم مخصص */}
//       <div className="mb-8 w-full sm:max-w-96" ref={dropdownRef}>
//         <div
//           onClick={() => setIsOpen(!isOpen)}
//           className="bg-[#F3EFFD] border border-gray-200 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300"
//           style={{
//             height: isOpen ? `${(categories.length + 1) * 48}px` : "48px",
//           }}
//         >
//           <div className="px-6 py-3 flex justify-between items-center">
//             <span className="text-[#362963]">
//               {selectedCategory || (
//                 <span className="text-text-2">الرجاء تحديد اختيار</span>
//               )}
//             </span>
//             <span className="text-[#7E60E2]">{isOpen ? "▲" : "▼"}</span>
//           </div>

//           {isOpen && (
//             <div className="flex flex-col">
//               {categories.map((cat, index) => (
//                 <div
//                   key={index}
//                   onClick={() => {
//                     setSelectedCategory(cat);
//                     setIsOpen(false);
//                   }}
//                   className={`px-6 py-3 text-[#362963] hover:bg-gray-200 ${
//                     selectedCategory === cat ? "bg-gray-200" : ""
//                   }`}
//                 >
//                   {cat}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* عرض الكورسات */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-5">
//         {filteredPlaylists.map((course, idx) => (
//           <div
//             key={idx}
//             className="bg-[#FEFEFF] p-1  rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer w-[85%]"
//           >
//             <img
//               src={course.image}
//               alt={course.name}
//               className="w-full h-40 object-cover rounded-xl"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-bold mb-2 text-text-1">{course.name}</h3>
//               <p className="text-text-2 text-sm">{course.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React, { useState, useRef, useEffect } from "react";
// import { playlists } from "../../../dummy-data/playlist";
// import { Link } from "react-router-dom";

// export default function Academy() {
//   const [selectedCategory, setSelectedCategory] = useState("الكل");
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // استخراج جميع الفئات بدون تكرار
//   const categories = ["الكل", ...new Set(playlists.map((p) => p.category.name))];

//   // فلترة الكورسات
//   const filteredPlaylists =
//     selectedCategory === "الكل"
//       ? playlists
//       : playlists.filter((p) => p.category.name === selectedCategory);

//   // إغلاق القائمة عند النقر خارجها
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
//     <div className="my-32" dir="rtl">
//       {/* Container يحدد نفس عرض الـ Navbar */}
//       <div className="w-[90%] mx-auto">
//         {/* Dropdown الفلترة */}
//         <div
//           className="mb-8 w-[90%] mx-auto sm:w-full sm:max-w-96 sm:mx-0"
//           ref={dropdownRef}
//         >
//           <div
//             onClick={() => setIsOpen(!isOpen)}
//             className="bg-[#F3EFFD] border border-gray-200 rounded-3xl cursor-pointer overflow-hidden transition-all duration-300"
//             style={{
//               height: isOpen ? `${(categories.length + 1) * 48}px` : "48px",
//             }}
//           >
//             <div className="px-6 py-3 flex justify-between items-center">
//               <span className="text-[#362963]">
//                 {selectedCategory || (
//                   <span className="text-text-2">الرجاء تحديد اختيار</span>
//                 )}
//               </span>
//               <span className="text-[#7E60E2]">{isOpen ? "▲" : "▼"}</span>
//             </div>

//             {isOpen && (
//               <div className="flex flex-col">
//                 {categories.map((cat, index) => (
//                   <div
//                     key={index}
//                     onClick={() => {
//                       setSelectedCategory(cat);
//                       setIsOpen(false);
//                     }}
//                     className={`px-6 py-3 text-[#362963] hover:bg-gray-200 ${
//                       selectedCategory === cat ? "bg-gray-200" : ""
//                     }`}
//                   >
//                     {cat}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* عرض الكورسات */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-5">
//           {filteredPlaylists.map((course) => (
//             <Link
//               to={`/playlist/${course.id}`}
//               key={course.id}
//               className="block"
//             >
//               <div className="bg-[#FEFEFF] p-1 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer w-[90%] sm:w-full mx-auto">
//                 <img
//                   src={course.image}
//                   alt={course.name}
//                   className="w-full h-40 object-cover rounded-xl"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-bold mb-2 text-text-1">
//                     {course.name}
//                   </h3>
//                   <p className="text-text-2 text-sm leading-[1.75]">
//                     {course.description}
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {filteredPlaylists.length === 0 && (
//           <div className="text-center py-12">
//             <h3 className="text-xl font-medium text-gray-900">
//               لا توجد دورات متاحة في هذه الفئة
//             </h3>
//             <p className="text-gray-600 mt-2">جرب اختيار فئة أخرى</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



// import React, { useState, useRef, useEffect, useCallback } from "react";
// import { Link } from "react-router-dom";
// // اضبط هذا المسار إذا كان http.services في مكان آخر داخل مشروعك
// import { GET } from "../../services/http.service";
// import CourseImage from "../../assets/img-card.svg"


// export default function Academy() {
//   const [courses, setCourses] = useState([]); // العناصر المحمّلة من الخادم
//   const [categories, setCategories] = useState(["الكل"]); // الفئات المحمّلة من endpoint منفصل
//   const [selectedCategory, setSelectedCategory] = useState("الكل");
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // pagination / lazy loading
//   const [limit] = useState(20); // القيمة الافتراضية 20 (لا توجد قائمة لتغييرها الآن)
//   const [offset, setOffset] = useState(0); // عدد العناصر المتجاوزة
//   const [isLoading, setIsLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   const [error, setError] = useState(null);

//   const sentinelRef = useRef(null);

//   // تطبيع عنصر الخادم إلى الشكل الذي تستخدمه الواجهة
//   const normalizeCourse = (item) => ({
//     id: item.id,
//     name: item.name,
//     description: item.description,
//     image: item.image,
//     category: {
//       id: item.category?.id ?? null,
//       name: item.category?.name ?? "",
//     },
//     videos: item.videos ?? [],
//     raw: item,
//   });

//   // خريطة اسم الفئة -> id (إذا كانت متاحة) من القائمة المحمّلة من الخادم
//   const categoryMap = categories.reduce((acc, c) => {
//     if (typeof c === "object" && c.name) {
//       acc[c.name] = c.id;
//     }
//     return acc;
//   }, {});

//   // جلب الفئات من endpoint مخصص
//   const fetchCategories = useCallback(async () => {
//     try {
//       const resp = await GET("categories");
//       const body = resp.data || {};
//       const items = (body.data && body.data[0]) || [];

//       // نضيف "الكل" كبداية
//       const normalized = ["الكل", ...items.map((cat) => ({ id: cat.id, name: cat.name }))];

//       setCategories(normalized);
//     } catch (err) {
//       console.error("Error fetching categories:", err);
//     }
//   }, []);

//   // جلب صفحة من الخادم
//   const fetchPage = useCallback(
//     async (pageOffset = 0, append = true) => {
//       if (isLoading) return;
//       setIsLoading(true);
//       setError(null);

//       try {
//         const params = [`limit=${limit}`, `offset=${pageOffset}`];

//         if (selectedCategory && selectedCategory !== "الكل") {
//           const catId = categoryMap[selectedCategory];
//           if (catId) params.push(`category_id=${catId}`);
//           else params.push(`category=${encodeURIComponent(selectedCategory)}`);
//         }

//         const apiPath = `academy?${params.join("&")}`;
//         const resp = await GET(apiPath);
//         const body = resp.data || {};
//         const items = body.data || [];

//         const normalized = items.map(normalizeCourse);

//         setCourses((prev) => (append ? [...prev, ...normalized] : normalized));

//         // تحديث offset بشكل صحيح
//         if (append) {
//           setOffset((prev) => prev + items.length);
//         } else {
//           setOffset(items.length);
//         }

//         // ضبط hasMore
//         if (items.length < limit) setHasMore(false);
//         else setHasMore(true);
//       } catch (err) {
//         console.error("Error fetching academy:", err);
//         setError(err?.message || "فشل في جلب الدورات");
//       } finally {
//         setIsLoading(false);
//       }
//     },
//     [isLoading, limit, selectedCategory, categoryMap]
//   );

//   // تحميل أول صفحة عند التركيب أو عند تغيير الفئة -> إعادة ضبط وتحميل من البداية
//   useEffect(() => {
//     setCourses([]);
//     setOffset(0);
//     setHasMore(true);
//     fetchPage(0, false);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selectedCategory]);

//   // تحميل الفئات عند أول تركيب
//   useEffect(() => {
//     fetchCategories();
//   }, [fetchCategories]);

//   // IntersectionObserver للتحميل التلقائي عند الوصول للنهاية
//   useEffect(() => {
//     if (!sentinelRef.current) return;
//     if (!hasMore) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           fetchPage(offset, true);
//         }
//       },
//       { root: null, rootMargin: "200px", threshold: 0.1 }
//     );

//     observer.observe(sentinelRef.current);

//     return () => observer.disconnect();
//   }, [fetchPage, offset, hasMore]);

//   // إغلاق قائمة الفئات عند النقر خارجها (كما في التصميم الأصلي)
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // فلترة client-side بسيطة لعرض ما تم تحميله (الخادم أرجع النتائج حسب الفئة)
//   const filteredPlaylists =
//     selectedCategory === "الكل"
//       ? courses
//       : courses.filter((p) => p.category.name === selectedCategory);

//   return (
//     <div className="my-32" dir="rtl">
//       <div className="w-[90%] mx-auto">
//         {/* الفئة (dropdown) — التصميم لم يتغير باستثناء أن الفئات أصبحت من endpoint مخصص */}
//         <div className="mb-8 w-[90%] mx-auto sm:w-full sm:max-w-96 sm:mx-0 flex items-center gap-4" ref={dropdownRef}>
//           <div
//             onClick={() => setIsOpen(!isOpen)}
//             className="bg-[#F3EFFD] border border-gray-200 rounded-3xl cursor-pointer overflow-hidden transition-all duration-300 flex-1"
//             style={{
//               height: isOpen ? `${(categories.length + 1) * 48}px` : "48px",
//             }}
//           >
//             <div className="px-6 py-3 flex justify-between items-center">
//               <span className="text-[#362963]">
//                 {selectedCategory || <span className="text-text-2">الرجاء تحديد اختيار</span>}
//               </span>
//               <span className="text-[#7E60E2]">{isOpen ? "▲" : "▼"}</span>
//             </div>

//             {isOpen && (
//               <div className="flex flex-col">
//                 {categories.map((cat, index) => (
//                   <div
//                     key={index}
//                     onClick={() => {
//                       if (typeof cat === "string") {
//                         setSelectedCategory(cat);
//                       } else {
//                         setSelectedCategory(cat.name);
//                       }
//                       setIsOpen(false);
//                     }}
//                     className={`px-6 py-3 text-[#362963] hover:bg-gray-200 ${
//                       selectedCategory === (typeof cat === "string" ? cat : cat.name) ? "bg-gray-200" : ""
//                     }`}
//                   >
//                     {typeof cat === "string" ? cat : cat.name}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* عرض الكورسات (التصميم لم يتغير) */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-5">
//           {filteredPlaylists.map((course) => (
//             <Link to={`/playlist/${course.id}`} key={course.id} className="block">
//               <div className="bg-[#FEFEFF] p-1 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer w-[90%] sm:w-full mx-auto">
//                 <img src={course.image} alt={course.name} className="w-full h-40 object-cover rounded-xl" />
//                 <div className="p-4">
//                   <h3 className="text-lg font-bold mb-2 text-text-1">{course.name}</h3>
//                   <p className="text-text-2 text-sm leading-[1.75]">{course.description}</p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {filteredPlaylists.length === 0 && !isLoading && (
//           <div className="text-center py-12">
//             <h3 className="text-xl font-medium text-gray-900">لا توجد دورات متاحة في هذه الفئة</h3>
//             <p className="text-gray-600 mt-2">جرب اختيار فئة أخرى</p>
//           </div>
//         )}

//         {error && <div className="text-center py-6 text-red-600">حدث خطأ أثناء جلب البيانات: {String(error)}</div>}

//         {/* مؤشر تحميل */}
//         <div className="mt-8 flex flex-col items-center gap-4">
//           {isLoading && <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"></div>}
//           {!hasMore && <div className="text-gray-500">لا توجد المزيد من الدورات</div>}

//           {/* sentinel للمراقبة (يؤدي للتحميل التلقائي عند الوصول له) */}
//           <div ref={sentinelRef} style={{ width: "100%", height: "1px" }} />
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { GET } from "../../services/http.service";
import CourseImage from "../../assets/img-card.svg";

// دالة التحقق من صلاحية الصورة
const checkImage = (url) =>
  new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(url);
    img.onerror = () => resolve(CourseImage);
  });

export default function Academy() {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState(["الكل"]);
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [limit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const sentinelRef = useRef(null);

  // تطبيع بيانات الدورة مع التحقق من الصورة
  const normalizeCourse = async (item) => {
    const validImage = await checkImage(item.image);
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      image: item.image,
      displayImage: validImage,
      category: {
        id: item.category?.id ?? null,
        name: item.category?.name ?? "",
      },
      videos: item.videos ?? [],
      raw: item,
    };
  };

  const categoryMap = categories.reduce((acc, c) => {
    if (typeof c === "object" && c.name) {
      acc[c.name] = c.id;
    }
    return acc;
  }, {});

  const fetchCategories = useCallback(async () => {
    try {
      const resp = await GET("categories");
      const body = resp.data || {};
      const items = (body.data && body.data[0]) || [];
      const normalized = ["الكل", ...items.map((cat) => ({ id: cat.id, name: cat.name }))];
      setCategories(normalized);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  }, []);

  const fetchPage = useCallback(
    async (pageOffset = 0, append = true) => {
      if (isLoading) return;
      setIsLoading(true);
      setError(null);

      try {
        const params = [`limit=${limit}`, `offset=${pageOffset}`];

        if (selectedCategory && selectedCategory !== "الكل") {
          const catId = categoryMap[selectedCategory];
          if (catId) params.push(`category_id=${catId}`);
          else params.push(`category=${encodeURIComponent(selectedCategory)}`);
        }

        const apiPath = `academy?${params.join("&")}`;
        const resp = await GET(apiPath);
        const body = resp.data || {};
        const items = body.data || [];

        // تطبيع وتحضير البيانات مع fallback للصورة
        const normalized = await Promise.all(items.map(normalizeCourse));

        setCourses((prev) => (append ? [...prev, ...normalized] : normalized));

        if (append) {
          setOffset((prev) => prev + items.length);
        } else {
          setOffset(items.length);
        }

        setHasMore(items.length >= limit);
      } catch (err) {
        console.error("Error fetching academy:", err);
        setError(err?.message || "فشل في جلب الدورات");
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, limit, selectedCategory, categoryMap]
  );

  useEffect(() => {
    setCourses([]);
    setOffset(0);
    setHasMore(true);
    fetchPage(0, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    if (!sentinelRef.current) return;
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchPage(offset, true);
        }
      },
      { root: null, rootMargin: "200px", threshold: 0.1 }
    );

    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, [fetchPage, offset, hasMore]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredPlaylists =
    selectedCategory === "الكل"
      ? courses
      : courses.filter((p) => p.category.name === selectedCategory);

  return (
    <div className="my-32" dir="rtl">
      <div className="w-[90%] mx-auto">
        {/* الفئة (dropdown) */}
        <div className="mb-8 w-[90%] mx-auto sm:w-full sm:max-w-96 sm:mx-0 flex items-center gap-4" ref={dropdownRef}>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#F3EFFD] border border-gray-200 rounded-3xl cursor-pointer overflow-hidden transition-all duration-300 flex-1"
            style={{
              height: isOpen ? `${(categories.length + 1) * 48}px` : "48px",
            }}
          >
            <div className="px-6 py-3 flex justify-between items-center">
              <span className="text-[#362963]">
                {selectedCategory || <span className="text-text-2">الرجاء تحديد اختيار</span>}
              </span>
              <span className="text-[#7E60E2]">{isOpen ? "▲" : "▼"}</span>
            </div>

            {isOpen && (
              <div className="flex flex-col">
                {categories.map((cat, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      if (typeof cat === "string") {
                        setSelectedCategory(cat);
                      } else {
                        setSelectedCategory(cat.name);
                      }
                      setIsOpen(false);
                    }}
                    className={`px-6 py-3 text-[#362963] hover:bg-gray-200 ${
                      selectedCategory === (typeof cat === "string" ? cat : cat.name) ? "bg-gray-200" : ""
                    }`}
                  >
                    {typeof cat === "string" ? cat : cat.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* عرض الكورسات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-5">
          {filteredPlaylists.map((course) => (
            <Link to={`/playlist/${course.id}`} key={course.id} className="block">
              <div className="bg-[#FEFEFF] p-1 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer w-[90%] sm:w-full mx-auto">
                <img
                  src={course.displayImage}
                  alt={course.name}
                  className="w-full h-40 object-cover rounded-xl"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-text-1">{course.name}</h3>
                  <p className="text-text-2 text-sm leading-[1.75]">{course.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPlaylists.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900">لا توجد دورات متاحة في هذه الفئة</h3>
            <p className="text-gray-600 mt-2">جرب اختيار فئة أخرى</p>
          </div>
        )}

        {error && <div className="text-center py-6 text-red-600">حدث خطأ أثناء جلب البيانات: {String(error)}</div>}

        {/* مؤشر تحميل */}
        <div className="mt-8 flex flex-col items-center gap-4">
          {isLoading && (
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"></div>
          )}
          {!hasMore && <div className="text-gray-500">لا توجد المزيد من الدورات</div>}
          <div ref={sentinelRef} style={{ width: "100%", height: "1px" }} />
        </div>
      </div>
    </div>
  );
}
