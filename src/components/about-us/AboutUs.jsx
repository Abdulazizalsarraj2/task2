// import React from 'react'
// import { team } from '../../../dummy-data/teamData'
// import { useNavigate } from 'react-router-dom'

// const AboutUs = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <section id='about-us' className='mt-10'>
//         <div className='w-full text-center py-20'>
//           <h1 className='text-transparent text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-[#6161ff] to-[#8c6af9] font-bold text-center leading-normal mb-2'>من نحن؟</h1>
//           <div className="h-[5px] w-32 mx-auto -mt-[6px] bg-gradient-to-r from-[#6161ff] to-[#8c6af9] rounded-full" />
//           <p className='max-w-[657px] mx-auto text-sm lg:text-xl text-center text-[#7B7790] font-medium mt-8 leading-[1.75]'>هي شركة تقنية تقدّم حلولًا رقمية متكاملة تشمل البرمجة، التصميم، الاستشارات، التدريب، والدعم الفني، من خلال فريق احترافي يعمل بأسلوب مرن Teknova شركة</p>
//         </div>
        
//         <div id='our-team' className='bg-[#5845A6] py-16 px-4 sm:px-6 lg:px-8'>
//           <div className="max-w-7xl mx-auto">
//             <h1 className='text-4xl md:text-5xl text-white font-bold text-center mt-4 mb-2'>فريقنا</h1>
//             <div className="h-1 w-32 mx-auto mt-2 bg-white rounded-full" />

//             <div className="max-w-md mx-auto h-auto mb-8 mt-8">
//               <div className="bg-[#6161ff] rounded-[42px] flex items-center justify-center py-3 px-6">
//                 <p dir='rtl' className="text-white text-sm md:text-base text-center">
//                   <span className="font-normal">في </span>
//                   <span className="font-semibold">Teknova</span>
//                   <span className="font-normal">، لا نصنع البرمجيات فقط، بل نصنع الفارق</span>
//                 </p>
//               </div>
//             </div>

//             <p className="max-w-4xl mx-auto text-[#efedf8] text-sm lg:text-xl text-center leading-[1.75] mb-12">
//               يقف خلف شركتنا فريق متكامل من المبدعين الشباب، اجتمعوا من مختلف
//               أنحاء سوريا المحررة، يحملون رؤية واحدة: بناء مستقبل رقمي مزدهر يخدم
//               الإنسان ويليق بالوطن.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-5">
//               {team.map((member) => (
//                 <div
//                   key={member.slug_name}
//                   className="flex flex-col items-center text-center p-6 rounded-2xl shadow-lg mx-auto w-full max-w-xs sm:max-w-none"
//                   style={{
//                     background: "linear-gradient(to bottom left, rgba(232, 225, 254, 0.9), rgba(255, 255, 255, 0.9))",
//                     minHeight: '380px'
//                   }}
//                 >
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-[100px] mb-4"
//                   />
//                   <h2 className="text-lg font-bold text-text-1 mb-1">{member.name}</h2>
//                   <h3 className="text-md text-text-3 mb-3">{member.title_job}</h3>
//                   <p dir='rtl' className="text-xs text-text-2 leading-[1.75]">{member.description}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="text-center mt-14">
//               <button
//                 onClick={() => navigate('/team')}
//                 className='text-white px-8 py-3 rounded-full bg-primary hover:bg-[#53419E] transition-colors cursor-pointer text-sm md:text-base'
//               >
//                 رؤية أعضاء الفريق
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default AboutUs


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { GET } from "../../services/http.service";
// import TeamAvatar from "../../assets/team-section/Avatar-1 3.svg"

// const AboutUs = () => {
//   const navigate = useNavigate();

//   const [team, setTeam] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let mounted = true;
//     const fetchHome = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await GET("home", false); // لو توكن مطلوب غيّر false -> true
//         if (res?.status === 200  && res?.data?.data) {
//           const teamsArr = res.data.data.teams || [];
//           // نأخذ أربعة أعضاء ذات أقل قيمة في priority (أصغر قيمة أولاً)
//           const sorted = teamsArr
//             .slice()
//             .sort(
//               (a, b) =>
//                 (Number(a?.priority ?? Number.MAX_SAFE_INTEGER) -
//                   Number(b?.priority ?? Number.MAX_SAFE_INTEGER))
//             )
//             .slice(0, 4);
//           if (mounted) setTeam(sorted);
//         } else {
//           setError("فشل استرجاع بيانات الفريق من الخادم.");
//           console.error("home endpoint returned unexpected payload:", res);
//         }
//       } catch (err) {
//         setError("حصل خطأ أثناء تحميل بيانات الفريق.");
//         console.error("fetch home error:", err);
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     };

//     fetchHome();
//     return () => {
//       mounted = false;
//     };
//   }, []);

//   return (
//     <>
//       <section id="about-us" className="mt-10">
//         <div className="w-full text-center py-20">
//           <h1 className="text-transparent text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-[#6161ff] to-[#8c6af9] font-bold text-center leading-normal mb-2">من نحن؟</h1>
//           <div className="h-[5px] w-32 mx-auto -mt-[6px] bg-gradient-to-r from-[#6161ff] to-[#8c6af9] rounded-full" />
//           <p className="max-w-[657px] mx-auto text-sm lg:text-xl text-center text-[#7B7790] font-medium mt-8 leading-[1.75]">
//             هي شركة تقنية تقدّم حلولًا رقمية متكاملة تشمل البرمجة، التصميم، الاستشارات، التدريب، والدعم الفني، من خلال فريق احترافي يعمل بأسلوب مرن Teknova شركة
//           </p>
//         </div>

//         <div id="our-team" className="bg-[#5845A6] py-16 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <h1 className="text-4xl md:text-5xl text-white font-bold text-center mt-4 mb-2">فريقنا</h1>
//             <div className="h-1 w-32 mx-auto mt-2 bg-white rounded-full" />

//             <div className="max-w-md mx-auto h-auto mb-8 mt-8">
//               <div className="bg-[#6161ff] rounded-[42px] flex items-center justify-center py-3 px-6">
//                 <p dir="rtl" className="text-white text-sm md:text-base text-center">
//                   <span className="font-normal">في </span>
//                   <span className="font-semibold">Teknova</span>
//                   <span className="font-normal">، لا نصنع البرمجيات فقط، بل نصنع الفارق</span>
//                 </p>
//               </div>
//             </div>

//             <p className="max-w-4xl mx-auto text-[#efedf8] text-sm lg:text-xl text-center leading-[1.75] mb-12">
//               يقف خلف شركتنا فريق متكامل من المبدعين الشباب، اجتمعوا من مختلف
//               أنحاء سوريا المحررة، يحملون رؤية واحدة: بناء مستقبل رقمي مزدهر يخدم
//               الإنسان ويليق بالوطن.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-5">
//               {loading && <p className="col-span-full text-center text-white">جاري تحميل أعضاء الفريق...</p>}

//               {!loading && error && (
//                 <p className="col-span-full text-center text-red-200">
//                   {error}
//                 </p>
//               )}

//               {!loading && !error && team.length === 0 && (
//                 <p className="col-span-full text-center text-white">لا يوجد أعضاء للعرض حالياً.</p>
//               )}

//               {!loading && !error && team.map((member) => (
//                 <div
//                   key={member?.slug_name ?? member?.id}
//                   className="flex flex-col items-center text-center p-6 rounded-2xl shadow-lg mx-auto w-full max-w-xs sm:max-w-none"
//                   style={{
//                     background: "linear-gradient(to bottom left, rgba(232, 225, 254, 0.9), rgba(255, 255, 255, 0.9))",
//                     minHeight: '380px'
//                   }}
//                 >
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-[100px] mb-4"
//                   />
//                   <h2 className="text-lg font-bold text-text-1 mb-1">{member.name}</h2>
//                   <h3 className="text-md text-text-3 mb-3">{member.job_title}</h3>
//                   <p dir="rtl" className="text-xs text-text-2 leading-[1.75]">{member.description}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="text-center mt-14">
//               <button
//                 onClick={() => navigate("/team")}
//                 className="text-white px-8 py-3 rounded-full bg-primary hover:bg-[#53419E] transition-colors cursor-pointer text-sm md:text-base"
//               >
//                 رؤية أعضاء الفريق
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutUs;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GET } from "../../services/http.service";
import TeamAvatar from "../../assets/team-section/Avatar-1 3.svg";

const AboutUs = () => {
  const navigate = useNavigate();

  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // دالة التحقق من صلاحية الصورة
  const isValidImage = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };

  const prepareTeam = async (teamArr) => {
    const checked = await Promise.all(
      teamArr.map(async (member) => {
        const valid = member?.image ? await isValidImage(member.image) : false;
        return {
          ...member,
          displayImage: valid ? member.image : TeamAvatar,
        };
      })
    );
    setTeam(checked);
  };

  useEffect(() => {
    let mounted = true;
    const fetchHome = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await GET("home", false);
        if (res?.status === 200 && res?.data?.data) {
          const teamsArr = res.data.data.teams || [];
          const sorted = teamsArr
            .slice()
            .sort(
              (a, b) =>
                (Number(a?.priority ?? Number.MAX_SAFE_INTEGER) -
                  Number(b?.priority ?? Number.MAX_SAFE_INTEGER))
            )
            .slice(0, 4);

          if (mounted) await prepareTeam(sorted);
        } else {
          setError("فشل استرجاع بيانات الفريق من الخادم.");
          console.error("home endpoint returned unexpected payload:", res);
        }
      } catch (err) {
        setError("حصل خطأ أثناء تحميل بيانات الفريق.");
        console.error("fetch home error:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchHome();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <section id="about-us" className="mt-10">
        <div className="w-full text-center py-20">
          <h1 className="text-transparent text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-[#6161ff] to-[#8c6af9] font-bold text-center leading-normal mb-2">من نحن؟</h1>
          <div className="h-[5px] w-32 mx-auto -mt-[6px] bg-gradient-to-r from-[#6161ff] to-[#8c6af9] rounded-full" />
          <p className="max-w-[657px] mx-auto text-sm lg:text-xl text-center text-[#7B7790] font-medium mt-8 leading-[1.75]">
            هي شركة تقنية تقدّم حلولًا رقمية متكاملة تشمل البرمجة، التصميم، الاستشارات، التدريب، والدعم الفني، من خلال فريق احترافي يعمل بأسلوب مرن Teknova شركة
          </p>
        </div>

        <div id="our-team" className="bg-[#5845A6] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl text-white font-bold text-center mt-4 mb-2">فريقنا</h1>
            <div className="h-1 w-32 mx-auto mt-2 bg-white rounded-full" />

            <div className="max-w-md mx-auto h-auto mb-8 mt-8">
              <div className="bg-[#6161ff] rounded-[42px] flex items-center justify-center py-3 px-6">
                <p dir="rtl" className="text-white text-sm md:text-base text-center">
                  <span className="font-normal">في </span>
                  <span className="font-semibold">Teknova</span>
                  <span className="font-normal">، لا نصنع البرمجيات فقط، بل نصنع الفارق</span>
                </p>
              </div>
            </div>

            <p className="max-w-4xl mx-auto text-[#efedf8] text-sm lg:text-xl text-center leading-[1.75] mb-12">
              يقف خلف شركتنا فريق متكامل من المبدعين الشباب، اجتمعوا من مختلف
              أنحاء سوريا المحررة، يحملون رؤية واحدة: بناء مستقبل رقمي مزدهر يخدم
              الإنسان ويليق بالوطن.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-5">
              {loading && <p className="col-span-full text-center text-white">جاري تحميل أعضاء الفريق...</p>}

              {!loading && error && (
                <p className="col-span-full text-center text-red-200">{error}</p>
              )}

              {!loading && !error && team.length === 0 && (
                <p className="col-span-full text-center text-white">لا يوجد أعضاء للعرض حالياً.</p>
              )}

              {!loading && !error && team.map((member) => (
                <div
                  key={member?.slug_name ?? member?.id}
                  className="flex flex-col items-center text-center p-6 rounded-2xl shadow-lg mx-auto w-full max-w-xs sm:max-w-none"
                  style={{
                    background: "linear-gradient(to bottom left, rgba(232, 225, 254, 0.9), rgba(255, 255, 255, 0.9))",
                    minHeight: '380px'
                  }}
                >
                  <img
                    src={member.displayImage}
                    alt={member.name}
                    className="w-[100px] mb-4"
                  />
                  <h2 className="text-lg font-bold text-text-1 mb-1">{member.name}</h2>
                  <h3 className="text-md text-text-3 mb-3">{member.job_title}</h3>
                  <p dir="rtl" className="text-xs text-text-2 leading-[1.75]">{member.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-14">
              <button
                onClick={() => navigate("/team")}
                className="text-white px-8 py-3 rounded-full bg-primary hover:bg-[#53419E] transition-colors cursor-pointer text-sm md:text-base"
              >
                رؤية أعضاء الفريق
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
