// import React from 'react'
// import { teams } from '../../../dummy-data/teamData'

// const Team = () => {
//     return (
//       <div className='mt-[103px] mb-28'>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 px-12">
//     {teams.map((member) => (
//       <div
//         key={member.slug_name}
//         className="flex flex-col items-center text-center py-10 px-6 rounded-2xl shadow-lg max-w-[280px] h-96 mx-auto"
//         style={{
//           background:
//             "linear-gradient(to bottom left, rgba(232, 225, 254, 0.9), rgba(255, 255, 255, 0.9))",
//         }}
//       >
//         <img
//           src={member.image}
//           alt={member.name}
//           className=" w-[100px] mb-4"
//         />
//         <h2 className="text-lg font-bold text-text-1 mb-[5px]">{member.name}</h2>
//         <h3 className="text-lg text-text-3 mb-2">{member.title_job}</h3>
//         <p dir='rtl' className="text-xs text-text-2 leading-[1.75]">{member.description}</p>
//       </div>
//     ))}
//             </div>
//         </div>
//   )
// }

// export default Team



// import React, { useEffect, useState } from "react";
// import { GET } from "../../services/http.service"; // استدعاء ملف API
// // لا نحتاج dummy-data الآن
// import TeamAvatar from "../../assets/team-section/Avatar-1 3.svg"


// const Team = () => {
//   const [teams, setTeams] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // جلب البيانات من السيرفر
//   useEffect(() => {
//     const fetchTeams = async () => {
//       setLoading(true);
//       const res = await GET("teams", false); // false لأنك لا تحتاج توكن هنا (إلا إذا API يتطلب)
//       if (res?.status === 200 && res?.data?.status) {
//         setTeams(res.data.data); // نأخذ فقط data (array)
//       }
//       setLoading(false);
//     };
//     fetchTeams();
//   }, []);

//   return (
//     <div className="mt-[103px] mb-28">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 px-12">
//         {loading ? (
//           <p className="col-span-full text-center">جاري تحميل البيانات...</p>
//         ) : (
//           teams.map((member) => (
//             <div
//               key={member.id}
//               className="flex flex-col items-center text-center py-10 px-6 rounded-2xl shadow-lg max-w-[280px] h-96 mx-auto"
//               style={{
//                 background:
//                   "linear-gradient(to bottom left, rgba(232, 225, 254, 0.9), rgba(255, 255, 255, 0.9))",
//               }}
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className=" w-[100px] mb-4"
//               />
//               <h2 className="text-lg font-bold text-text-1 mb-[5px]">
//                 {member.name}
//               </h2>
//               <h3 className="text-lg text-text-3 mb-2">
//                 {member.job_title}
//               </h3>
//               <p
//                 dir="rtl"
//                 className="text-xs text-text-2 leading-[1.75] overflow-hidden text-ellipsis line-clamp-4"
//               >
//                 {member.description}
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Team;

import React, { useEffect, useState } from "react";
import { GET } from "../../services/http.service";
import TeamAvatar from "../../assets/team-section/Avatar-1 3.svg";

const Team = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  // دالة لفحص صلاحية صورة الخادم
  const isValidImage = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };

  // تجهيز قائمة الفريق مع fallback للصورة
  const prepareTeam = async (teamList) => {
    const prepared = await Promise.all(
      teamList.map(async (member) => {
        const valid = member?.image ? await isValidImage(member.image) : false;
        return {
          ...member,
          displayImage: valid ? member.image : TeamAvatar,
        };
      })
    );
    setTeams(prepared);
  };

  useEffect(() => {
    const fetchTeams = async () => {
      setLoading(true);
      try {
        const res = await GET("teams", false);
        if (res?.status === 200 && res?.data?.status) {
          await prepareTeam(res.data.data); // تجهيز الصور قبل عرضها
        }
      } catch (err) {
        console.error("فشل في تحميل بيانات الفريق:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeams();
  }, []);

  return (
    <div className="mt-[103px] mb-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[30px] gap-y-[35px] p-6 px-12">
        {loading ? (
          <p className="col-span-full text-center">جاري تحميل البيانات...</p>
        ) : (
          teams.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center py-10 px-6 rounded-2xl shadow-lg max-w-[280px] h-96 mx-auto"
              style={{
                background:
                  "linear-gradient(to bottom left, rgba(232, 225, 254, 0.9), rgba(255, 255, 255, 0.9))",
              }}
            >
              <img
                src={member.displayImage}
                alt={member.name}
                className="w-[100px] mb-4"
              />
              <h2 className="text-lg font-bold text-text-1 mb-[5px]">
                {member.name}
              </h2>
              <h3 className="text-lg text-text-3 mb-2">
                {member.job_title}
              </h3>
              <p
                dir="rtl"
                className="text-xs text-text-2 leading-[1.75] overflow-hidden text-ellipsis line-clamp-4"
              >
                {member.description}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Team;
