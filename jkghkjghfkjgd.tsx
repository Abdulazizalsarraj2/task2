import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  BarChart,
  Clock,
  Database,
  DollarSign,
  Globe,
  Layout,
  Mail,
  Palette,
  Phone,
  Server,
  Share2,
  Smartphone,
  ThumbsUp,
  Users,
} from "lucide-react";
import React from "react";

export default function Frame() {
  // Service data for mapping
  const services = [
    {
      id: 1,
      title: "تصميم وتطوير المواقع",
      description:
        "نصنع مواقع ويب احترافية وعصرية، متجاوبة وسريعة، تواكب معايير الأداء وتجربة المستخدم.",
      icon: <Globe className="w-[50px] h-[50px] text-white" />,
      bgColor: "bg-[#614bb5]",
    },
    {
      id: 2,
      title: "برمجة تطبيقات الموبايل",
      description:
        "نطور تطبيقات Android وiOS أصلية أو هجينة، بتجربة سلسة وأداء عال، تناسب مختلف الاحتياجات.",
      icon: <Smartphone className="w-[50px] h-[50px] text-white" />,
      bgColor: "bg-[#393198]",
    },
    {
      id: 3,
      title: "تصميم واجهات وتجربة المستخدم (UI/UX)",
      description:
        "نبتكر تصاميم تفاعلية جذابة، مبنية على فهم سلوك المستخدم واحتياجات السوق.",
      icon: <Layout className="w-[50px] h-[50px] text-white" />,
      bgColor: "bg-[#5857e7]",
    },
    {
      id: 4,
      title: "الاستضافة والبنية التحتية والحماية",
      description:
        "نوفر حلول استضافة آمنة وسريعة، مع إعداد السيرفرات والحماية من الهجمات الإلكترونية.",
      icon: <Server className="w-[50px] h-[50px] text-white" />,
      bgColor: "bg-[#5857e7]",
    },
    {
      id: 5,
      title: "التصميم الإبداعي (جرافيك وموشن)",
      description:
        "نصمم الهوية البصرية، الشعارات، الرسوم التوضيحية، والمقاطع المتحركة بأسلوب فني محترف.",
      icon: <Palette className="w-[50px] h-[50px] text-white" />,
      bgColor: "bg-[#614bb5]",
    },
    {
      id: 6,
      title: "حلول الأنظمة الداخلية (ERP / CRM / CMS)",
      description:
        "نطور أنظمة داخلية مخصصة لإدارة الأعمال والموارد بكفاءة عالية، قابلة للتخصيص والتوسع.",
      icon: <Database className="w-[50px] h-[50px] text-white" />,
      bgColor: "bg-[#393198]",
    },
    {
      id: 7,
      title: "التحول الرقمي والتحليل الاستشاري",
      description:
        "نساعد الشركات على الانتقال الرقمي بخطط استراتيجية وحلول تكنولوجية موجهة لتحقيق النمو.",
      icon: <BarChart className="w-[50px] h-[50px] text-white" />,
      bgColor: "bg-[#5857e7]",
    },
    {
      id: 8,
      title: "التكامل مع الأنظمة والخدمات",
      description:
        "نبني جسورا بين أنظمتك وخدمات الطرف الثالث، وندمج حلول الدفع والذكاء الاصطناعي بسهولة.",
      icon: <Share2 className="w-[50px] h-[50px] text-white" />,
      bgColor: "bg-[#614bb5]",
    },
  ];

  // Features data
  const features = [
    {
      id: 1,
      title: "تسليم سريع",
      description: "نلتزم بمواعيد التسليم المحددة",
      icon: <Clock className="w-[42px] h-9 text-[#7e60e2]" />,
      bgClass: "bg-[url(/vector-55.svg)]",
    },
    {
      id: 2,
      title: "أسعار تنافسية",
      description: "أفضل قيمة مقابل السعر",
      icon: <DollarSign className="w-[42px] h-9 text-[#7e60e2]" />,
      bgClass: "bg-[url(/vector-54.svg)]",
    },
    {
      id: 3,
      title: "فريق متخصص",
      description: "خبراء في مجالاتهم",
      icon: <Users className="w-[42px] h-9 text-[#7e60e2]" />,
      bgClass: "bg-[url(/vector-53.svg)]",
    },
    {
      id: 4,
      title: "رضا العملاء",
      description: "أولوية قصوى لنا",
      icon: <ThumbsUp className="w-[42px] h-9 text-[#7e60e2]" />,
      bgClass: "bg-[url(/vector-52.svg)]",
    },
  ];

  // Navigation items
  const navItems = [
    { id: 1, title: "الرئيسية", href: "#" },
    { id: 2, title: "خدماتنا", href: "#" },
    { id: 3, title: "من نحن", href: "#" },
    { id: 4, title: "الفريق", href: "#" },
    { id: 5, title: "الأعمال", href: "#" },
    { id: 6, title: "اطلب خدمة", href: "#" },
    { id: 7, title: "تواصل معنا", href: "#" },
  ];

  // Footer service links
  const footerServices = [
    { id: 1, title: "تصميم وتطوير المواقع", href: "#" },
    { id: 2, title: "برمجة تطبيقات الموبايل", href: "#" },
    { id: 3, title: "التصميم الإبداعي (جرافيك وموشن)", href: "#" },
    { id: 4, title: "الاستضافة والبنية التحتية والحماية", href: "#" },
    { id: 5, title: "تصميم واجهات وتجربة المستخدم (UI/UX)", href: "#" },
    { id: 6, title: "حلول الأنظمة الداخلية (ERP / CRM / CMS)", href: "#" },
    { id: 7, title: "التحول الرقمي والتحليل الاستشاري", href: "#" },
    {
      id: 8,
      title: "التكامل مع الأنظمة والخدمات (APIs / Payment / AI)",
      href: "#",
    },
  ];

  // Footer important links
  const footerLinks = [
    { id: 1, title: "الرئيسية", href: "#" },
    { id: 2, title: "اطلب خدمة", href: "#" },
    { id: 3, title: "الأعمال", href: "#" },
    { id: 4, title: "من نحن", href: "#" },
    { id: 5, title: "الفريق", href: "#" },
    { id: 6, title: "خدماتنا", href: "#" },
    { id: 7, title: "تواصل معنا", href: "#" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1920px] relative">
        {/* Fixed Navigation */}
        <header className="fixed w-full z-50 top-[41px] px-[119px]">
          <div className="relative w-full h-[126px] bg-[#ffffffcc] rounded-[63px] border-[0.25px] border-solid border-[#00000033] shadow-[0px_2px_30px_#00000014] backdrop-blur-[30px] backdrop-brightness-[100%] flex items-center justify-between px-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-[113px] h-[82px] mr-4">
                <div className="text-[#362963] text-[32px] font-bold text-right">
                  تكنوفا
                </div>
                <div className="text-[#8c6af9] text-sm font-normal text-right">
                  حلول رقمية متطورة
                </div>
              </div>
              <div className="w-[79px] h-16">
                <img src="" alt="Logo" className="w-full h-full" />
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center gap-8 mx-auto">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-collection-1-text-1 text-lg font-medium hover:text-[#6161ff] transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <Button className="bg-[#7e60e2] text-[#f8f6fd] text-2xl font-medium rounded-[100px] px-7 py-2 h-auto flex items-center gap-3.5">
              <span>ابدأ لآن</span>
              <img src="" alt="Arrow" className="w-[17.22px] h-[31px]" />
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="w-full h-[2486px] relative">
          {/* Background Elements */}
          <img
            src=""
            alt="Background"
            className="absolute w-[726px] h-[758px] top-0 left-0"
          />
          <div className="absolute w-[372px] h-[372px] top-[169px] left-0 bg-[#7e60e24c] rounded-[186px] blur-[305px]" />
          <div className="absolute w-[372px] h-[372px] top-[699px] left-0 bg-[#7e60e24c] rounded-[186px] blur-[305px]" />
          <div className="absolute w-[372px] h-[372px] top-[776px] left-[1450px] bg-[#6161ff33] rounded-[186px] blur-[305px]" />

          {/* Hero Content */}
          <div className="absolute w-[798px] h-[465px] top-[155px] left-[1024px]">
            <div className="absolute w-[372px] h-[372px] top-0 left-[426px] bg-[#6161ff33] rounded-[186px] blur-[305px]" />

            <div className="absolute top-[150px] left-[495px]">
              <Button className="bg-[#6161ff] text-white text-lg font-semibold rounded-[42px] h-[58px] w-[216px] flex items-center justify-center">
                <span className="mr-2">شركة رقمية رائدة</span>
                <span className="w-[22px] h-[22px]"></span>
              </Button>
            </div>

            <h1 className="absolute top-[254px] left-[183px] text-transparent bg-clip-text bg-gradient-to-r from-[#120e23] to-[#7056cc] font-black text-[56px] text-right">
              نبتكر أفضل التقنيات
            </h1>

            <h2 className="absolute top-[345px] left-0 text-[#8c6af9] font-black text-[64px] text-right">
              لنصنع المستقبل الحديث
            </h2>
          </div>

          {/* Animated Phone/Device Mockup */}
          <div className="absolute w-[463px] h-[552px] top-[365px] left-[302px]">
            <div className="absolute w-[385px] h-[497px] top-[25px] left-[39px] bg-white rounded-[32px] border border-solid border-[#36296433] shadow-[0px_2px_75.3px_#8c6af91a]" />
            <div className="absolute w-[146px] h-[191px] top-[178px] left-[158px] flex flex-col items-center">
              <div className="absolute w-[86px] h-[86px] top-2.5 left-[30px] bg-[#8c6af9] blur-[41.7px]" />
              <img src="" alt="App Icon" className="w-[105px] h-[105px] mb-7" />
              <div className="flex flex-col items-center gap-[5px]">
                <div className="w-[139.3px] h-[19px]">
                  <img src="" alt="Rating" className="w-full h-full" />
                </div>
                <div className="text-collection-1-text-2 text-lg font-normal text-center">
                  حلول رقمية متطورة
                </div>
              </div>
            </div>
            <div className="absolute w-[79px] h-[79px] top-[79px] left-96">
              <img src="" alt="Decoration" className="w-full h-full" />
            </div>
            <img
              src=""
              alt="Decoration"
              className="absolute w-[79px] h-[79px] top-0 left-0"
            />
            <div className="absolute w-[79px] h-[79px] top-[473px] left-96">
              <img src="" alt="Decoration" className="w-full h-full" />
            </div>
            <img
              src=""
              alt="Decoration"
              className="absolute w-[79px] h-[79px] top-[378px] left-0"
            />
          </div>

          {/* Description Text */}
          <div className="absolute top-[668px] left-[998px] w-[737px] text-collection-1-text-2 text-2xl font-medium text-right">
            نحن شركة متخصصة في الحلول البرمجية والتقنية المتقدمة، نقدم خبراتنا
            لبناء أنظمة ذكية ومبتكرة تسهم في تطوير أعمال الشركات وتعزيز حضورها
            الرقمي باحترافية واستدامة.
          </div>

          {/* CTA Buttons */}
          <div className="absolute top-[878px] left-[1185px] flex gap-6">
            <Button className="bg-[#7e60e2] text-[#f8f6fd] text-2xl font-bold rounded-[100px] px-10 py-5 h-auto flex items-center gap-3.5">
              <span>ابدأ مشروعك لآن</span>
              <img src="" alt="Arrow" className="w-[17.22px] h-[31px]" />
            </Button>

            <Button
              variant="outline"
              className="text-[#362963] text-2xl font-bold rounded-[100px] px-10 py-5 h-auto border-[#362963]"
            >
              اكتشف خدماتنا
            </Button>
          </div>

          {/* Services Section */}
          <div className="absolute w-[1920px] h-[1440px] top-[1046px] left-0 bg-[#fbfafe]">
            <h2 className="absolute top-[1094px] left-[771px] text-transparent bg-clip-text bg-gradient-to-r from-[#6161ff] to-[#8c6af9] font-bold text-[56px] text-right">
              خدماتنا المميزة
            </h2>

            <img
              src=""
              alt="Separator"
              className="absolute w-[207px] h-1.5 top-[1189px] left-[857px]"
            />

            {/* Service Cards - First Row */}
            <div className="absolute top-[1331px] left-0 w-full px-[119px] flex justify-between">
              {services.slice(0, 3).map((service) => (
                <Card
                  key={service.id}
                  className="w-[520px] h-[267px] rounded-[220px_16px_16px_16px] border-[0.25px] border-solid border-[#3629634c] bg-gradient-to-t from-[#fbfafe] to-[#ece6fe] shadow-none relative"
                >
                  <div
                    className={`absolute w-[87px] h-[87px] top-[-44px] left-[476px] ${service.bgColor} rounded-[43.5px] flex items-center justify-center`}
                  >
                    {service.icon}
                  </div>
                  <CardContent className="pt-16 px-8">
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#362963] to-[#7056cc] font-bold text-xl text-right mb-4">
                      {service.title}
                    </h3>
                    <p className="text-[#484652] text-lg font-normal text-right mb-6">
                      {service.description}
                    </p>
                    <div className="flex justify-end items-center gap-2 text-[#6161ff] text-lg font-medium cursor-pointer">
                      <span>اطلب الخدمة</span>
                      <span className="rotate-180">←</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Cards - Second Row */}
            <div className="absolute top-[1697px] left-0 w-full px-[119px] flex justify-between">
              {services.slice(3, 6).map((service) => (
                <Card
                  key={service.id}
                  className="w-[520px] h-[267px] rounded-[220px_16px_16px_16px] border-[0.25px] border-solid border-[#3629634c] bg-gradient-to-t from-[#fbfafe] to-[#ece6fe] shadow-none relative"
                >
                  <div
                    className={`absolute w-[87px] h-[87px] top-[-44px] left-[476px] ${service.bgColor} rounded-[43.5px] flex items-center justify-center`}
                  >
                    {service.icon}
                  </div>
                  <CardContent className="pt-16 px-8">
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#362963] to-[#7056cc] font-bold text-xl text-right mb-4">
                      {service.title}
                    </h3>
                    <p className="text-[#484652] text-lg font-normal text-right mb-6">
                      {service.description}
                    </p>
                    <div className="flex justify-end items-center gap-2 text-[#6161ff] text-lg font-medium cursor-pointer">
                      <span>اطلب الخدمة</span>
                      <span className="rotate-180">←</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Cards - Third Row */}
            <div className="absolute top-[2063px] left-0 w-full px-[119px] flex justify-center gap-[61px]">
              {services.slice(6, 8).map((service) => (
                <Card
                  key={service.id}
                  className="w-[520px] h-[267px] rounded-[220px_16px_16px_16px] border-[0.25px] border-solid border-[#3629634c] bg-gradient-to-t from-[#fbfafe] to-[#ece6fe] shadow-none relative"
                >
                  <div
                    className={`absolute w-[87px] h-[87px] top-[-44px] left-[476px] ${service.bgColor} rounded-[43.5px] flex items-center justify-center`}
                  >
                    {service.icon}
                  </div>
                  <CardContent className="pt-16 px-8">
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#362963] to-[#7056cc] font-bold text-xl text-right mb-4">
                      {service.title}
                    </h3>
                    <p className="text-[#484652] text-lg font-normal text-right mb-6">
                      {service.description}
                    </p>
                    <div className="flex justify-end items-center gap-2 text-[#6161ff] text-lg font-medium cursor-pointer">
                      <span>اطلب الخدمة</span>
                      <span className="rotate-180">←</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="relative mt-[2547px]">
          <div className="w-[212px] h-[105px] mx-auto mb-8">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#6161ff] to-[#8c6af9] font-bold text-[56px] text-center">
              من نحن؟
            </h2>
            <img
              src=""
              alt="Separator"
              className="w-[135px] h-1.5 mx-auto mt-2"
            />
          </div>

          <p className="w-[957px] mx-auto text-collection-1-text-2 text-2xl text-center font-medium">
            شركة Teknova هي شركة تقنية تقدم حلولا رقمية متكاملة تشمل البرمجة،
            التصميم، الاستشارات، التدريب، والدعم الفني، من خلال فريق احترافي
            يعمل بأسلوب مرن.
          </p>
        </section>

        {/* Team Section */}
        <section className="relative w-full h-[601px] mt-[100px] bg-[url(/rectangle-1552.svg)] bg-cover flex flex-col items-center justify-center">
          <div className="w-[155px] h-[105px] mb-8">
            <h2 className="text-white text-[56px] font-bold text-center">
              فريقنا
            </h2>
            <img
              src=""
              alt="Separator"
              className="w-[135px] h-1.5 mx-auto mt-2"
            />
          </div>

          <div className="w-[433px] h-[58px] mb-8">
            <div className="w-[431px] h-[58px] bg-[#6161ff] rounded-[42px] flex items-center justify-center">
              <p className="text-white text-lg px-4 text-center">
                <span className="font-semibold">في </span>
                <span className="font-extrabold">Teknova</span>
                <span className="font-semibold">
                  ، لا نصنع البرمجيات فقط، بل نصنع الفارق
                </span>
              </p>
            </div>
          </div>

          <p className="w-[957px] text-[#efedf8] text-2xl text-center font-medium">
            يقف خلف شركتنا فريق متكامل من المبدعين الشباب، اجتمعوا من مختلف
            أنحاء سوريا المحررة، يحملون رؤية واحدة: بناء مستقبل رقمي مزدهر يخدم
            الإنسان ويليق بالوطن.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative mt-[100px]">
          <div className="w-[722px] h-[162px] mx-auto mb-12">
            <div className="w-[216px] h-[58px] mx-auto mb-4">
              <Button className="w-full h-full bg-[#6161ff] text-white text-lg font-semibold rounded-[42px] shadow-[0px_2px_8px_#6161ff40] flex items-center justify-center">
                <span className="mr-2">لماذا تختار تكنوفا؟</span>
                <span className="w-[22px] h-[22px]"></span>
              </Button>
            </div>

            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#120e23] to-[#7056cc] font-black text-[56px] text-center">
              نحن نبتكر المستقبل الرقمي
            </h2>
          </div>

          <p className="text-collection-1-text-2 text-2xl text-center font-semibold max-w-4xl mx-auto mb-16">
            نتميز بخبرة عالية وتقنيات حديثة لتقديم حلول رقمية استثنائية تساعدك{" "}
            <br />
            على تحقيق أهدافك
          </p>

          {/* Features */}
          <div className="flex justify-center items-start gap-24 mb-24">
            {features.map((feature) => (
              <div key={feature.id} className="flex flex-col items-center">
                <div
                  className={`w-[79px] h-[79px] ${feature.bgClass} bg-cover flex items-center justify-center mb-3`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-collection-1-text-1 text-xl font-semibold text-center mb-1">
                  {feature.title}
                </h3>
                <p className="text-collection-1-text-2 text-base font-normal text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-[119px] mb-24">
          <Card className="w-full h-[376px] bg-white rounded-[32px] shadow-[0px_2px_40px_#8c6af940] flex flex-col items-center justify-center">
            <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-[#362963] to-[#7056cb] font-bold text-[56px] text-center mb-8">
              جاهز لبدء مشروعك؟
            </CardTitle>

            <p className="text-[#362963] text-xl font-normal text-center mb-12">
              دعنا نعمل معا لتحويل أفكارك إلى واقع رقمي مذهل
            </p>

            <Button className="bg-[#7e60e2] text-[#f8f6fd] text-2xl font-medium rounded-[100px] px-7 py-2 h-auto flex items-center gap-3.5">
              <span>ابدأ مشروعك لآن</span>
              <img src="" alt="Arrow" className="w-[17.22px] h-[31px]" />
            </Button>
          </Card>
        </section>

        {/* Footer */}
        <footer className="w-full h-[650px] bg-[url(/rectangle-1554.svg)] bg-cover text-white">
          <div className="px-[119px] pt-[110px] pb-[50px] h-full flex flex-col">
            <div className="flex justify-between mb-16">
              {/* Company Info */}
              <div className="w-[254px]">
                <div className="flex items-center mb-8">
                  <img src="" alt="Logo" className="w-[94px] h-[76px]" />
                  <div className="ml-4">
                    <h3 className="text-[32px] font-bold">تكنوفا</h3>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <Mail
                    className="w-[26px] h-5 ml
-4"
                  />
                  <span className="text-white text-lg font-normal text-right">
                    adelkharzoum@gmail.com
                  </span>
                </div>

                <div className="flex items-center">
                  <Phone className="w-[29px] h-[29px] ml-4" />
                  <span className="text-white text-lg font-normal text-right">
                    +963 993 656 197
                  </span>
                </div>
              </div>

              {/* Services Links */}
              <div className="w-[718px]">
                <h3 className="text-white text-[22px] font-bold text-right mb-8">
                  خدماتنا
                </h3>

                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  {footerServices.map((service) => (
                    <a
                      key={service.id}
                      href={service.href}
                      className="text-[#efedf8] text-lg font-medium text-right hover:text-white transition-colors"
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Important Links */}
              <div className="w-[200px]">
                <h3 className="text-white text-[22px] font-bold text-right mb-8">
                  روابط مهمة
                </h3>

                <div className="flex flex-col gap-6">
                  {footerLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      className="text-[#efedf8] text-lg font-medium text-right hover:text-white transition-colors"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-auto">
              <div className="relative flex items-center justify-center mb-4">
                <Separator className="w-[742px] h-0.5 bg-white/20" />
                <div className="absolute">
                  <img src="" alt="Logo" className="w-[143px] h-[34px]" />
                </div>
                <Separator className="w-[742px] h-0.5 bg-white/20" />
              </div>

              <div className="text-white text-lg font-medium text-center">
                جميع الحقوق محفوظة © 2025 | سياسة الخصوصية
              </div>

              <div className="flex justify-center gap-4 mt-4">
                <a href="#" className="text-white hover:text-[#8c6af9]">
                  <span className="sr-only">Facebook</span>
                  <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center"></div>
                </a>
                <a href="#" className="text-white hover:text-[#8c6af9]">
                  <span className="sr-only">Twitter</span>
                  <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center"></div>
                </a>
                <a href="#" className="text-white hover:text-[#8c6af9]">
                  <span className="sr-only">Instagram</span>
                  <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center"></div>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}


/*
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "collection-1-text-1": "var(--collection-1-text-1)",
        "collection-1-text-2": "var(--collection-1-text-2)",
        "collection-1-text-33": "var(--collection-1-text-33)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};


* /





@tailwind components;
@tailwind utilities;

@layer components {
  .all-\[unset\] {
    all: unset;
  }
}

:root {
  --collection-1-text-1: rgba(18, 14, 35, 1);
  --collection-1-text-2: rgba(123, 119, 144, 1);
  --collection-1-text-33: rgba(88, 87, 231, 1);
}

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;

    --card: transparent;
    --card-foreground: 222.2 47.4% 11.2%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 100% 50%;
    --destructive-foreground: 210 40% 98%;

    --ring: 215 20.2% 65.1%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 224 71% 4%;
    --foreground: 213 31% 91%;

    --muted: 223 47% 11%;
    --muted-foreground: 215.4 16.3% 56.9%;

    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%;

    --popover: 224 71% 4%;
    --popover-foreground: 215 20.2% 65.1%;

    --border: 216 34% 17%;
    --input: 216 34% 17%;

    --card: transparent;
    --card-foreground: 213 31% 91%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 1.2%;

    --secondary: 222.2 47.4% 11.2%;
    --secondary-foreground: 210 40% 98%;

    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;

    --ring: 216 34% 17%;

    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}
