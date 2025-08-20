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


import React, { useState, useRef, useEffect } from "react";
import { playlists } from "../../../dummy-data/playlist";
import { Link } from "react-router-dom";

export default function Academy() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // استخراج جميع الفئات بدون تكرار
  const categories = ["الكل", ...new Set(playlists.map((p) => p.category.name))];

  // فلترة الكورسات
  const filteredPlaylists =
    selectedCategory === "الكل"
      ? playlists
      : playlists.filter((p) => p.category.name === selectedCategory);

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

  return (
    <div className="my-32" dir="rtl">
      {/* Container يحدد نفس عرض الـ Navbar */}
      <div className="w-[90%] mx-auto">
        {/* Dropdown الفلترة */}
        <div
          className="mb-8 w-[90%] mx-auto sm:w-full sm:max-w-96 sm:mx-0"
          ref={dropdownRef}
        >
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#F3EFFD] border border-gray-200 rounded-3xl cursor-pointer overflow-hidden transition-all duration-300"
            style={{
              height: isOpen ? `${(categories.length + 1) * 48}px` : "48px",
            }}
          >
            <div className="px-6 py-3 flex justify-between items-center">
              <span className="text-[#362963]">
                {selectedCategory || (
                  <span className="text-text-2">الرجاء تحديد اختيار</span>
                )}
              </span>
              <span className="text-[#7E60E2]">{isOpen ? "▲" : "▼"}</span>
            </div>

            {isOpen && (
              <div className="flex flex-col">
                {categories.map((cat, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsOpen(false);
                    }}
                    className={`px-6 py-3 text-[#362963] hover:bg-gray-200 ${
                      selectedCategory === cat ? "bg-gray-200" : ""
                    }`}
                  >
                    {cat}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* عرض الكورسات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-5">
          {filteredPlaylists.map((course) => (
            <Link
              to={`/playlist/${course.id}`}
              key={course.id}
              className="block"
            >
              <div className="bg-[#FEFEFF] p-1 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer w-[90%] sm:w-full mx-auto">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-40 object-cover rounded-xl"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-text-1">
                    {course.name}
                  </h3>
                  <p className="text-text-2 text-sm leading-[1.75]">
                    {course.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPlaylists.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900">
              لا توجد دورات متاحة في هذه الفئة
            </h3>
            <p className="text-gray-600 mt-2">جرب اختيار فئة أخرى</p>
          </div>
        )}
      </div>
    </div>
  );
}






// {filteredPlaylists.map((course) => (
//   <Link 
//       to={`${PathConstants.PlaylistDetails.replace(':id', course.id)}`}
//       key={course.id}
//       className="block"
//   >
//       <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
//           {/* بقية كود الكارد */}
//       </div>
//   </Link>
// ))}