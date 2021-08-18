import Accounting from "../image/icons/accounts1.png";
import Ausbildung from "../image/icons/ausbuildung1.png";
import Consultation from "../image/icons/consultatio1.png";
import Establishment from "../image/icons/office1.png";
import Audit from "../image/icons/audit.png";
import Certificate from "../image/icons/certificate.png";


const miniData = [
    {
        image: Accounting,
        title: "المحاسبة",
        desc: "اعداد القوائم المالية والتقارير المحاسبية الشهرية",
        link: "/service/accounting",
    },
    {
        image: Establishment,
        title: "خدمات الـتأسيس",
        desc: "أنشاء النظام المحاسبي للشركة",
        link: "/service/establishment",
    },
    {
        image: Consultation,
        title: "الاستشارات",
        desc: "اعداد دراسة الجدوى الاقتصادية للمنشأة بالتعاون مع فريق مختص",
        link: "/service/consultation",
    },
    {
        image: Audit,
        title: "التدقيق",
        desc: "تدقيق البيانات المالية والتأكد من صحتها",
        link: "/service/audit",
    },
    {
        image: Certificate,
        title: "خدمات القانونية",
        desc: "تأسيس الشركات (شخصية،محدودة المسؤولية،مساهمة مغفلة)",
        link: "/service/legal",
    },
    {
        image: Ausbildung,
        title: "التدريب",
        desc: "تقديم خدمة التدريب في المجال المالي",
        link: "/service/training",
    },
];

const data = [
    {
        id: 1,
        type: "accounting",
        title: "المحاسبة",
        list: ["اعداد القوائم المالية والتقارير المحاسبية الشهرية"
            , "متابعة وتسجيل العمليات المحاسبية اليومية"
            , "حساب تكاليف المواد التشغيلية",
            "اعداد الميزانية التقديرية ومتابعة الانحرافات وتصحيحها",
            "تقديم الميزانية الختامية للدورة المستندية"],
        img: "https://hadiaccounting.com/wp-content/uploads/2021/05/Accounting-min.png",
    },
    {
        id: 2,
        type: "establishment",
        title: "خدمات الـتأسيس",
        list: ["أنشاء النظام المحاسبي للشركة",
            "تصميم الدورة المستندية للشركة",
            "تقديم نقطة التعادل (نقطة الصفر )",
            "تصميم خطة عمل إدارية للشركة"],
        img: "https://hadiaccounting.com/wp-content/uploads/2021/05/5324e8989fad8d7610ebbf8350edc7d9-min.jpg",
    },
    {
        id: 3,
        type: "audit",
        title: "التدقيق",
        list: ["تدقيق البيانات المالية والتأكد من صحتها",
            "تدقيق التكاليف والتأكد من مطابقة التكاليف الفعلية للتكاليف الورقية"],
        img: "https://hadiaccounting.com/wp-content/uploads/2021/05/GettyImages-976512548-762d755231df4f28add7135c28f5644a.jpg",
    },
    {
        id: 4,
        type: "consultation",
        title: " الاستشارات",
        list: ["اعداد دراسة الجدوى الاقتصادية للمنشأة بالتعاون مع فريق مختص",
            "المساعدة في  التراخيص بالتعاون مع المحاسب القانوني",
            "اقتراح البرنامج المحاسبي اللازم بما يتناسب مع عمل الشركة"],
        img: "https://hadiaccounting.com/wp-content/uploads/2021/05/welcome-2-min.jpg",
    },
    {
        id: 5,
        type: "legal",
        title: "خدمات القانونية",
        list: ["تأسيس الشركات (شخصية،محدودة المسؤولية،مساهمة مغفلة)",
            "المحاسبة القانونية في تركيا"],
        img: "https://hadiaccounting.com/wp-content/uploads/2021/06/bank-min2-1.jpg",
    },
    {
        id: 6,
        type: "training",
        title: "التدريب",
        list: ["تقديم خدمة التدريب في المجال المالي"],
        img: "https://hadiaccounting.com/wp-content/uploads/2021/05/unnamed-min.jpg",
    },
]



export { miniData, data }