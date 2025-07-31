import Icon1 from "../../assets/services-icon/Group 73.svg"
import Icon2 from "../../assets/services-icon/Group 74.svg"
import Icon3 from "../../assets/services-icon/Group 75.svg"
import Icon4 from "../../assets/services-icon/Group 76.svg"
import Icon5 from "../../assets/services-icon/Group 77.svg"
import Icon6 from "../../assets/services-icon/Group 78.svg"
import Icon7 from "../../assets/services-icon/Group 79.svg"
import Icon8 from "../../assets/services-icon/Group 80.svg"
import arrowIcon from "../../assets/services-icon/Group 34.svg"


const services = [

  {
    title: "تصميم وتطوير المواقع",
    icon: Icon5,
    description: "نصنع مواقع ويب احترافية وعصرية متجاوبة وسريعة تراعي معايير الأداء وتجربة المستخدم.",
  },
  {
    title: "برمجة تطبيقات الموبايل",
    icon: Icon3,
    description: "نطور تطبيقات Android و iOS أصلية أو هجينة بتجربة سلسة وأداء عالي تناسب مختلف الاحتياجات.",
  },
  {
    title: "تصميم واجهات وتجربة المستخدم (UI/UX)",
    icon: Icon1,
    description: "نبتكر تصاميم تفاعلية جذابة مبنية على فهم سلوك المستخدم واحتياجات السوق.",
  },
  {
    title: "الاستضافة والبنية التحتية والحماية",
    icon: Icon6,
    description: "نوفر حلول استضافة آمنة وسريعة، مع إعداد الاستراتيجيات والحماية من الهجمات الإلكترونية.",
  },

  {
    title: "التصميم الإبداعي (جرافيك وموشن)",
    icon: Icon4,
    description: "نصمم الهوية البصرية، الشعارات، الرسوم التوضيحية، والمقاطع المتحركة بأسلوب فني محترف.",
  },
  {
    title: "حلول الأنظمة الداخلية (ERP / CRM / CMS)",
    icon: Icon2,
    description: "نطور أنظمة داخلية مخصصة لإدارة الأعمال والموارد بكفاءة عالية قابلة للتخصيص والتوسيع.",
  },
  {
    title: "التحول الرقمي والتحليل الاستشاري",
    icon: Icon8,
    description: "نساعد الشركات على الانتقال الرقمي الذكي بقرارات مبنية على البيانات والتحليل الاستشاري.",
  },
  {
    title: "التكامل مع الأنظمة والخدمات",
    icon: Icon7,
    description: "نبني جسورًا بين أنظمتك وخدمات الطرف الثالث، وندمج حلول الدفع والذكاء الاصطناعي بسهولة.",
  },
];

export default function ServicesSection() {
  return (
    <section dir="rtl" id="our-services" className="py-16 px-4 bg-[#FBFAFF]">
      <div className="mb-12">
      <h1 className='text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#6161ff] to-[#8c6af9] font-bold text-[48px] text-center leading-normal mb-2'> خدماتنا المميزة</h1>
      <div className="h-1 w-32 mx-auto mt-2 bg-gradient-to-r from-[#6161ff] to-[#8c6af9] rounded-full" /> 
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map(({ title, description, icon }, idx) => (
          <div
            key={idx}
            className="relative bg-gradient-to-r from-[#ECE6FE] to-[#FBFAFF] rounded-tl-[150px] shadow-sm  p-8 text-right transition hover:shadow-md lg:w-full w-[90%] mx-auto"
          >
          
              <img src={icon} className=" w-10 h-10 absolute -top-6 -right-5" />
        
            <h3 className="font-bold text-[#4A3F75] lg:text-[16px] text-sm mb-2">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

            <div className="flex gap-3 items-center">
            <div className="text-sm text-[#6161FF] mt-4 cursor-pointer hover:underline">اطلب الخدمة</div>
              <img src={arrowIcon} alt="arrow-icon" className="mt-4" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
