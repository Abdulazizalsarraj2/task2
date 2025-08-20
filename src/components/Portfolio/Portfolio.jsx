import React from "react";
import PortfolioImage from "../../assets/portfolio-img.svg";

// مصفوفة وهمية للأعمال
const projects = [
  {
    id: 1,
    title: "مشروع زاد العقاري",
    description:
      "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
    image: PortfolioImage,
    link: "https://example.com/project1",
  },
  {
    id: 2,
    title: "مشروع زاد العقاري",
    description:
      "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
    image: PortfolioImage,
    link: "https://example.com/project2",
  },
  {
    id: 3,
    title: "مشروع زاد العقاري",
    description:
      "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
    image: PortfolioImage,
    link: "https://example.com/project3",
  },
  {
    id: 4,
    title: "مشروع زاد العقاري",
    description:
      "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
    image: PortfolioImage,
    link: "https://example.com/project4",
  },
  {
    id: 5,
    title: "مشروع زاد العقاري",
    description:
      "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
    image: PortfolioImage,
    link: "https://example.com/project5",
  },
  {
    id: 6,
    title: "مشروع زاد العقاري",
    description:
      "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص ",
    image: PortfolioImage,
    link: "https://example.com/project6",
  },
];

export default function Portfolio() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full mb-40 mt-30">
      <div className="w-[90%] max-w-7xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              {/* صورة المشروع */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover p-3 rounded-3xl"
              />

              {/* محتوى الكارت */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-text-1 mb-2 text-right">
                  {project.title}
                </h3>
                <p className="text-sm text-text-2 text-right flex-grow leading-[1.75]">
                  {project.description}
                </p>

                <div className="mt-5 flex justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-fourth text-white px-18 py-2 leading-relaxed rounded-xl shadow hover:bg-[#6A35FF] transition-all"
                  >
                    عرض المشروع
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
