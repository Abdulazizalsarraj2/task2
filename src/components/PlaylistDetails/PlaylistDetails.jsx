// /** @format */

// import React, { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { playlists } from "../../../dummy-data/playlist";

// const PlaylistDetails = () => {
//   const { id } = useParams();
//   const playlistId = parseInt(id);
//   const playlist = playlists.find((p) => p.id === playlistId);

//   const [currentVideo, setCurrentVideo] = useState(playlist.videos[0]);

//   if (!playlist) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-800">الكورس غير موجود</h1>
//           <Link
//             to="/academy"
//             className="mt-4 inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
//           >
//             العودة للأكاديمية
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen my-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* القسم الأيسر - عرض الفيديو الرئيسي */}
//           <div className="lg:w-7/12">
//             <div className="bg-black aspect-video rounded-xl overflow-hidden shadow-lg">
//               <div className="w-full h-full flex items-center justify-center bg-gray-900">
//                 <div className="text-center text-white">
//                   <div className="text-4xl mb-2">▶</div>
//                   <p dir="rtl" className="text-xl">تشغيل: {currentVideo.title}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-12 bg-white p-6 rounded-xl drop-shadow-2xl">
//               <h1 dir="rtl" className="text-2xl font-bold text-text-1 mb-2">
//                 {currentVideo.title}
//               </h1>
//               <div dir="rtl" className="flex items-center text-gray-600 mb-4">
//                 <span className="bg-purple-200 text-text-3 px-2 py-1 rounded text-sm ml-3">
//                   {playlist.category.name}
//                 </span>
//                 <span className="text-text-2">{currentVideo.duration}</span>
//               </div>
//               <p dir="rtl" className="text-text-2 leading-relaxed">
//                 {currentVideo.description}
//               </p>
//             </div>
//           </div>

//           {/* القسم الأيمن - قائمة الفيديوهات */}
//           <div dir="rtl" className="lg:w-5/12">
//             <div className="bg-[#FEFEFE] rounded-xl shadow p-4">
//               <div className="flex flex items-center mb-6">
//                 {/* <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mr-3">
//                   <span className="text-purple-700 text-xl">▶</span>
//                 </div> */}
//                 <div>
//                   <h2 className="text-xl font-bold text-text-1">
//                     {playlist.name}
//                   </h2>
//                   <p className="text-text-2">{playlist.videos.length} فيديو</p>
//                 </div>
//               </div>
//               <hr className="-mx-4 border-t border-text-2 mb-4 -mt-4 " />
//               <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 ">
//                 {playlist.videos.map((video) => (
//                   <div
//                     key={video.id}
//                     onClick={() => setCurrentVideo(video)}
//                     className={`flex gap-3 p-3 rounded-lg cursor-pointer transition-all ${
//                       currentVideo.id === video.id
//                         ? "bg-purple-50 border border-purple-200"
//                         : "hover:bg-gray-50"
//                     }`}
//                   >
//                     <div className="relative">
//                       <img
//                         src={video.thumbnail}
//                         alt={video.title}
//                         className="w-32 h-20 rounded-lg object-cover"
//                       />
//                       <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
//                         {video.duration}
//                       </div>
//                       {currentVideo.id === video.id && (
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center">
//                             <span className="text-white">▶</span>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="font-medium text-text-1">{video.title}</h3>
//                       <p className="text-sm text-text-2 line-clamp-2">
//                         {video.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="flex items-center justify-center">
//                 <button className="w-full py-4 mt-2  bg-text-3 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none transition-colors cursor-pointer">
//                   طلب الكورس
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* وصف الكورس */}
//         {/* <div className="mt-8 bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-bold text-gray-900 mb-4">
//             حول هذا الكورس
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             {playlist.longDescription}
//           </p>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default PlaylistDetails;


// import React, { useState, useEffect, useRef } from "react";
// import { useParams, Link } from "react-router-dom";
// import ReactPlayer from "react-player";
// import { playlists } from "../../../dummy-data/playlist";
// import CourseImage from "../../assets/img-card.svg";

// const PlaylistDetails = () => {
//   const { id } = useParams();
//   const playlistId = parseInt(id);
//   const playlist = playlists.find((p) => p.id === playlistId);
//   const [currentVideo, setCurrentVideo] = useState(null);
//   const playerRef = useRef(null);
//   const [isReady, setIsReady] = useState(false);
//   const [playing, setPlaying] = useState(false);

//   useEffect(() => {
//     if (playlist) {
//       setCurrentVideo(playlist.videos[0]);
//       setPlaying(false);
//     }
//   }, [playlist]);

//   const handleVideoChange = (video) => {
//     setCurrentVideo(video);
//     setIsReady(false);
//     setPlaying(false);
//   };

//   // تحقق من أن الـ currentVideo يحتوي على رابط فيديو صالح
//   useEffect(() => {
//     if (currentVideo) {
//       console.log("Current video URL:", currentVideo.videoUrl);  // طباعة الرابط للتحقق
//     }
//   }, [currentVideo]);

//   if (!playlist) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-800">الكورس غير موجود</h1>
//           <Link
//             to="/academy"
//             className="mt-4 inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
//           >
//             العودة للأكاديمية
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   if (!currentVideo) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen my-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="flex flex-col lg:flex-row gap-8">
//           <div className="lg:w-7/12">
//             <div className="bg-black aspect-video rounded-xl overflow-hidden shadow-lg relative">
//               {currentVideo.videoUrl ? (
//                 <>
//                   <ReactPlayer
//                     key={currentVideo.videoUrl}
//                     ref={playerRef}
//                     url={currentVideo.videoUrl}
//                     width="100%"
//                     height="100%"
//                     controls={true}
//                     playing={playing}
//                     light={Boolean(currentVideo.thumbnail)}
//                     onReady={() => {
//                       setIsReady(true);
//                     }}
//                     onError={(e) => {
//                       console.error("فشل تحميل الفيديو:", e);
//                     }}
//                     style={{ position: "absolute", top: 0, left: 0 }}
//                     config={{
//                       file: {
//                         attributes: {
//                           controlsList: "nodownload",
//                         },
//                       },
//                     }}
//                   />
//                   {!isReady && (
//                     <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
//                       <div className="text-center text-white">
//                         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
//                         <p>جاري تحميل الفيديو...</p>
//                       </div>
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <div className="w-full h-full flex items-center justify-center bg-gray-900">
//                   <div className="text-center text-white">
//                     <div className="text-4xl mb-2">▶</div>
//                     <p dir="rtl" className="text-xl">
//                       تشغيل: {currentVideo.title}
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <div className="mt-12 bg-white p-6 rounded-xl drop-shadow-2xl">
//               <h1 dir="rtl" className="text-2xl font-bold text-text-1 mb-2">
//                 {currentVideo.title}
//               </h1>
//               <div dir="rtl" className="flex items-center text-gray-600 mb-4">
//                 <span className="bg-purple-200 text-text-3 px-2 py-1 rounded text-sm ml-3">
//                   {playlist.category.name}
//                 </span>
//                 <span className="text-text-2">{currentVideo.duration}</span>
//               </div>
//               <p dir="rtl" className="text-text-2 leading-relaxed">
//                 {currentVideo.description}
//               </p>
//             </div>
//           </div>

//           <div dir="rtl" className="lg:w-5/12">
//             <div className="bg-[#FEFEFE] rounded-xl shadow p-4">
//               <div className="flex flex items-center mb-6">
//                 <div>
//                   <h2 className="text-xl font-bold text-text-1">{playlist.name}</h2>
//                   <p className="text-text-2">{playlist.videos.length} فيديو</p>
//                 </div>
//               </div>
//               <hr className="-mx-4 border-t border-text-2 mb-4 -mt-4 " />
//               <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
//                 {playlist.videos.map((video) => (
//                   <div
//                     key={video.id}
//                     onClick={() => handleVideoChange(video)}
//                     className={`flex gap-3 p-3 rounded-lg cursor-pointer transition-all ${
//                       currentVideo.id === video.id
//                         ? "bg-purple-50 border border-purple-200"
//                         : "hover:bg-gray-50"
//                     }`}
//                   >
//                     <div className="relative">
//                       <img
//                         src={video.thumbnail || CourseImage}
//                         alt={video.title}
//                         className="w-32 h-20 rounded-lg object-cover"
//                       />
//                       <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
//                         {video.duration}
//                       </div>
//                       {currentVideo.id === video.id && (
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center">
//                             <span className="text-white">▶</span>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="font-medium text-text-1">{video.title}</h3>
//                       <p className="text-sm text-text-2 line-clamp-2">{video.description}</p>
//                       {video.videoUrl && (
//                         <span className="inline-block mt-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
//                           متوفر
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="flex items-center justify-center">
//                 <button className="w-full py-4 mt-2 bg-text-3 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none transition-colors cursor-pointer">
//                   طلب الكورس
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlaylistDetails;


// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { playlists } from "../../../dummy-data/playlist";
// import CourseImage from "../../assets/img-card.svg";

// const PlaylistDetails = () => {
//   const { id } = useParams();
//   const playlistId = parseInt(id);
//   const playlist = playlists.find((p) => p.id === playlistId);
//   const [currentVideo, setCurrentVideo] = useState(null);

//   useEffect(() => {
//     if (playlist) {
//       setCurrentVideo(playlist.videos[0]);
//     }
//   }, [playlist]);

//   const handleVideoChange = (video) => {
//     setCurrentVideo(video);
//   };

//   if (!playlist) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-800">الكورس غير موجود</h1>
//           <Link
//             to="/academy"
//             className="mt-4 inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
//           >
//             العودة للأكاديمية
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   if (!currentVideo) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen my-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* <div className="lg:w-8/12"> */}
//           <div className="lg:w-[68%]">
//             <div className="bg-black aspect-video rounded-xl overflow-hidden shadow-lg relative">
//               {currentVideo.videoUrl ? (
//                 <video
//                   // key={currentVideo.videoUrl}
//                   key={currentVideo.id}
//                   width="100%"
//                   height="100%"
//                   controls
//                   onError={(e) => console.error("فشل تحميل الفيديو:", e)}
//                   style={{ position: "absolute", top: 0, left: 0 }}
//                 >
//                   <source src={currentVideo.videoUrl} type="video/mp4" />
//                   <p>متصفحك لا يدعم تشغيل الفيديو.</p>
//                 </video>
//               ) : (
//                 <div className="w-full h-full flex items-center justify-center bg-gray-900">
//                   <div className="text-center text-white">
//                     <div className="text-4xl mb-2">▶</div>
//                     <p dir="rtl" className="text-xl">
//                       تشغيل: {currentVideo.title}
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <div className="mt-12 bg-white p-6 rounded-xl drop-shadow-2xl">
//               <h1 dir="rtl" className="text-2xl font-bold text-text-1 mb-2">
//                 {currentVideo.title}
//               </h1>
//               <div dir="rtl" className="flex items-center text-gray-600 mb-4">
//                 <span className="bg-purple-200 text-text-3 px-2 py-1 rounded text-sm ml-3">
//                   {playlist.category.name}
//                 </span>
//                 <span className="text-text-2">{currentVideo.duration}</span>
//               </div>
//               <p dir="rtl" className="text-text-2 leading-[1.75]">
//                 {currentVideo.description}
//               </p>
//             </div>
//           </div>

//           {/* <div dir="rtl" className="lg:w-4/12"> */}
//           <div dir="rtl" className="lg:w-[32%]">
//             <div className="bg-[#FEFEFE] rounded-xl shadow p-4">
//               <div className="flex flex items-center mb-6">
//                 <div>
//                   <h2 className="text-xl font-bold text-text-1">{playlist.name}</h2>
//                   <p className="text-text-2">{playlist.videos.length} فيديو</p>
//                 </div>
//               </div>
//               <hr className="-mx-4 border-t border-text-2 mb-4 -mt-4 " />
//               <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
//                 {playlist.videos.map((video) => (
//                   <div
//                     key={video.id}
//                     onClick={() => handleVideoChange(video)}
//                     className={`flex gap-3 p-3 rounded-lg cursor-pointer transition-all ${
//                       currentVideo.id === video.id
//                         ? "bg-purple-50 border border-purple-200"
//                         : "hover:bg-gray-50"
//                     }`}
//                   >
//                     <div className="relative">
//                       <img
//                         src={video.thumbnail || CourseImage}
//                         alt={video.title}
//                         className="w-32 h-20 rounded-lg object-cover"
//                       />
//                       <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
//                         {video.duration}
//                       </div>
//                       {currentVideo.id === video.id && (
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center">
//                             <span className="text-white">▶</span>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="font-medium text-text-1">{video.title}</h3>
//                       <p className="text-sm text-text-2 line-clamp-2 leading-[1.75]">{video.description}</p>
//                       {/* {video.videoUrl && (
//                         <span className="inline-block mt-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
//                           متوفر
//                         </span>
//                       )} */}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="flex items-center justify-center">
//                 <button className="w-full py-4 mt-2 bg-text-3 text-white font-semibold rounded-full hover:bg-[#53419E] focus:outline-none transition-colors cursor-pointer">
//                   طلب الكورس
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlaylistDetails;


import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { GET } from "../../services/http.service";
import CourseImage from "../../assets/img-card.svg";
import { useSelector } from "react-redux";

const PlaylistDetails = () => {
  const { id } = useParams();
  const playlistId = parseInt(id, 10);

  const [playlist, setPlaylist] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ جلب حالة تسجيل الدخول من Redux
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // مساعدة: استخراج رابط الفيديو من حقل محتمل (بأسماء مختلفة) وتنظيفه
  const extractVideoUrl = (v) => {
    if (!v) return null;
    const possible = [
      v.videoUrl,
      v.video_url,
      v.video,
      v.url,
      v.link,
      v.source,
      v.file,
    ];
    for (let item of possible) {
      if (typeof item === "string" && item.trim() !== "") {
        return item.trim();
      }
    }
    return null;
  };

  // تطبيع كائن الكورس القادم من الخادم للشكل الذي تتوقعه الواجهة
  const normalizePlaylist = (data) => {
    return {
      id: data.id,
      name: data.name,
      description: data.description ?? "",
      image: data.image ?? CourseImage,
      category: {
        id: data.category?.id ?? null,
        name: data.category?.name ?? "",
      },
      longDescription:
        data.longDescription ?? data.long_description ?? data.description ?? "",
      videos: Array.isArray(data.videos)
        ? data.videos.map((v, idx) => {
            const videoUrl = extractVideoUrl(v);
            return {
              id: v.id ?? idx,
              title: v.title ?? v.name ?? `الفيديو ${idx + 1}`,
              description: v.description ?? "",
              duration: v.duration ?? v.length ?? "",
              thumbnail: v.thumbnail ?? v.image ?? CourseImage,
              // videoUrl سيكون null أو رابط صالح
              videoUrl,
              raw: v,
            };
          })
        : [],
      raw: data,
    };
  };

  useEffect(() => {
    const fetchPlaylist = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const resp = await GET(`playlists/${playlistId}`);
        const body = resp.data || {};
        const data = body.data ?? body;
        const norm = normalizePlaylist(data);
        setPlaylist(norm);

        // **تحسين**: ضبط currentVideo ليكون أول فيديو قابل للتشغيل (مع رابط).
        // إذا لم يوجد رابط لأي فيديو، نضع الفيديو الأول (قد يكون بدون رابط) لتبقى واجهة الفيديو كما في التصميم.
        const firstPlayable =
          norm.videos.find((v) => v.videoUrl && String(v.videoUrl).trim() !== "") ??
          norm.videos[0] ??
          null;
        setCurrentVideo(firstPlayable);
      } catch (err) {
        console.error("Failed to fetch playlist:", err);
        setError(err?.message || "فشل في جلب بيانات الكورس");
      } finally {
        setIsLoading(false);
      }
    };

    if (!isNaN(playlistId)) {
      fetchPlaylist();
    } else {
      setError("معرّف الكورس غير صالح");
      setIsLoading(false);
    }
  }, [playlistId]);

  const handleVideoChange = (video) => {
    // عند تغيير الفيديو نضبط الفيديو الحالي
    // ونحرص على أن نستخدم نفس الحقل video.videoUrl كما طبعناه
    setCurrentVideo(video);
  };

  // ✅ دالة عند الضغط على زر "طلب الكورس"
  const handleRequestCourse = () => {
    if (!isAuthenticated) {
      navigate("/login"); // توجيه لصفحة تسجيل الدخول
    } else {
      // هنا ممكن تضيف لوجيك شراء الكورس لاحقاً
      console.log("طلب الكورس...");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">حدث خطأ</h1>
          <p className="mt-2 text-red-600">{String(error)}</p>
          <Link
            to="/academy"
            className="mt-4 inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            العودة للأكاديمية
          </Link>
        </div>
      </div>
    );
  }

  if (!playlist) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">الكورس غير موجود</h1>
          <Link
            to="/academy"
            className="mt-4 inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            العودة للأكاديمية
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen my-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* العمود الرئيسي: مشغل الفيديو والوصف */}
          <div className="lg:w-[68%]">
            {/* استعادة الخلفية السوداء والـ aspect-video كما في التصميم الأصلي */}
            <div className="bg-black aspect-video rounded-xl overflow-hidden shadow-lg relative">
              {/* ثلاث حالات رئيسية:
                  1) الفيديو الأول فقط يمكن مشاهدته إذا كان لديه رابط
                  2) أي فيديو آخر (حتى لو كان المستخدم مسجل دخول) يظهر رسالة طلب الكورس
                  3) لا currentVideo => عرض رسالة افتراضية "لا يوجد فيديو متاح"
              */}
              {currentVideo && currentVideo.videoUrl && currentVideo.id === playlist.videos[0]?.id ? (
                <video
                  key={currentVideo.id}
                  width="100%"
                  height="100%"
                  controls
                  onError={(e) => console.error("فشل تحميل الفيديو:", e)}
                  style={{ position: "absolute", top: 0, left: 0 }}
                >
                  <source src={currentVideo.videoUrl} type="video/mp4" />
                  <p>متصفحك لا يدعم تشغيل الفيديو.</p>
                </video>
              ) : currentVideo ? (
                <div
                  className="w-full h-full flex flex-col items-center justify-center rounded-xl"
                  style={{ backgroundColor: "#8E8A9C", padding: "24px" }}
                  role="status"
                  aria-live="polite"
                >
                  <div className="flex flex-col items-center justify-center text-white">
                    <p className="text-sm sm:text-lg font-semibold">
                      لا يمكنك مشاهدة هذا الفيديو يرجى طلب الكورس
                    </p>
                    <button
                      type="button"
                      onClick={handleRequestCourse}
                      className="translate-y-6 px-20 py-3 bg-text-3 text-white font-semibold rounded-full hover:bg-[#53419E] transition cursor-pointer"
                    >
                      طلب الكورس
                    </button>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-900 rounded-xl">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">▶</div>
                    <p dir="rtl" className="text-xl">
                      لا يوجد فيديو متاح
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* وصف الفيديو / الكورس */}
            <div className="mt-12 bg-white p-6 rounded-xl drop-shadow-2xl">
              <h1 dir="rtl" className="text-2xl font-bold text-text-1 mb-2">
                {currentVideo ? currentVideo.title : playlist.name}
              </h1>
              <div dir="rtl" className="flex items-center text-gray-600 mb-4">
                <span className="bg-purple-200 text-text-3 px-2 py-1 rounded text-sm ml-3">
                  {playlist.category.name}
                </span>
                <span className="text-text-2">{currentVideo ? currentVideo.duration : ""}</span>
              </div>
              <p dir="rtl" className="text-text-2 leading-[1.75]">
                {currentVideo ? currentVideo.description : playlist.longDescription}
              </p>
            </div>
          </div>

          {/* الشريط الجانبي: قائمة الفيديوهات */}
          <div dir="rtl" className="lg:w-[32%]">
            <div className="bg-[#FEFEFE] rounded-xl shadow p-4">
              <div className="flex flex items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold text-text-1">{playlist.name}</h2>
                  <p className="text-text-2">{playlist.videos.length} فيديو</p>
                </div>
              </div>

              <hr className="-mx-4 border-t border-text-2 mb-4 -mt-4" />

              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {playlist.videos.length === 0 && (
                  <div className="text-center text-gray-500 py-6">لا توجد فيديوهات في هذا الكورس.</div>
                )}

                {playlist.videos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => handleVideoChange(video)}
                    className={`flex gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                      currentVideo && currentVideo.id === video.id ? "bg-purple-50 border border-purple-200" : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={video.thumbnail || CourseImage}
                        alt={video.title}
                        className="w-32 h-20 rounded-lg object-cover"
                      />
                      <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
                        {video.duration}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-medium text-text-1">{video.title}</h3>
                      <p className="text-sm text-text-2 line-clamp-2 leading-[1.75]">{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <button
                  onClick={handleRequestCourse}
                  className="w-full py-4 mt-2 bg-text-3 text-white font-semibold rounded-full hover:bg-[#53419E] focus:outline-none transition-colors cursor-pointer"
                >
                  طلب الكورس
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetails;

