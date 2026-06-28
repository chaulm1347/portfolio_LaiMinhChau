// Hero data extracted from CV - Le Duy Khanh Portfolio
export interface ContactInfo {
    phone: string;
    email: string;
    location: string;
    github: string;
}

export interface Skills {
    languages: string[];
    backend: string[];
    frontend: string[];
    realtime: string[];
    database: string[];
    ops: string[];
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

export interface SkillDetailed {
    name: string;
    category: 'backend' | 'frontend' | 'languages' | 'realtime' | 'database' | 'ops';
    years: number;
    level: number; // 0-100
    desc: string;
}

export interface HeroData {
    name: string;
    title: string;
    alias: string;
    contact: ContactInfo;
    summary: string;
    skillsDetailed: SkillDetailed[];
    skills: Skills;
    experience: Experience[];
    projects: Project[];
}

export const heroData: HeroData = {
    name: "Lê Duy Khánh",
    title: "FULLSTACK DEVELOPER",
    alias: "The System Architect",
    contact: {
        phone: "0398101219",
        email: "khanhduy4569@gmail.com",
        location: "Binh Tan, Ho Chi Minh City",
        github: "github.com/leduykhanh1611",
    },
    summary:
        "Một Kỹ sư Sản phẩm đa năng (Versatile Product Engineer) với khả năng chiến đấu toàn diện trong vòng đời phát triển phần mềm. Thành thạo các vũ khí hạng nặng như ReactJS, NestJS và .NET. Chuyên gia phân tích nghiệp vụ phức tạp và chuyển hóa chúng thành các giải pháp kỹ thuật tối ưu.",
    skillsDetailed: [
        // Backend / Languages
        { name: ".NET 8.0", category: "backend", years: 2, level: 85, desc: "ASP.NET Core, Entity Framework, Clean Architecture" },
        { name: "NestJS", category: "backend", years: 1.5, level: 90, desc: "Node.js framework, Microservices, REST & GraphQL APIs" },
        { name: "TypeScript", category: "languages", years: 2, level: 90, desc: "Type-safe JavaScript, Generics, Decorators" },
        { name: "C#", category: "languages", years: 2, level: 80, desc: "OOP, LINQ, Async/Await patterns" },
        { name: "SQL", category: "languages", years: 3, level: 85, desc: "T-SQL, PL/pgSQL, Query optimization" },

        // Frontend
        { name: "ReactJS", category: "frontend", years: 2, level: 85, desc: "Hooks, Context, Redux, Component architecture" },
        { name: "Next.js", category: "frontend", years: 1, level: 80, desc: "SSR, App Router, API Routes, SEO optimization" },
        { name: "Tailwind CSS", category: "frontend", years: 1.5, level: 90, desc: "Utility-first CSS, Responsive design, Custom themes" },

        // Real-time & VoIP
        { name: "LiveKit", category: "realtime", years: 0.5, level: 75, desc: "WebRTC SFU, Video/Audio streaming, SIP integration" },
        { name: "FreeSWITCH", category: "realtime", years: 0.5, level: 70, desc: "VoIP PBX, SIP trunking, Call routing" },
        { name: "WebRTC", category: "realtime", years: 1, level: 75, desc: "Real-time communication, Peer-to-peer, Signaling" },
        { name: "Socket.io", category: "realtime", years: 1.5, level: 85, desc: "Real-time events, Rooms, Namespaces" },

        // Database
        { name: "PostgreSQL", category: "database", years: 2, level: 85, desc: "Advanced queries, Indexing, Partitioning" },
        { name: "MongoDB", category: "database", years: 1.5, level: 80, desc: "Aggregation, Sharding, Replica sets" },
        { name: "Redis", category: "database", years: 1.5, level: 85, desc: "Caching, Pub/Sub, Session management" },
        { name: "Elasticsearch", category: "database", years: 1, level: 75, desc: "Full-text search, Analytics, 50+ filters" },

        // DevOps
        { name: "Docker", category: "ops", years: 2, level: 80, desc: "Containerization, Docker Compose, Multi-stage builds" },
        { name: "GitHub Actions", category: "ops", years: 1, level: 75, desc: "CI/CD pipelines, Automated testing & deployment" },
        { name: "Nginx", category: "ops", years: 1.5, level: 75, desc: "Reverse proxy, Load balancing, SSL termination" },
    ],
    skills: {
        languages: ["C#", "TypeScript", "JavaScript", "SQL (T-SQL, PL/pgSQL)"],
        backend: [".NET 8.0", "NestJS (Node.js)", "Clean Architecture", "Microservices"],
        frontend: ["ReactJS", "NextJS", "Tailwind"],
        realtime: ["LiveKit", "FreeSWITCH", "Socket.io", "WebRTC"],
        database: ["PostgreSQL", "MSSQL", "MongoDB", "Redis", "Elasticsearch"],
        ops: ["Docker", "Nginx", "GitHub Actions", "CI/CD"],
    },
    experience: [
        {
            id: 1,
            role: "Product Engineer",
            company: "Epacific Telecom",
            period: "Apr 2025 - Present",
            comicTitle: "THE VOICE VANGUARD",
            mission: "Xây dựng hệ thống định tuyến cuộc gọi thông minh tích hợp AI Voice Agent.",
            achievements: [
                "Kiến tạo hệ thống B2B VoIP sử dụng FreeSWITCH & LiveKit xử lý hàng ngàn cuộc gọi mỗi ngày.",
                "Kết nối thế giới WebRTC và SIP (FusionPBX) để chuyển giao mượt mà giữa AI và con người.",
                "Giám sát hạ tầng 24/7, đảm bảo hệ thống bất khả xâm phạm.",
                "Trực tiếp tham chiến hỗ trợ khách hàng MVP, xử lý sự cố production.",
            ],
            color: "bg-yellow-300",
        },
        {
            id: 2,
            role: "Tech Lead",
            company: "CHUTA (Project: ALOPER)",
            period: "Dec 2024 - Feb 2025",
            comicTitle: "THE MICROSERVICES REVOLUTION",
            mission: "Chỉ huy cuộc di cư vĩ đại từ .NET Monolith sang NestJS Microservices.",
            achievements: [
                "Tách rời các domain cốt lõi (User, Payment, Booking) giúp hệ thống mở rộng 20%.",
                "Triển khai kiến trúc Event-Driven với Redis Pub/Sub, giải quyết vấn đề Race Conditions.",
                "Lãnh đạo biệt đội 5 developers, áp dụng GitFlow và CI/CD giảm 40% thời gian release.",
                "Thiết lập lá chắn chất lượng Code Review & Unit Testing.",
            ],
            color: "bg-cyan-300",
        },
        {
            id: 3,
            role: "Backend Developer",
            company: "CHUTA (Project: ALOPER)",
            period: "Aug 2024 - Nov 2024",
            comicTitle: "THE FINTECH FOUNDATION",
            mission: "Xây dựng động cơ tài chính chính xác tuyệt đối.",
            achievements: [
                "Chế tạo Module Tính Toán Hoa Hồng & Hợp Đồng với độ chính xác tài chính 100%.",
                "Tối ưu hóa tìm kiếm Bất động sản với Elasticsearch (độ trễ < 200ms).",
                "Thiết kế kiến trúc Hybrid Database (MSSQL + MongoDB) cân bằng giữa toàn vẹn dữ liệu và hiệu năng.",
            ],
            color: "bg-pink-300",
        },
    ],
    projects: [
        {
            title: "Car Care Center Manager",
            role: "Team Leader",
            tech: "Node.js, MongoDB, React Native, Redis",
            desc: "Giải pháp chuyển đổi số toàn diện cho Garage ô tô.",
            feat: "Thuật toán Service Timeline thời gian thực & Thanh toán PayOS.",
            link: "github.com/leduykhanh1611/KLTN_BE",
        },
        {
            title: "IELTS Prep Platform",
            role: "Freelance Fullstack",
            tech: "NestJS, ReactJS, PostgreSQL, Redis",
            desc: "Nền tảng E-learning hiệu năng cao mô phỏng thi thật.",
            feat: "Hệ thống chấm điểm tự động và phản hồi tức thì.",
        },
        {
            title: "Comic Portfolio Website",
            role: "Personal Project",
            tech: "Next.js 14, TypeScript, Tailwind CSS",
            desc: "Website portfolio cá nhân với giao diện comic độc đáo.",
            feat: "Multi-language support, Comic-style animations & Responsive design.",
            link: "github.com/leduykhanh1611/portfolioldk",
        },
        {
            title: "E-commerce Mobile App",
            role: "Mobile Developer",
            tech: "React Native, Node.js, MongoDB, Firebase",
            desc: "Ứng dụng mua sắm trực tuyến với thanh toán đa dạng.",
            feat: "Push notifications, Order tracking & Payment gateway integration.",
        },
    ],
};
