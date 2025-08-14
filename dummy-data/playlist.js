// // playlists.js

// import CourseImage from "../src/assets/img-card.svg"
// export const playlists = [
//     {
//       name: "دورة React.js للمبتدئين",
//       description: "تعلم أساسيات React.js وبناء واجهات تفاعلية.",
//       image: CourseImage,
//       category: { name: "كورسات الويب", sub: "Front-End" },
//     },
//     {
//       name: "دورة Next.js متقدمة",
//       description: "بناء مواقع حديثة باستخدام Next.js.",
//       image: CourseImage,
//       category: { name: "كورسات الويب", sub: "Full-Stack" },
//     },
//     {
//       name: "دورة Laravel",
//       description: "برمجة مواقع قوية باستخدام Laravel.",
//       image: CourseImage,
//       category: { name: "كورسات الويب", sub: "Back-End" },
//     },
//     {
//       name: "دورة تصميم واجهات UI/UX",
//       description: "تصميم واجهات مستخدم جذابة وسهلة الاستخدام.",
//       image: CourseImage,
//       category: { name: "التصميم", sub: "UI/UX" },
//     },
//     {
//       name: "دورة Photoshop",
//       description: "تعلم تعديل الصور باحترافية.",
//       image: CourseImage,
//       category: { name: "الغرافيك", sub: "تصميم الصور" },
//     },
//     {
//       name: "دورة Premiere Pro",
//       description: "مونتاج الفيديوهات باحتراف باستخدام Premiere.",
//       image: CourseImage,
//       category: { name: "تحرير الفيديو", sub: "مونتاج" },
//     },
//     {
//       name: "دورة After Effects",
//       description: "تحريك النصوص والعناصر في الفيديوهات.",
//       image: CourseImage,
//       category: { name: "تحرير الفيديو", sub: "الموشن جرافيك" },
//     },
//     {
//       name: "دورة Illustrator",
//       description: "تصميم الشعارات والرسوميات المتجهة.",
//       image: CourseImage,
//       category: { name: "الغرافيك", sub: "تصميم الشعارات" },
//     },
//     {
//       name: "دورة HTML و CSS",
//       description: "أساسيات بناء صفحات الويب.",
//       image: CourseImage,
//       category: { name: "كورسات الويب", sub: "Front-End" },
//     },
//     {
//       name: "دورة Git و GitHub",
//       description: "إدارة الأكواد والمشاريع باستخدام Git و GitHub.",
//       image: CourseImage,
//       category: { name: "كورسات الويب", sub: "Version Control" },
//     },
//   ];
  


import CourseImage from "../src/assets/img-card.svg";

export const playlists = [
  {
    id: 1,
    name: "دورة React.js للمبتدئين",
    description: "تعلم أساسيات React.js وبناء واجهات تفاعلية.",
    image: CourseImage,
    category: { name: "كورسات الويب", sub: "Front-End" },
    videos: [
      {
        id: 1,
        title: "مقدمة عن React.js ومميزاته",
        description: "تعرف على مفهوم مكتبة React.js ولماذا تعتبر الخيار الأمثل لتطوير واجهات المستخدم.",
        duration: "15:30",
        thumbnail: CourseImage,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
         
      },
      {
        id: 2,
        title: "تثبيت بيئة العمل وتجهيز المشروع",
        description: "كيفية تثبيت Node.js وnpm وإنشاء مشروع React.js جديد باستخدام create-react-app.",
        duration: "22:15",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

      },
      {
        id: 3,
        title: "المكونات (Components) في React",
        description: "فهم مفهوم المكونات وكيفية بناء واجهات باستخدام مكونات قابلة لإعادة الاستخدام.",
        duration: "28:45",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 4,
        title: "الخصائص (Props) والحالة (State)",
        description: "الفرق بين Props وState وكيفية استخدامهما لإدارة البيانات في التطبيق.",
        duration: "34:10",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 5,
        title: "دورة حياة المكونات",
        description: "فهم دورة حياة المكونات في React واستخدام التوابع مثل componentDidMount وcomponentWillUnmount.",
        duration: "26:20",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 6,
        title: "التعامل مع الأحداث (Events)",
        description: "كيفية التعامل مع أحداث المستخدم مثل النقرات وإدخال البيانات.",
        duration: "19:35",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 7,
        title: "التوجيه (Routing) باستخدام React Router",
        description: "كيفية إضافة توجيه بين الصفحات في تطبيق React باستخدام React Router.",
        duration: "31:50",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 8,
        title: "الإتصال بالخادوم (API)",
        description: "كيفية جلب البيانات من خادوم خارجي باستخدام fetch أو axios.",
        duration: "25:40",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 9,
        title: "إدارة الحالة باستخدام Context API",
        description: "كيفية إدارة حالة التطبيق على مستوى عالمي باستخدام Context API.",
        duration: "29:15",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 10,
        title: "بناء مشروع متكامل",
        description: "بناء تطبيق ويب متكامل باستخدام جميع المفاهيم التي تعلمناها في الدورة.",
        duration: "45:20",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      }
    ],
    longDescription: "دورة شاملة لتعلم React.js من الصفر، تشمل مفاهيم مثل المكونات، الحالة، الخصائص، دورة الحياة، التوجيه، الإتصال بالخواديم، وإدارة الحالة. ستصبح قادرًا على بناء تطبيقات ويب تفاعلية احترافية باستخدام أحدث تقنيات React.js."
  },
  {
    id: 2,
    name: "دورة Next.js متقدمة",
    description: "بناء مواقع حديثة باستخدام Next.js.",
    image: CourseImage,
    category: { name: "كورسات الويب", sub: "Full-Stack" },
    videos: [
      {
        id: 1,
        title: "مقدمة عن Next.js وفوائده",
        description: "لماذا Next.js هو الإطار الأمثل لبناء تطبيقات React الحديثة.",
        duration: "18:25",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 2,
        title: "تجهيز مشروع Next.js",
        description: "كيفية إنشاء مشروع جديد وتجهيز هيكل الملفات.",
        duration: "16:40",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 3,
        title: "التوجيه الديناميكي",
        description: "كيفية إنشاء مسارات ديناميكية للصفحات.",
        duration: "24:50",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 4,
        title: "الإستدعاء المسبق للبيانات (Data Fetching)",
        description: "استخدام getStaticProps و getServerSideProps لجلب البيانات.",
        duration: "32:15",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 5,
        title: "التوليد الثابت (Static Generation)",
        description: "كيفية توليد صفحات ثابتة لتحسين الأداء.",
        duration: "27:30",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 6,
        title: "التوليد على الخادوم (Server Side Rendering)",
        description: "كيفية توليد الصفحات على الخادوم في كل طلب.",
        duration: "23:45",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 7,
        title: "التهيئة المخصصة (Custom Configuration)",
        description: "كيفية تخصيص إعدادات Next.js لتتناسب مع احتياجات مشروعك.",
        duration: "21:10",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 8,
        title: "واجهات برمجة التطبيقات (API Routes)",
        description: "بناء واجهات برمجة التطبيقات داخل تطبيق Next.js.",
        duration: "29:55",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 9,
        title: "تحسين الأداء (Performance Optimization)",
        description: "تقنيات متقدمة لتحسين أداء تطبيق Next.js.",
        duration: "35:20",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 10,
        title: "النشر (Deployment)",
        description: "كيفية نشر تطبيق Next.js على Vercel أو خواديم أخرى.",
        duration: "19:30",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      }
    ],
    longDescription: "هذه الدورة ستأخذك إلى المستوى المتقدم في Next.js، حيث ستتعلم التوجيه الديناميكي، الإستدعاء المسبق للبيانات، التهيئة المخصصة، التوليد الثابت والتوليد على الخادوم، بناء واجهات برمجة التطبيقات، وتحسين الأداء. بنهاية الدورة ستكون قادرًا على بناء تطبيقات ويب حديثة وكاملة باستخدام Next.js."
  },
  {
    id: 3,
    name: "دورة Laravel",
    description: "برمجة مواقع قوية باستخدام Laravel.",
    image: CourseImage,
    category: { name: "كورسات الويب", sub: "Back-End" },
    videos: [
      {
        id: 1,
        title: "مقدمة عن Laravel وإعداد البيئة",
        description: "تعرف على إطار العمل Laravel وتجهيز بيئة التطوير.",
        duration: "20:10",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 2,
        title: "نمط MVC في Laravel",
        description: "فهم نمط Model-View-Controller وكيفية تطبيقه في Laravel.",
        duration: "25:30",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 3,
        title: "التوجيه (Routing)",
        description: "كيفية تعريف المسارات والتعامل مع الطلبات.",
        duration: "18:45",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 4,
        title: "التحكم (Controllers)",
        description: "إنشاء وتحكم في المنطق الخاص بالتطبيق باستخدام Controllers.",
        duration: "22:20",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 5,
        title: "قواعد البيانات والهجرة (Migrations)",
        description: "كيفية التعامل مع قواعد البيانات وإنشاء جداول باستخدام Migrations.",
        duration: "27:50",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 6,
        title: "النماذج (Models) و Eloquent ORM",
        description: "استخدام Eloquent ORM للتفاعل مع قاعدة البيانات.",
        duration: "31:15",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 7,
        title: "المصادقة (Authentication)",
        description: "إضافة نظام مصادقة للمستخدمين.",
        duration: "24:40",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 8,
        title: "العلاقات بين الجداول",
        description: "كيفية تعريف العلاقات بين النماذج المختلفة.",
        duration: "28:25",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 9,
        title: "واجهات برمجة التطبيقات (API)",
        description: "بناء واجهات برمجة التطبيقات RESTful باستخدام Laravel.",
        duration: "33:10",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 10,
        title: "النشر والإنتاجية",
        description: "كيفية نشر تطبيق Laravel على خادوم حقيقي.",
        duration: "19:55",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      }
    ],
    longDescription: "دورة متكاملة لتعلم إطار العمل Laravel من الصفر وحتى الاحتراف. ستتعلم كيفية بناء تطبيقات ويب قوية وآمنة باستخدام أحدث إصدارات Laravel، مع التركيز على الممارسات الأفضل في التطوير."
  },
  {
    id: 4,
    name: "دورة تصميم واجهات UI/UX",
    description: "تصميم واجهات مستخدم جذابة وسهلة الاستخدام.",
    image: CourseImage,
    category: { name: "التصميم", sub: "UI/UX" },
    videos: [
      {
        id: 1,
        title: "مقدمة في تجربة المستخدم UI/UX",
        description: "الفرق بين UI وUX ومبادئ التصميم الأساسية.",
        duration: "17:30",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 2,
        title: "أبحاث المستخدم (User Research)",
        description: "كيفية إجراء أبحاث المستخدم وفهم احتياجاتهم.",
        duration: "23:45",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 3,
        title: "التصميم السلكي (Wireframing)",
        description: "إنشاء تصميمات سلكية لتخطيط الهيكل الأساسي.",
        duration: "19:20",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 4,
        title: "النماذج الأولية (Prototyping)",
        description: "بناء نماذج أولية تفاعلية باستخدام أدوات مثل Figma.",
        duration: "25:15",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 5,
        title: "مبادئ التصميم المرئي",
        description: "الألوان، الطباعة، التباعد، والتسلسل الهرمي البصري.",
        duration: "28:40",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 6,
        title: "تصميم متجاوب (Responsive Design)",
        description: "كيفية تصميم واجهات تعمل على جميع أحجام الشاشات.",
        duration: "22:25",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 7,
        title: "اختبار المستخدم (User Testing)",
        description: "كيفية إجراء اختبارات المستخدم وجمع الملاحظات.",
        duration: "20:50",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 8,
        title: "أنظمة التصميم (Design Systems)",
        description: "بناء أنظمة تصميم متسقة وقابلة للتطوير.",
        duration: "26:35",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 9,
        title: "تحسين تجربة المستخدم",
        description: "تقنيات لتحسين تجربة المستخدم وجعلها أكثر سلاسة.",
        duration: "24:10",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 10,
        title: "تقديم التصميم للعملاء",
        description: "كيفية عرض أعمالك التصميمية بشكل احترافي.",
        duration: "18:45",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      }
    ],
    longDescription: "دورة شاملة تغطي جميع جوانب تصميم واجهات المستخدم وتجربة المستخدم. ستتعلم العملية الكاملة من البحث والتخطيط إلى التصميم المرئي والاختبار. بنهاية الدورة ستكون قادرًا على تصميم واجهات مستخدم جذابة وسهلة الاستخدام."
  },
  {
    id: 5,
    name: "دورة Photoshop",
    description: "تعلم تعديل الصور باحترافية.",
    image: CourseImage,
    category: { name: "الغرافيك", sub: "تصميم الصور" },
    videos: [
      {
        id: 1,
        title: "واجهة البرنامج وأدوات الأساسية",
        description: "التعرف على واجهة Photoshop والأدوات الأساسية.",
        duration: "19:15",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 2,
        title: "إدارة الطبقات (Layers)",
        description: "فهم نظام الطبقات وكيفية تنظيم العمل.",
        duration: "22:40",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 3,
        title: "التحديدات (Selections)",
        description: "تقنيات التحديد الدقيقة باستخدام أدوات مختلفة.",
        duration: "25:20",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 4,
        title: "أدوات الرسم والتلوين",
        description: "كيفية استخدام أدوات الرسم والتلوين باحترافية.",
        duration: "20:55",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 5,
        title: "التعديلات اللونية",
        description: "ضبط الألوان والإضاءة للصور.",
        duration: "27:30",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 6,
        title: "أدوات النصوص (Text Tools)",
        description: "إضافة وتعديل النصوص بشكل إبداعي.",
        duration: "18:25",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 7,
        title: "الفلاتر والتأثيرات",
        description: "استخدام الفلاتر لإضافة تأثيرات مميزة.",
        duration: "23:10",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 8,
        title: "إزالة العناصر غير مرغوب فيها",
        description: "تقنيات متقدمة لإزالة العناصر من الصور.",
        duration: "21:45",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 9,
        title: "دمج الصور (Compositing)",
        description: "كيفية دمج عدة صور في عمل فني واحد.",
        duration: "29:50",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 10,
        title: "حفظ وتصدير المشاريع",
        description: "أفضل الممارسات لحفظ وتصدير أعمالك.",
        duration: "16:35",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      }
    ],
    longDescription: "دورة متكاملة لتعلم Adobe Photoshop من البداية إلى المستوى المتقدم. ستتعلم جميع الأدوات والتقنيات اللازمة لتعديل الصور باحترافية وإنشاء تصاميم جرافيكية مذهلة. الدورة تشمل مشاريع عملية لتعزيز مهاراتك."
  },
  {
    id: 6,
    name: "دورة Premiere Pro",
    description: "مونتاج الفيديوهات باحتراف باستخدام Premiere.",
    image: CourseImage,
    category: { name: "تحرير الفيديو", sub: "مونتاج" },
    videos: [
      {
        id: 1,
        title: "واجهة البرنامج وأدوات الأساسية",
        description: "التعرف على واجهة Premiere Pro ولوحات العمل الأساسية.",
        duration: "18:40",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 2,
        title: "استيراد وتنظيم المواد",
        description: "كيفية استيراد المواد وتنظيمها في المشروع.",
        duration: "16:25",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 3,
        title: "أساسيات المونتاج",
        description: "تعلم أدوات القطع والتحرير الأساسية.",
        duration: "24:30",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 4,
        title: "إضافة المؤثرات الانتقالية",
        description: "استخدام المؤثرات الانتقالية بين المشاهد.",
        duration: "19:50",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 5,
        title: "تصحيح الألوان",
        description: "تقنيات تصحيح الألوان وتحسين جودة الصورة.",
        duration: "26:45",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 6,
        title: "إضافة النصوص والعناوين",
        description: "إنشاء عناوين ونصوص متحركة.",
        duration: "22:15",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 7,
        title: "مؤثرات الفيديو",
        description: "إضافة وتعديل مؤثرات الفيديو.",
        duration: "25:30",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 8,
        title: "مونتاج الصوت",
        description: "تحسين وتعديل الصوت في الفيديو.",
        duration: "20:20",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 9,
        title: "الرسوم المتحركة الأساسية",
        description: "إنشاء حركات بسيطة للعناصر في الفيديو.",
        duration: "23:55",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 10,
        title: "تصدير الفيديو النهائي",
        description: "إعدادات التصدير للحصول على أفضل جودة.",
        duration: "17:10",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      }
    ],
    longDescription: "دورة شاملة لتعلم مونتاج الفيديو باستخدام Adobe Premiere Pro. ستتعلم من الأساسيات إلى التقنيات المتقدمة في المونتاج، التصحيح اللوني، إضافة المؤثرات، والعناوين. بنهاية الدورة ستكون قادرًا على إنتاج فيديوهات احترافية."
  },
  {
    id: 7,
    name: "دورة After Effects",
    description: "تحريك النصوص والعناصر في الفيديوهات.",
    image: CourseImage,
    category: { name: "تحرير الفيديو", sub: "الموشن جرافيك" },
    videos: [
      {
        id: 1,
        title: "واجهة البرنامج وأساسيات العمل",
        description: "التعرف على واجهة After Effects وأساسيات الرسوم المتحركة.",
        duration: "20:15",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 2,
        title: "إنشاء وتحرير الطبقات",
        description: "كيفية إنشاء وإدارة الطبقات في المشروع.",
        duration: "18:30",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 3,
        title: "الرسوم المتحركة الأساسية",
        description: "إنشاء حركات بسيطة باستخدام Position, Scale, Rotation.",
        duration: "22:45",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 4,
        title: "تحريك النصوص",
        description: "تقنيات متقدمة لتحريك النصوص.",
        duration: "26:20",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 5,
        title: "المسارات (Masks)",
        description: "استخدام المسارات لعزل العناصر وإنشاء تأثيرات.",
        duration: "24:50",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 6,
        title: "تتبع الحركة (Motion Tracking)",
        description: "كيفية تتبع الحركة في الفيديو وإرفاق العناصر.",
        duration: "29:35",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 7,
        title: "المؤثرات البصرية",
        description: "إضافة وتعديل المؤثرات البصرية.",
        duration: "25:40",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 8,
        title: "التعبيرات (Expressions)",
        description: "استخدام التعبيرات لأتمتة الحركات المعقدة.",
        duration: "31:15",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 9,
        title: "مشروع موشن جرافيك متكامل",
        description: "بناء مشروع متكامل لموشن جرافيك.",
        duration: "35:20",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 10,
        title: "التقديم والتصدير",
        description: "كيفية تقديم وتصدير مشاريع After Effects.",
        duration: "19:25",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      }
    ],
    longDescription: "دورة متقدمة لتعلم الرسوم المتحركة والموشن جرافيك باستخدام Adobe After Effects. ستتعلم كيفية تحريك النصوص والعناصر، استخدام المؤثرات البصرية، تتبع الحركة، والتعبيرات. بنهاية الدورة ستكون قادرًا على إنشاء فيديوهات موشن جرافيك احترافية."
  },
  {
    id: 8,
    name: "دورة Illustrator",
    description: "تصميم الشعارات والرسوميات المتجهة.",
    image: CourseImage,
    category: { name: "الغرافيك", sub: "تصميم الشعارات" },
    videos: [
      {
        id: 1,
        title: "واجهة البرنامج وأدوات الأساسية",
        description: "التعرف على واجهة Illustrator والأدوات الأساسية.",
        duration: "17:50",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 2,
        title: "أدوات الرسم المتجه",
        description: "استخدام أدوات Pen و Pencil لرسم الأشكال المتجهة.",
        duration: "23:25",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 3,
        title: "الأشكال الأساسية والأدوات",
        description: "إنشاء وتعديل الأشكال الأساسية باستخدام الأدوات المختلفة.",
        duration: "19:40",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 4,
        title: "التلوين والتدرجات",
        description: "تطبيق الألوان والتدرجات على الرسوميات.",
        duration: "21:15",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 5,
        title: "النصوص وتعديله",
        description: "إضافة وتعديل النصوص في التصاميم.",
        duration: "18:20",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 6,
        title: "أدوات التحديد والتحويل",
        description: "تقنيات التحديد والتحويل الدقيق للعناصر.",
        duration: "22:55",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 7,
        title: "تصميم الشعارات",
        description: "مبادئ تصميم الشعارات وإنشاء شعار احترافي.",
        duration: "26:30",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 8,
        title: "الفرش والأنماط",
        description: "استخدام الفرش والأنماط لإضافة تفاصيل للتصاميم.",
        duration: "24:45",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 9,
        title: "تصدير الأعمال",
        description: "كيفية تصدير التصاميم للطباعة والويب.",
        duration: "20:10",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 10,
        title: "مشروع تصميم متكامل",
        description: "تصميم هوية بصرية متكاملة لشركة.",
        duration: "32:25",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      }
    ],
    longDescription: "دورة متكاملة لتعلم Adobe Illustrator لتصميم الرسوميات المتجهة والشعارات. ستتعلم جميع الأدوات والتقنيات اللازمة لإنشاء تصاميم جرافيكية احترافية قابلة للتطوير دون فقدان الجودة. الدورة تشمل مشاريع عملية لتعزيز مهاراتك."
  },
  {
    id: 9,
    name: "دورة HTML و CSS",
    description: "أساسيات بناء صفحات الويب.",
    image: CourseImage,
    category: { name: "كورسات الويب", sub: "Front-End" },
    videos: [
      {
        id: 1,
        title: "مقدمة في تطوير الويب",
        description: "تعرف على أساسيات تطوير الويب وأدوات العمل.",
        duration: "14:20",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 2,
        title: "أساسيات HTML",
        description: "تعلم بناء هيكل الصفحة باستخدام عناصر HTML.",
        duration: "22:35",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 3,
        title: "أساسيات CSS",
        description: "كيفية تنسيق الصفحات باستخدام CSS.",
        duration: "25:50",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 4,
        title: "نماذج HTML (Forms)",
        description: "إنشاء وتصميم نماذج تفاعلية.",
        duration: "19:15",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 5,
        title: "التخطيط باستخدام Flexbox",
        description: "بناء تخطيطات مرنة باستخدام Flexbox.",
        duration: "28:40",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 6,
        title: "التخطيط باستخدام Grid",
        description: "إنشاء تخطيطات معقدة باستخدام CSS Grid.",
        duration: "31:25",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 7,
        title: "التصميم المتجاوب (Responsive Design)",
        description: "كيفية جعل المواقع تعمل على جميع الأجهزة.",
        duration: "24:30",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 8,
        title: "التحويلات والحركات",
        description: "إضافة تحويلات وحركات باستخدام CSS.",
        duration: "20:45",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 9,
        title: "أفضل الممارسات في التصميم",
        description: "ممارسات تصميمية لتحسين تجربة المستخدم.",
        duration: "23:10",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 10,
        title: "بناء موقع متكامل",
        description: "بناء موقع ويب متكامل باستخدام ما تعلمناه.",
        duration: "36:20",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      }
    ],
    longDescription: "دورة أساسية لتعلم بناء صفحات الويب باستخدام HTML وCSS. ستتعلم كيفية بناء هيكل الصفحات، تنسيقها، جعلها متجاوبة مع جميع الأجهزة، وإضافة تحويلات وحركات. بنهاية الدورة ستكون قادرًا على بناء مواقع ويب حديثة وجذابة."
  },
  {
    id: 10,
    name: "دورة Git و GitHub",
    description: "إدارة الأكواد والمشاريع باستخدام Git و GitHub.",
    image: CourseImage,
    category: { name: "كورسات الويب", sub: "Version Control" },
    videos: [
      {
        id: 1,
        title: "مقدمة في أنظمة التحكم بالنسخ",
        description: "لماذا نحتاج أنظمة التحكم بالنسخ ومفهوم Git.",
        duration: "16:30",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 2,
        title: "تثبيت Git وتجهيز البيئة",
        description: "كيفية تثبيت Git وتجهيزه للعمل.",
        duration: "15:20",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 3,
        title: "الأوامر الأساسية",
        description: "git init, git add, git commit - الأوامر الأساسية.",
        duration: "19:45",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 4,
        title: "الفروع (Branches)",
        description: "كيفية إنشاء وإدارة الفروع.",
        duration: "22:10",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 5,
        title: "دمج الفروع (Merging)",
        description: "دمج الفروع وحل التعارضات.",
        duration: "25:35",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 6,
        title: "مقدمة عن GitHub",
        description: "ما هو GitHub وكيفية استخدامه.",
        duration: "18:50",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 7,
        title: "العمل مع Remote Repositories",
        description: "git clone, git push, git pull - التعامل مع المستودعات البعيدة.",
        duration: "20:25",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 8,
        title: "سير العمل (Workflow)",
        description: "تنظيم سير العمل في المشاريع المشتركة.",
        duration: "23:40",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 9,
        title: "GitHub Actions",
        description: "أتمتة العمليات باستخدام GitHub Actions.",
        duration: "26:55",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: 10,
        title: "أفضل الممارسات",
        description: "أفضل الممارسات في استخدام Git وGitHub.",
        duration: "21:10",
        thumbnail: CourseImage,
         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      }
    ],
    longDescription: "دورة شاملة لتعلم Git وGitHub لإدارة المشاريع البرمجية. ستتعلم أساسيات أنظمة التحكم بالنسخ، كيفية استخدام Git لإدارة الكود، والعمل مع GitHub للمشاريع الفردية والجماعية. بنهاية الدورة ستكون قادرًا على إدارة مشاريعك البرمجية بكفاءة."
  }
];