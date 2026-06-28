// Portfolio data - Lại Minh Châu (Product Owner / Delivery Coordinator)
export interface ContactInfo {
    phone: string;
    email: string;
    location: string;
    experience: string;
}

export interface Skills {
    product: string[];
    partnership: string[];
    operations: string[];
    tools: string[];
    languages: string[];
}

export interface Experience {
    id: number;
    role: string;
    company: string;
    period: string;
    comicTitle: string;
    mission: string;
    achievements: string[];
    color: string;
}

export interface Project {
    title: string;
    role: string;
    tech: string;
    desc: string;
    feat: string;
    link?: string;
}

export interface HeroData {
    name: string;
    title: string;
    alias: string;
    contact: ContactInfo;
    summary: string;
    skills: Skills;
    experience: Experience[];
    projects: Project[];
}

export const heroData: HeroData = {
    name: "Lại Minh Châu",
    title: "PRODUCT OWNER",
    alias: "Phát triển Sản phẩm · Điều phối Delivery · Quản lý Đa chức năng",
    contact: {
        phone: "(+84) 971 528 015",
        email: "chau.lm1347@gmail.com",
        location: "TP. Hồ Chí Minh",
        experience: "4+ năm kinh nghiệm",
    },
    summary:
        "Không phải ai cũng có chức danh trước khi làm được việc — nhưng công việc luôn nói lên tất cả. Ở tuổi 25, tôi đã điều phối toàn bộ vòng đời delivery của một sản phẩm AI B2B và xây dựng hệ sinh thái đối tác từ con số không, đóng góp vào mức tăng trưởng doanh thu 50%. Tôi đang chủ động định hướng sự nghiệp sang lĩnh vực sản phẩm công nghệ — vì đó là công việc tôi đã thực sự làm.",
    skills: {
        product: [
            "Phân tích & Quản lý Yêu cầu",
            "Quản lý Backlog & Ưu tiên hóa",
            "Điều phối Đa chức năng",
            "Quản lý Tiến độ & Mốc đích",
            "Giao tiếp Stakeholder",
            "Viết User Story",
            "Tổ chức UAT & Triển khai",
            "Ổn định Hậu triển khai",
        ],
        partnership: [
            "Phối hợp Nhà cung cấp & Đối tác",
            "Điều phối Go-to-Market",
            "Vận hành Hệ sinh thái Đối tác",
            "Phát triển Kênh & Cộng đồng",
        ],
        operations: [
            "Thiết kế Quy trình & SOP",
            "Theo dõi KPI / OKR",
            "Báo cáo Dựa trên Dữ liệu",
        ],
        tools: ["Notion", "Excel / Google Sheets", "CRM", "Jira / Trello", "Zalo OA", "Figma"],
        languages: ["Tiếng Việt — Bản ngữ", "Tiếng Anh — VSTEP B2 (~785 TOEIC)"],
    },
    experience: [
        {
            id: 1,
            role: "Điều phối Dự án & Triển khai",
            company: "Epacific Telecom",
            period: "2025 – Tháng 2/2026",
            comicTitle: "AI VOICE AGENT — POC DOANH NGHIỆP ĐẦU TIÊN",
            mission: "Điều phối toàn bộ delivery sản phẩm AI Voice Agent B2B tích hợp Call Center doanh nghiệp.",
            achievements: [],
            color: "bg-yellow-300",
        },
        {
            id: 2,
            role: "Trưởng phòng Phát triển Đối tác",
            company: "Mat Bao Corp",
            period: "Tháng 11/2024 – Tháng 9/2025",
            comicTitle: "XÂY DỰNG HỆ SINH THÁI ĐỐI TÁC TỪ CON SỐ KHÔNG",
            mission: "Xây dựng và vận hành hệ sinh thái đối tác B2B của công ty từ đầu.",
            achievements: [],
            color: "bg-cyan-300",
        },
        {
            id: 3,
            role: "Giám đốc Vận hành",
            company: "IMARU Co., Ltd.",
            period: "Giữa 2022 – Tháng 2/2024",
            comicTitle: "HẠ TẦNG VẬN HÀNH CHO STARTUP GIAI ĐOẠN ĐẦU",
            mission: "Xây dựng hạ tầng vận hành và triển khai dự án từ đầu cho một startup thương mại.",
            achievements: [],
            color: "bg-pink-300",
        },
    ],
    projects: [
        {
            title: "Game Giáo dục STEM",
            role: "Product Owner & Business Analyst",
            tech: "Vision Brief, GDD, MoSCoW, Vertical Slice, Playtest, AI Tools",
            desc: "Dự án sản phẩm tự khởi xướng — dẫn dắt nhóm nhỏ đa chức năng qua toàn bộ vòng đời phát triển, từ ý tưởng đến prototype có thể chơi được.",
            feat: "Demo web chạy được, đã playtest với người dùng thực tế.",
        },
    ],
};
