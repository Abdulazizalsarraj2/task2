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


import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { playlists } from "../../../dummy-data/playlist";
import CourseImage from "../../assets/img-card.svg";

const PlaylistDetails = () => {
  const { id } = useParams();
  const playlistId = parseInt(id);
  const playlist = playlists.find((p) => p.id === playlistId);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    if (playlist) {
      setCurrentVideo(playlist.videos[0]);
    }
  }, [playlist]);

  const handleVideoChange = (video) => {
    setCurrentVideo(video);
  };

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

  if (!currentVideo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen my-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-7/12">
            <div className="bg-black aspect-video rounded-xl overflow-hidden shadow-lg relative">
              {currentVideo.videoUrl ? (
                <video
                  // key={currentVideo.videoUrl}
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
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-900">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">▶</div>
                    <p dir="rtl" className="text-xl">
                      تشغيل: {currentVideo.title}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-12 bg-white p-6 rounded-xl drop-shadow-2xl">
              <h1 dir="rtl" className="text-2xl font-bold text-text-1 mb-2">
                {currentVideo.title}
              </h1>
              <div dir="rtl" className="flex items-center text-gray-600 mb-4">
                <span className="bg-purple-200 text-text-3 px-2 py-1 rounded text-sm ml-3">
                  {playlist.category.name}
                </span>
                <span className="text-text-2">{currentVideo.duration}</span>
              </div>
              <p dir="rtl" className="text-text-2 leading-[1.75]">
                {currentVideo.description}
              </p>
            </div>
          </div>

          <div dir="rtl" className="lg:w-5/12">
            <div className="bg-[#FEFEFE] rounded-xl shadow p-4">
              <div className="flex flex items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold text-text-1">{playlist.name}</h2>
                  <p className="text-text-2">{playlist.videos.length} فيديو</p>
                </div>
              </div>
              <hr className="-mx-4 border-t border-text-2 mb-4 -mt-4 " />
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {playlist.videos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => handleVideoChange(video)}
                    className={`flex gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                      currentVideo.id === video.id
                        ? "bg-purple-50 border border-purple-200"
                        : "hover:bg-gray-50"
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
                      {currentVideo.id === video.id && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center">
                            <span className="text-white">▶</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-text-1">{video.title}</h3>
                      <p className="text-sm text-text-2 line-clamp-2 leading-[1.75]">{video.description}</p>
                      {/* {video.videoUrl && (
                        <span className="inline-block mt-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          متوفر
                        </span>
                      )} */}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <button className="w-full py-4 mt-2 bg-text-3 text-white font-semibold rounded-full hover:bg-[#53419E] focus:outline-none transition-colors cursor-pointer">
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


