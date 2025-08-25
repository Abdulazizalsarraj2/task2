import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// بيانات المشاريع مع البنية الجديدة
const projects = [
  {
    id: 1,
    name: "مشروع زاد العقاري",
    slug: "zad-realestate",
    description: "وصف مختصر عن المشروع العقاري...",
    is_active: true,
    url: "https://example.com/project1",
    start_date: "2025-01-01",
    end_date: "2025-06-01",
    service_id: 1,
    created_at: "2025-08-01",
    updated_at: "2025-08-10",
    images: [
      {
        id: 1,
        project_id: 1,
        path: "https://via.placeholder.com/640x480.png/0099ee?text=image1",
        caption: "صورة 1",
        type: "image",
        created_at: "",
        updated_at: "",
      },
      {
        id: 2,
        project_id: 1,
        path: "https://via.placeholder.com/640x480.png/00ff11?text=image2",
        caption: "صورة 2",
        type: "image",
        created_at: "",
        updated_at: "",
      },
    ],
    audios: [],
    videos: [],
    service: {
      id: 1,
      name: "تصميم واجهات",
      slug: "ui-design",
      description: "خدمة تصميم واجهات المستخدم.",
      is_active: 1,
      icon: "",
      created_at: "",
      updated_at: "",
    },
  },
  {
    id: 2,
    name: "مشروع منصة فيديو",
    slug: "video-platform",
    description: "وصف لمشروع يحتوي على فيديو فقط.",
    is_active: true,
    url: "https://example.com/project2",
    start_date: "2025-03-01",
    end_date: "2025-07-01",
    service_id: 2,
    created_at: "",
    updated_at: "",
    images: [],
    audios: [],
    videos: [
      {
        id: 1,
        project_id: 2,
        path: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        caption: "فيديو توضيحي",
        type: "video",
        created_at: "",
        updated_at: "",
      },
    ],
    service: {
      id: 2,
      name: "تطوير فيديو",
      slug: "video-dev",
      description: "خدمة تطوير فيديوهات.",
      is_active: 1,
      icon: "",
      created_at: "",
      updated_at: "",
    },
  },
  {
    id: 3,
    name: "مشروع بودكاست",
    slug: "podcast-project",
    description: "مشروع يحتوي على ملفات صوتية.",
    is_active: true,
    url: "https://example.com/project3",
    start_date: "2025-02-01",
    end_date: "2025-04-01",
    service_id: 1,
    created_at: "",
    updated_at: "",
    images: [],
    videos: [],
    audios: [
      {
        id: 1,
        project_id: 3,
        path: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        caption: "مقطع صوتي",
        type: "audio",
        created_at: "",
        updated_at: "",
      },
    ],
    service: {
      id: 1,
      name: "تصميم واجهات",
      slug: "ui-design",
      description: "خدمة تصميم واجهات المستخدم.",
      is_active: 1,
      icon: "",
      created_at: "",
      updated_at: "",
    },
  },
];

// استخراج قائمة الخدمات الفريدة
const uniqueServices = [
  ...new Map(projects.map((p) => [p.service.id, p.service])).values(),
];

// مكون عرض الوسائط بناءً على النوع
const MediaItem = ({ item }) => {
  if (item.type === "image") {
    return (
      <div className="h-64 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
        <img
          src={item.path}
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
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const filteredProjects = selectedServiceId
    ? projects.filter((p) => p.service.id === selectedServiceId)
    : projects;

  return (
    <section className="relative flex flex-col items-center justify-center w-full mb-40 mt-30">
      <div className="w-[90%] max-w-7xl mx-auto px-2 sm:px-4">

        {/* Dropdown لتصفية الخدمات */}
        <div className="flex justify-end mb-6">
          <select
            className="border text-right border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fourth"
            onChange={(e) =>
              setSelectedServiceId(
                e.target.value ? parseInt(e.target.value) : null
              )
            }
            value={selectedServiceId || ""}
          >
            <option value="">كل الخدمات</option>
            {uniqueServices.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
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
                      className="bg-fourth text-white px-6 py-2 leading-relaxed rounded-xl shadow hover:bg-[#6A35FF] transition-all"
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
