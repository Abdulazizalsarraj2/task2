// import React from "react";
// import PortfolioImage from "../../assets/portfolio-img.svg";

// // مصفوفة وهمية للأعمال
// const projects = [
//   {
//     id: 1,
//     title: "مشروع زاد العقاري",
//     description:
//       "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
//     image: PortfolioImage,
//     link: "https://example.com/project1",
//   },
//   {
//     id: 2,
//     title: "مشروع زاد العقاري",
//     description:
//       "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
//     image: PortfolioImage,
//     link: "https://example.com/project2",
//   },
//   {
//     id: 3,
//     title: "مشروع زاد العقاري",
//     description:
//       "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
//     image: PortfolioImage,
//     link: "https://example.com/project3",
//   },
//   {
//     id: 4,
//     title: "مشروع زاد العقاري",
//     description:
//       "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
//     image: PortfolioImage,
//     link: "https://example.com/project4",
//   },
//   {
//     id: 5,
//     title: "مشروع زاد العقاري",
//     description:
//       "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
//     image: PortfolioImage,
//     link: "https://example.com/project5",
//   },
//   {
//     id: 6,
//     title: "مشروع زاد العقاري",
//     description:
//       "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
//     image: PortfolioImage,
//     link: "https://example.com/project6",
//   },
// ];

// export default function Portfolio() {
//   return (
//     <section className="relative flex flex-col items-center justify-center w-full mb-40 mt-30">
//       <div className="w-[90%] max-w-7xl mx-auto px-2 sm:px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
//             >
//               {/* صورة المشروع */}
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-64 object-cover p-3 rounded-3xl"
//               />

//               {/* محتوى الكارت */}
//               <div className="p-4 flex flex-col flex-grow">
//                 <h3 className="text-lg font-bold text-text-1 mb-2 text-right">
//                   {project.title}
//                 </h3>
//                 <p className="text-sm text-text-2 text-right flex-grow leading-[1.75]">
//                   {project.description}
//                 </p>

//                 <div className="mt-5 flex justify-center">
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-fourth text-white px-18 py-2 leading-relaxed rounded-xl shadow hover:bg-[#6A35FF] transition-all"
//                   >
//                     عرض المشروع
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




// npm install react-slick slick-carousel

// gemini

// import React from "react";
// import Slider from "react-slick";

// // استيراد ملفات CSS الخاصة بالسلايدر
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // استيراد الصورة المستخدمة
// import PortfolioImage from "../../assets/portfolio-img.svg";

// // تعديل مصفوفة المشاريع لتشمل وسائط متعددة
// const projects = [
//   {
//     id: 1,
//     title: "مشروع متعدد الوسائط",
//     description:
//       "هذا المشروع يعرض الآن صورًا وفيديو ومقطعًا صوتيًا في سلايدر تفاعلي.",
//     media: [
//       {
//         type: "image",
//         src: PortfolioImage,
//       },
//       {
//         type: "video",
//         src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//       },
//        {
//         type: "image",
//         src: PortfolioImage,
//       },
//       {
//         type: "audio",
//         src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//       },
//     ],
//     link: "https://example.com/project1",
//   },
//   {
//     id: 2,
//     title: "مشروع يعرض صور فقط",
//     description:
//       "هذا المشروع يحتوي على سلايدر يعرض مجموعة من الصور بشكل تلقائي.",
//     media: [
//        {
//         type: "image",
//         src: PortfolioImage,
//       },
//        {
//         type: "image",
//         src: PortfolioImage,
//       },
//        {
//         type: "image",
//         src: PortfolioImage,
//       },
//     ],
//     link: "https://example.com/project2",
//   },
//   {
//     id: 3,
//     title: "مشروع فيديو وصورة",
//     description:
//       "هنا قمنا بدمج مقطع فيديو مع صورة في نفس السلايدر لإثراء المحتوى.",
//     media: [
//       {
//         type: "video",
//         src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//       },
//        {
//         type: "image",
//         src: PortfolioImage,
//       },
//     ],
//     link: "https://example.com/project3",
//   },
//     {
//     id: 4,
//     title: "مشروع زاد العقاري",
//     description:
//       "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
//     media: [
//         {
//         type: "image",
//         src: PortfolioImage,
//       },
//     ],
//     link: "https://example.com/project4",
//   },
//   {
//     id: 5,
//     title: "مشروع صوتي",
//     description:
//       "مشروع يركز على المحتوى الصوتي مع تصميم جذاب وتجربة استماع فريدة.",
//     media: [
//        {
//         type: "audio",
//         src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
//       },
//        {
//         type: "audio",
//         src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
//       },
//     ],
//     link: "https://example.com/project5",
//   },
//     {
//     id: 6,
//     title: "مشروع فيديو",
//     description:
//       "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
//     media: [
//       {
//         type: "video",
//         src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//       },
//     ],
//     link: "https://example.com/project6",
//   },
// ];

// // مكون لعرض الوسائط المتعددة داخل السلايدر
// const MediaSlider = ({ media }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   return (
//     <div className="w-full h-64 p-3">
//       <Slider {...settings}>
//         {media.map((item, index) => (
//           <div key={index} className="w-full h-full">
//             {item.type === "image" && (
//               <img
//                 src={item.src}
//                 alt={`media-${index}`}
//                 className="w-full h-full object-cover rounded-xl"
//               />
//             )}
//             {item.type === "video" && (
//               <video
//                 src={item.src}
//                 controls
//                 className="w-full h-full object-cover rounded-xl"
//               />
//             )}
//             {item.type === "audio" && (
//                 <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 rounded-xl p-4">
//                    <h4 className="text-lg font-semibold mb-4 text-text-1">مقطع صوتي</h4>
//                    <audio controls className="w-full">
//                         <source src={item.src} type="audio/mpeg" />
//                         Your browser does not support the audio element.
//                    </audio>
//                 </div>
//             )}
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };


// export default function Portfolio() {
//   return (
//     <section className="relative flex flex-col items-center justify-center w-full mb-40 mt-30">
//       <div className="w-[90%] max-w-7xl mx-auto px-2 sm:px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
//             >
//               {/* تعديل: استخدام مكون السلايدر هنا */}
//               <MediaSlider media={project.media} />

//               {/* محتوى الكارت */}
//               <div className="p-4 flex flex-col flex-grow">
//                 <h3 className="text-lg font-bold text-text-1 mb-2 text-right">
//                   {project.title}
//                 </h3>
//                 <p className="text-sm text-text-2 text-right flex-grow leading-[1.75]">
//                   {project.description}
//                 </p>

//                 <div className="mt-5 flex justify-center">
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-fourth text-white px-18 py-2 leading-relaxed rounded-xl shadow hover:bg-[#6A35FF] transition-all"
//                   >
//                     عرض المشروع
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


//chat

// import React, { useRef, useEffect } from "react";
// import Slider from "react-slick";
// import PortfolioImage from "../../assets/portfolio-img.svg";

// // slick-carousel CSS (مطلوب)
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// /**
//  * مصفوفة الأعمال: الآن كل مشروع يملك حقل media (مصفوفة) بدل image.
//  * type: "image" | "video" | "audio"
//  * image يستخدم نفس PortfolioImage كما طلبت.
//  * الفيديو يستخدم الرابط الاختباري: https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
//  * الصوت يستخدم رابط عملي: https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3
//  */
// const projects = [
//   {
//     id: 1,
//     title: "مشروع زاد العقاري",
//     description:
//       "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
//     media: [
//       { type: "image", src: PortfolioImage, alt: "مشروع زاد - صورة 1" },
//       { type: "image", src: PortfolioImage, alt: "مشروع زاد - صورة 2" },
//     ],
//     link: "https://example.com/project1",
//   },
//   {
//     id: 2,
//     title: "مشروع زاد العقاري",
//     description:
//       "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
//     media: [
//       { type: "image", src: PortfolioImage, alt: "مشروع زاد - صورة" },
//       { type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
//     ],
//     link: "https://example.com/project2",
//   },
//   {
//     id: 3,
//     title: "مشروع زاد العقاري",
//     description:
//       "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
//     media: [
//       { type: "image", src: PortfolioImage, alt: "مشروع زاد - صورة 1" },
//       { type: "image", src: PortfolioImage, alt: "مشروع زاد - صورة 2" },
//       { type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
//       { type: "audio", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
//     ],
//     link: "https://example.com/project3",
//   },
//   {
//     id: 4,
//     title: "مشروع زاد العقاري",
//     description:
//       "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لنبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
//     media: [
//       { type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
//     ],
//     link: "https://example.com/project4",
//   },
//   {
//     id: 5,
//     title: "مشروع زاد العقاري",
//     description:
//       "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لنبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
//     media: [{ type: "image", src: PortfolioImage, alt: "مشروع زاد - صورة" }],
//     link: "https://example.com/project5",
//   },
//   {
//     id: 6,
//     title: "مشروع زاد العقاري",
//     description:
//       "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لنبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
//     media: [{ type: "audio", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" }],
//     link: "https://example.com/project6",
//   },
// ];

// /**
//  * MediaSlider component
//  * - media: array of media objects
//  * - يحافظ على حجم العرض/الارتفاع كما في الصورة الأصلية: h-64 و classes المشابهة
//  * - يتعامل مع إيقاف الصوت/الفيديو عند الانتقال بين الشرائح
//  */
// function MediaSlider({ media = [], uniqueId }) {
//   const sliderRef = useRef(null);
//   const containerRef = useRef(null);

//   const settings = {
//     dots: true,
//     arrows: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     adaptiveHeight: false,
//     rtl: true, // لأن النص عربي، لكن إن أردت تعطيله ضع false
//     beforeChange: (oldIndex, newIndex) => {
//       // قبل التغيير: نوقف أي ميديا تعمل داخل السلايدر هذا
//       if (!containerRef.current) return;
//       const allVideos = containerRef.current.querySelectorAll("video");
//       const allAudios = containerRef.current.querySelectorAll("audio");
//       allVideos.forEach((v) => {
//         try {
//           v.pause();
//           v.currentTime = 0;
//         } catch (e) {}
//       });
//       allAudios.forEach((a) => {
//         try {
//           a.pause();
//           a.currentTime = 0;
//         } catch (e) {}
//       });
//     },
//     afterChange: (current) => {
//       // نترك المستخدم يشغّل الفيديو/الصوت بنفسه (لا نعتمد التشغيل التلقائي للصوت).
//       // لكن إن رغبت بتشغيل الفيديو موقتا بدون صوت عند ظهوره، يمكن تفعيل الأسطر أدناه.
//       if (!containerRef.current) return;
//       // مثال: تشغيل الفيديو في الشريحة الحالية بشكل صامت (مُعطَّل افتراضياً)
//       /*
//       const activeSlide = containerRef.current.querySelector(`[data-index="${current}"]`);
//       if (activeSlide) {
//         const vid = activeSlide.querySelector("video");
//         if (vid) {
//           vid.muted = true;
//           vid.play().catch(()=>{});
//         }
//       }
//       */
//     },
//   };

//   // عند إلغاء التركيب، نتأكد من إيقاف أي ميديا
//   useEffect(() => {
//     return () => {
//       if (!containerRef.current) return;
//       const allVideos = containerRef.current.querySelectorAll("video");
//       const allAudios = containerRef.current.querySelectorAll("audio");
//       allVideos.forEach((v) => {
//         try {
//           v.pause();
//         } catch (e) {}
//       });
//       allAudios.forEach((a) => {
//         try {
//           a.pause();
//         } catch (e) {}
//       });
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="w-full h-64 p-3">
//       <Slider ref={sliderRef} {...settings}>
//         {media.map((m, idx) => {
//           const key = `${uniqueId}-media-${idx}-${m.type}`;
//           if (m.type === "image") {
//             return (
//               <div key={key} className="flex items-center justify-center">
//                 <img
//                   src={m.src}
//                   alt={m.alt || "project media"}
//                   className="w-full h-64 object-cover rounded-3xl"
//                   draggable={false}
//                 />
//               </div>
//             );
//           }

//           if (m.type === "video") {
//             return (
//               <div key={key} className="flex items-center justify-center">
//                 <video
//                   src={m.src}
//                   controls
//                   playsInline
//                   className="w-full h-64 object-cover rounded-3xl"
//                   // muted // لا نقوم بصبّ الصوت صامتاً افتراضياً — يمكن إضافة muted إن أردت السماح بال autoplay
//                 />
//               </div>
//             );
//           }

//           if (m.type === "audio") {
//             return (
//               <div
//                 key={key}
//                 className="w-full h-64 flex items-center justify-center rounded-3xl bg-transparent"
//                 style={{ minHeight: 160 }}
//               >
//                 {/* نعرض مشغل صوت مركزي داخل نفس الصندوق */}
//                 <div className="w-full max-w-xl px-4">
//                   <audio src={m.src} controls className="w-full" />
//                 </div>
//               </div>
//             );
//           }

//           // نوع غير معروف — نعرض رسالة احتياطية
//           return (
//             <div key={key} className="flex items-center justify-center w-full h-64">
//               <p>نوع وسائط غير مدعوم</p>
//             </div>
//           );
//         })}
//       </Slider>
//     </div>
//   );
// }

// export default function Portfolio() {
//   return (
//     <section className="relative flex flex-col items-center justify-center w-full mb-40 mt-30">
//       <div className="w-[90%] max-w-7xl mx-auto px-2 sm:px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
//             >
//               {/* slider الوسائط داخل نفس الحد كما كانت الصورة سابقاً */}
//               <MediaSlider media={project.media} uniqueId={`project-${project.id}`} />

//               {/* محتوى الكارت */}
//               <div className="p-4 flex flex-col flex-grow">
//                 <h3 className="text-lg font-bold text-text-1 mb-2 text-right">
//                   {project.title}
//                 </h3>
//                 <p className="text-sm text-text-2 text-right flex-grow leading-[1.75]">
//                   {project.description}
//                 </p>

//                 <div className="mt-5 flex justify-center">
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-fourth text-white px-18 py-2 leading-relaxed rounded-xl shadow hover:bg-[#6A35FF] transition-all"
//                   >
//                     عرض المشروع
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// deepseek
// import React, { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import environment from "../../environment";
// import PortfolioImage from "../../assets/project-img.svg";
// // ملاحظة: يتم حذف البيانات الثابتة الآن واستبدالها بالبيانات القادمة من API.

// // مكون عرض الوسائط بناءً على النوع
// const MediaItem = ({ item }) => {
//   if (item.type === "image") {
//     return (
//       <div className="h-64 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
//         <img
//           src={item.path}
//           alt={item.caption}
//           className="w-full h-full object-cover"
//         />
//       </div>
//     );
//   } else if (item.type === "video") {
//     return (
//       <div className="h-64 bg-gray-900 rounded-xl overflow-hidden">
//         <video className="w-full h-full object-cover" controls>
//           <source src={item.path} type="video/mp4" />
//           متصفحك لا يدعم تشغيل الفيديو.
//         </video>
//       </div>
//     );
//   } else if (item.type === "audio") {
//     return (
//       <div className="h-64 bg-gray-100 flex items-center justify-center rounded-xl">
//         <div className="w-full p-4">
//           <div className="text-center mb-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-12 w-12 mx-auto text-gray-700"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
//               />
//             </svg>
//             <p className="text-gray-700 mt-2">{item.caption}</p>
//           </div>
//           <audio controls className="w-full">
//             <source src={item.path} type="audio/mp3" />
//             متصفحك لا يدعم تشغيل الصوت.
//           </audio>
//         </div>
//       </div>
//     );
//   }
//   return null;
// };

// // Slider مكون
// const MediaSlider = ({ items }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     beforeChange: (current, next) => setCurrentSlide(next),
//     appendDots: (dots) => (
//       <div className="mb-2">
//         <ul className="flex justify-center space-x-1"> {dots} </ul>
//       </div>
//     ),
//     customPaging: (i) => (
//       <div
//         className={`w-2 h-2 rounded-full ${
//           i === currentSlide ? "bg-fourth" : "bg-gray-300"
//         }`}
//       ></div>
//     ),
//   };

//   return (
//     <div className="relative p-3">
//       <Slider {...settings}>
//         {items.map((item, index) => (
//           <div key={index}>
//             <MediaItem item={item} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// // الكومبوننت الرئيسي
// export default function Portfolio() {
//   const [projects, setProjects] = useState([]);
//   const [uniqueServices, setUniqueServices] = useState([]);
//   const [selectedServiceId, setSelectedServiceId] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch(`${environment.API_URL}/projects`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const result = await response.json();
//         setProjects(result.data);

//         // استخراج الخدمات الفريدة من البيانات الجديدة
//         const services = [
//           ...new Map(result.data.map((p) => [p.service.id, p.service])).values(),
//         ];
//         setUniqueServices(services);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   // إغلاق الـ dropdown عند النقر خارجها
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const filteredProjects = selectedServiceId
//     ? projects.filter((p) => p.service.id === selectedServiceId)
//     : projects;

//   if (loading) {
//     return <div className="text-center mt-10">جاري تحميل المشاريع...</div>;
//   }

//   if (error) {
//     return <div className="text-center mt-10 text-red-500">حدث خطأ: {error}</div>;
//   }

//   return (
//     <section className="relative flex flex-col items-center justify-center w-full mb-40 mt-30" dir="rtl">
//       <div className="w-[90%] max-w-7xl mx-auto px-2 sm:px-4">
//         {/* Dropdown لتصفية الخدمات (بنفس مظهر Dropdown صفحة الأكاديمية) */}
//         <div className="mb-8 w-[90%] mx-auto sm:w-full sm:max-w-96 sm:mx-0" ref={dropdownRef}>
//           <div
//             onClick={() => setIsOpen(!isOpen)}
//             className="bg-[#F3EFFD] border border-gray-200 rounded-3xl cursor-pointer overflow-hidden transition-all duration-300"
//             style={{
//               height: isOpen ? `${(uniqueServices.length + 2) * 48}px` : "48px",
//             }}
//           >
//             <div className="px-6 py-3 flex justify-between items-center">
//               <span className="text-[#362963]">
//                 {selectedServiceId
//                   ? uniqueServices.find((s) => s.id === selectedServiceId)?.name
//                   : "كل الخدمات"}
//               </span>
//               <span className="text-[#7E60E2]">{isOpen ? "▲" : "▼"}</span>
//             </div>

//             {isOpen && (
//               <div className="flex flex-col">
//                 <div
//                   onClick={() => {
//                     setSelectedServiceId(null);
//                     setIsOpen(false);
//                   }}
//                   className={`px-6 py-3 text-[#362963] hover:bg-gray-200 ${
//                     selectedServiceId === null ? "bg-gray-200" : ""
//                   }`}
//                 >
//                   كل الخدمات
//                 </div>
//                 {uniqueServices.map((service) => (
//                   <div
//                     key={service.id}
//                     onClick={() => {
//                       setSelectedServiceId(service.id);
//                       setIsOpen(false);
//                     }}
//                     className={`px-6 py-3 text-[#362963] hover:bg-gray-200 ${
//                       selectedServiceId === service.id ? "bg-gray-200" : ""
//                     }`}
//                   >
//                     {service.name}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* بطاقات المشاريع */}
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProjects.map((project) => {
//             const mediaToShow =
//               project.images.length > 0
//                 ? project.images
//                 : project.videos.length > 0
//                 ? project.videos
//                 : project.audios;

//             return (
//               <div
//                 key={project.id}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105"
//               >
//                 <MediaSlider items={mediaToShow} />

//                 <div className="p-4 flex flex-col flex-grow">
//                   <h3 className="text-lg font-bold text-text-1 mb-2 text-right">
//                     {project.name}
//                   </h3>
//                   <p className="text-sm text-text-2 text-right flex-grow leading-[1.75]">
//                     {project.description}
//                   </p>
//                   <div className="mt-5 flex justify-center">
//                     <a
//                       href={project.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-fourth text-white px-6 py-2 leading-relaxed rounded-xl shadow hover:bg-[#6A35FF] transition-all"
//                     >
//                       عرض المشروع
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
      
//     </section>
//   );
// }


import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import environment from "../../environment";
import PortfolioImage from "../../assets/project-img.svg";

// مكون عرض الوسائط بناءً على النوع
const MediaItem = ({ item }) => {
  const [imageSrc, setImageSrc] = useState(item.path);

  useEffect(() => {
    if (item.type === "image") {
      const img = new Image();
      img.src = item.path;
      img.onload = () => setImageSrc(item.path);
      img.onerror = () => setImageSrc(PortfolioImage);
    }
  }, [item]);

  if (item.type === "image") {
    return (
      <div className="h-64 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
        <img
          src={imageSrc}
          alt={item.caption}
          className="w-full h-full object-cover"
        />
      </div>
    );
  } else if (item.type === "video") {
    return (
      <div className="h-64 bg-gray-900 rounded-xl overflow-hidden">
        <video className="w-full h-full object-cover" controls>
          <source src={item.path} type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
      </div>
    );
  } else if (item.type === "audio") {
    return (
      <div className="h-64 bg-gray-100 flex items-center justify-center rounded-xl">
        <div className="w-full p-4">
          <div className="text-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              />
            </svg>
            <p className="text-gray-700 mt-2">{item.caption}</p>
          </div>
          <audio controls className="w-full">
            <source src={item.path} type="audio/mp3" />
            متصفحك لا يدعم تشغيل الصوت.
          </audio>
        </div>
      </div>
    );
  }
  return null;
};

// Slider مكون
const MediaSlider = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <div className="mb-2">
        <ul className="flex justify-center space-x-1"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-2 h-2 rounded-full ${
          i === currentSlide ? "bg-fourth" : "bg-gray-300"
        }`}
      ></div>
    ),
  };

  return (
    <div className="relative p-3">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <MediaItem item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// الكومبوننت الرئيسي
export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [uniqueServices, setUniqueServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${environment.API_URL}/projects`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setProjects(result.data);

        const services = [
          ...new Map(result.data.map((p) => [p.service.id, p.service])).values(),
        ];
        setUniqueServices(services);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredProjects = selectedServiceId
    ? projects.filter((p) => p.service.id === selectedServiceId)
    : projects;

  if (loading) {
    return <div className="text-center mt-10">جاري تحميل المشاريع...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">حدث خطأ: {error}</div>;
  }

  return (
    <section className="relative flex flex-col items-center justify-center w-full mb-40 mt-30" dir="rtl">
      <div className="w-[90%] max-w-7xl mx-auto px-2 sm:px-4">
        {/* Dropdown لتصفية الخدمات */}
        <div className="mb-8 w-[90%] mx-auto sm:w-full sm:max-w-96 sm:mx-0" ref={dropdownRef}>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#F3EFFD] border border-gray-200 rounded-3xl cursor-pointer overflow-hidden transition-all duration-300"
            style={{
              height: isOpen ? `${(uniqueServices.length + 2) * 48}px` : "48px",
            }}
          >
            <div className="px-6 py-3 flex justify-between items-center">
              <span className="text-[#362963]">
                {selectedServiceId
                  ? uniqueServices.find((s) => s.id === selectedServiceId)?.name
                  : "كل الأعمال"}
              </span>
              <span className="text-[#7E60E2]">{isOpen ? "▲" : "▼"}</span>
            </div>

            {isOpen && (
              <div className="flex flex-col">
                <div
                  onClick={() => {
                    setSelectedServiceId(null);
                    setIsOpen(false);
                  }}
                  className={`px-6 py-3 text-[#362963] hover:bg-gray-200 ${
                    selectedServiceId === null ? "bg-gray-200" : ""
                  }`}
                >
                 كل الأعمال
                </div>
                {uniqueServices.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => {
                      setSelectedServiceId(service.id);
                      setIsOpen(false);
                    }}
                    className={`px-6 py-3 text-[#362963] hover:bg-gray-200 ${
                      selectedServiceId === service.id ? "bg-gray-200" : ""
                    }`}
                  >
                    {service.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* بطاقات المشاريع */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const mediaToShow =
              project.images.length > 0
                ? project.images
                : project.videos.length > 0
                ? project.videos
                : project.audios;

            return (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105"
                >
                  <MediaSlider items={mediaToShow} />
  
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-text-1 mb-2 text-right">
                      {project.name}
                    </h3>
                    <p className="text-sm text-text-2 text-right flex-grow leading-[1.75]">
                      {project.description}
                    </p>
                    <div className="mt-5 flex justify-center">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-fourth text-white px-18 py-3 leading-relaxed rounded-xl shadow hover:bg-[#6A35FF] transition-all"
                      >
                        عرض المشروع
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  
