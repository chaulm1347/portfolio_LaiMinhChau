// Translations for Vietnamese and English

export type Locale = "vi" | "en";

export interface Translations {
    // Hero Section
    issueLabel: string;
    heroSignal: string;

    // Section Headers
    superpowers: string;
    theSagaSoFar: string;
    sideQuests: string;

    // Skills Section
    heavyArtillery: string;
    visualShield: string;
    telepathy: string;
    theVault: string;

    // Experience
    mission: string;

    // Projects
    battleLog: string;
    viewSourceCode: string;

    // Footer
    readyToJoinForces: string;
    summonMessage: string;
    sendSignal: string;
    designedBy: string;

    // Summary
    summary: string;
}

export const translations: Record<Locale, Translations> = {
    vi: {
        // Hero Section
        issueLabel: "SỐ #1: NGUỒN GỐC",
        heroSignal: "TÍN HIỆU ANH HÙNG",

        // Section Headers
        superpowers: "Siêu Năng Lực",
        theSagaSoFar: "Hành Trình Đến Nay",
        sideQuests: "Nhiệm Vụ Phụ",

        // Skills Section
        heavyArtillery: "VŨ KHÍ HẠNG NẶNG (Backend)",
        visualShield: "KHIÊN HIỂN THỊ (Frontend)",
        telepathy: "THẦN GIAO CÁCH CẢM (VoIP & Real-time)",
        theVault: "KHO BÁU (Data & Ops)",

        // Experience
        mission: "NHIỆM VỤ",

        // Projects
        battleLog: "Nhật Ký Chiến Đấu",
        viewSourceCode: "Xem Mã Nguồn",

        // Footer
        readyToJoinForces: "SẴN SÀNG GIA NHẬP?",
        summonMessage: "Triệu hồi Lê Duy Khánh cho nhiệm vụ tiếp theo của bạn!",
        sendSignal: "GỬI TÍN HIỆU",
        designedBy: "© 2026 Thiết kế bởi AI Sidekick của bạn",

        // Summary
        summary: "Một Kỹ sư Sản phẩm đa năng (Versatile Product Engineer) với khả năng chiến đấu toàn diện trong vòng đời phát triển phần mềm. Thành thạo các vũ khí hạng nặng như ReactJS, NestJS và .NET. Chuyên gia phân tích nghiệp vụ phức tạp và chuyển hóa chúng thành các giải pháp kỹ thuật tối ưu.",
    },
    en: {
        // Hero Section
        issueLabel: "ISSUE #1: THE ORIGIN",
        heroSignal: "HERO SIGNAL",

        // Section Headers
        superpowers: "Superpowers",
        theSagaSoFar: "The Saga So Far",
        sideQuests: "Side Quests",

        // Skills Section
        heavyArtillery: "HEAVY ARTILLERY (Backend)",
        visualShield: "VISUAL SHIELD (Frontend)",
        telepathy: "TELEPATHY (VoIP & Real-time)",
        theVault: "THE VAULT (Data & Ops)",

        // Experience
        mission: "MISSION",

        // Projects
        battleLog: "Battle Log",
        viewSourceCode: "View Source Code",

        // Footer
        readyToJoinForces: "READY TO JOIN FORCES?",
        summonMessage: "Summon Le Duy Khanh for your next mission!",
        sendSignal: "SEND SIGNAL",
        designedBy: "© 2026 Designed by Your AI Sidekick",

        // Summary
        summary: "A versatile Product Engineer with comprehensive combat skills throughout the software development lifecycle. Master of heavy weapons like ReactJS, NestJS, and .NET. Expert in analyzing complex business requirements and transforming them into optimal technical solutions.",
    },
};

// Experience data translations
export interface ExperienceTranslation {
    comicTitle: string;
    mission: string;
    achievements: string[];
}

export const experienceTranslations: Record<Locale, ExperienceTranslation[]> = {
    vi: [
        {
            comicTitle: "THE VOICE VANGUARD",
            mission: "Xây dựng hệ thống định tuyến cuộc gọi thông minh tích hợp AI Voice Agent, phục vụ hàng nghìn doanh nghiệp B2B.",
            achievements: [
                "Kiến trúc & phát triển hệ thống B2B VoIP sử dụng FreeSWITCH & LiveKit, xử lý ổn định hàng ngàn cuộc gọi đồng thời mỗi ngày với uptime 99.9%.",
                "Thiết kế và triển khai cầu nối giữa WebRTC và SIP (FusionPBX), cho phép chuyển giao mượt mà cuộc gọi giữa AI Agent và nhân viên thực với độ trễ < 100ms.",
                "Xây dựng hệ thống giám sát hạ tầng 24/7 với Prometheus & Grafana, thiết lập alerting tự động qua Telegram/Slack để phản hồi sự cố trong < 5 phút.",
                "Phát triển Admin Dashboard với ReactJS để quản lý cấu hình SIP Trunk, theo dõi call analytics và báo cáo real-time.",
                "Tích hợp Recording & Transcription tự động cho tất cả cuộc gọi, lưu trữ an toàn trên S3-compatible storage.",
                "Hỗ trợ trực tiếp khách hàng MVP, xử lý sự cố production và đảm bảo SLA cam kết với đối tác.",
            ],
        },
        {
            comicTitle: "THE MICROSERVICES REVOLUTION",
            mission: "Chỉ huy cuộc chuyển đổi kiến trúc quy mô lớn từ .NET Monolith sang NestJS Microservices cho nền tảng bất động sản.",
            achievements: [
                "Dẫn dắt việc tách rời Monolith thành 8 Microservices độc lập (User, Auth, Payment, Booking, Property, Commission, Notification, Analytics), cải thiện khả năng scale 300%.",
                "Thiết kế và triển khai API Gateway với Kong, xử lý rate limiting, authentication, và request routing cho toàn bộ hệ thống.",
                "Triển khai kiến trúc Event-Driven với Redis Pub/Sub & RabbitMQ, giải quyết triệt để vấn đề Race Conditions trong xử lý thanh toán.",
                "Xây dựng hệ thống Saga Pattern cho các transaction phân tán, đảm bảo data consistency across services.",
                "Lãnh đạo team 5 developers, thiết lập quy trình GitFlow, Code Review standards, và CI/CD pipeline với GitHub Actions giảm 40% thời gian release.",
                "Triển khai Distributed Tracing với Jaeger và Centralized Logging với ELK Stack để debug và monitoring microservices.",
                "Thiết lập Unit Testing coverage > 80% và Integration Testing cho tất cả critical paths.",
            ],
        },
        {
            comicTitle: "THE FINTECH FOUNDATION",
            mission: "Xây dựng core engine tài chính với độ chính xác tuyệt đối cho nền tảng giao dịch bất động sản quy mô lớn.",
            achievements: [
                "Phát triển Module Tính Toán Hoa Hồng đa tầng (Agent → Manager → Director) với 15+ loại chính sách khác nhau, đạt độ chính xác tài chính 100%.",
                "Xây dựng hệ thống Quản Lý Hợp Đồng điện tử với workflow approval, version control, và digital signature integration.",
                "Thiết kế & tối ưu hóa tìm kiếm Bất động sản với Elasticsearch, hỗ trợ 50+ filters và full-text search với độ trễ < 200ms trên 1 triệu+ records.",
                "Kiến trúc Hybrid Database Strategy: MSSQL cho transactional data (đảm bảo ACID) + MongoDB cho flexible schema (property details, media) + Redis cho caching.",
                "Phát triển Background Job System với Hangfire để xử lý các tác vụ nặng: report generation, bulk import/export, scheduled notifications.",
                "Tích hợp Payment Gateway (VNPay, Momo) với retry mechanism và transaction reconciliation tự động.",
            ],
        },
    ],
    en: [
        {
            comicTitle: "THE VOICE VANGUARD",
            mission: "Building intelligent call routing system integrated with AI Voice Agent, serving thousands of B2B enterprises.",
            achievements: [
                "Architected & developed B2B VoIP system using FreeSWITCH & LiveKit, handling thousands of concurrent calls daily with 99.9% uptime.",
                "Designed and implemented WebRTC-to-SIP bridge (FusionPBX), enabling seamless call handoff between AI Agent and human operators with < 100ms latency.",
                "Built 24/7 infrastructure monitoring system with Prometheus & Grafana, set up automated alerting via Telegram/Slack for < 5 min incident response.",
                "Developed Admin Dashboard with ReactJS for SIP Trunk configuration management, call analytics tracking, and real-time reporting.",
                "Integrated automatic Recording & Transcription for all calls, with secure storage on S3-compatible storage.",
                "Provided direct MVP customer support, handled production incidents, and ensured SLA commitments with partners.",
            ],
        },
        {
            comicTitle: "THE MICROSERVICES REVOLUTION",
            mission: "Leading large-scale architecture transformation from .NET Monolith to NestJS Microservices for a real estate platform.",
            achievements: [
                "Led the decomposition of Monolith into 8 independent Microservices (User, Auth, Payment, Booking, Property, Commission, Notification, Analytics), improving scalability by 300%.",
                "Designed and deployed API Gateway with Kong, handling rate limiting, authentication, and request routing for the entire system.",
                "Implemented Event-Driven architecture with Redis Pub/Sub & RabbitMQ, completely solving Race Conditions in payment processing.",
                "Built Saga Pattern system for distributed transactions, ensuring data consistency across services.",
                "Led team of 5 developers, established GitFlow processes, Code Review standards, and CI/CD pipeline with GitHub Actions reducing release time by 40%.",
                "Deployed Distributed Tracing with Jaeger and Centralized Logging with ELK Stack for microservices debugging and monitoring.",
                "Established Unit Testing coverage > 80% and Integration Testing for all critical paths.",
            ],
        },
        {
            comicTitle: "THE FINTECH FOUNDATION",
            mission: "Building a core financial engine with absolute precision for a large-scale real estate trading platform.",
            achievements: [
                "Developed Multi-tier Commission Calculation Module (Agent → Manager → Director) with 15+ different policy types, achieving 100% financial accuracy.",
                "Built Electronic Contract Management system with approval workflow, version control, and digital signature integration.",
                "Designed & optimized Real Estate search with Elasticsearch, supporting 50+ filters and full-text search with < 200ms latency on 1M+ records.",
                "Architected Hybrid Database Strategy: MSSQL for transactional data (ACID compliance) + MongoDB for flexible schema (property details, media) + Redis for caching.",
                "Developed Background Job System with Hangfire for heavy tasks: report generation, bulk import/export, scheduled notifications.",
                "Integrated Payment Gateways (VNPay, Momo) with retry mechanism and automatic transaction reconciliation.",
            ],
        },
    ],
};

// Project translations
export interface ProjectTranslation {
    desc: string;
    feat: string;
}

export const projectTranslations: Record<Locale, ProjectTranslation[]> = {
    vi: [
        {
            desc: "Ứng dụng quản lý toàn diện dành cho các Garage ô tô, giải quyết bài toán số hóa quy trình từ tiếp nhận xe, phân công kỹ thuật viên, theo dõi tiến độ sửa chữa đến thanh toán và xuất hóa đơn. Hệ thống hỗ trợ đa chi nhánh với dashboard real-time cho chủ garage.",
            feat: "Thuật toán Service Timeline thông minh tự động sắp xếp lịch sửa chữa tối ưu, tích hợp thanh toán PayOS với QR Code, Push notification thông báo cho khách hàng khi xe hoàn thành, Báo cáo doanh thu và thống kê chi tiết theo ngày/tuần/tháng.",
        },
        {
            desc: "Nền tảng luyện thi IELTS trực tuyến mô phỏng 100% trải nghiệm thi thật với đầy đủ 4 kỹ năng: Listening, Reading, Writing và Speaking. Hệ thống tự động chấm điểm Listening/Reading và cung cấp feedback chi tiết cho Writing dựa trên tiêu chí IELTS band descriptors.",
            feat: "Real-time test simulation với timer chính xác từng phần thi, AI-powered Writing feedback phân tích grammar/vocabulary/coherence, Speaking recording với transcript tự động, Progress tracking và đề xuất lộ trình học tập cá nhân hóa.",
        },
        {
            desc: "Website portfolio cá nhân được thiết kế theo phong cách truyện tranh (Comic Style) độc đáo, kết hợp giữa sự chuyên nghiệp và sáng tạo. Giao diện responsive hoạt động mượt mà trên mọi thiết bị từ desktop đến mobile.",
            feat: "Hỗ trợ đa ngôn ngữ Tiếng Việt/English với chuyển đổi mượt mà, Comic-style animations và decorations tạo trải nghiệm thú vị, Dark/Light sections tối ưu readability, SEO optimized với meta tags và semantic HTML.",
        },
        {
            desc: "Ứng dụng thương mại điện tử mobile-first với trải nghiệm mua sắm liền mạch. Hỗ trợ đa phương thức thanh toán phổ biến tại Việt Nam bao gồm VNPay, Momo, ZaloPay và COD. Tích hợp hệ thống quản lý kho và đơn hàng cho seller.",
            feat: "Push notifications cho order updates và promotions, Real-time order tracking với map integration, Wishlist và so sánh sản phẩm, Review/Rating system với image upload, Voucher và loyalty points program.",
        },
    ],
    en: [
        {
            desc: "Comprehensive management application for Auto Garages, solving the digitization problem from vehicle intake, technician assignment, repair progress tracking to payment and invoice generation. The system supports multi-branch with real-time dashboard for garage owners.",
            feat: "Smart Service Timeline algorithm automatically arranges optimal repair schedules, PayOS payment integration with QR Code, Push notifications to customers when vehicle is completed, Revenue reports and detailed statistics by day/week/month.",
        },
        {
            desc: "Online IELTS preparation platform simulating 100% real exam experience with all 4 skills: Listening, Reading, Writing and Speaking. The system automatically scores Listening/Reading and provides detailed feedback for Writing based on IELTS band descriptors criteria.",
            feat: "Real-time test simulation with precise timer for each section, AI-powered Writing feedback analyzing grammar/vocabulary/coherence, Speaking recording with automatic transcription, Progress tracking and personalized learning path recommendations.",
        },
        {
            desc: "Personal portfolio website designed with a unique Comic Style, combining professionalism and creativity. Responsive interface works smoothly on all devices from desktop to mobile.",
            feat: "Multi-language support Vietnamese/English with smooth transitions, Comic-style animations and decorations creating engaging experience, Dark/Light sections optimized for readability, SEO optimized with meta tags and semantic HTML.",
        },
        {
            desc: "Mobile-first e-commerce application with seamless shopping experience. Supports popular payment methods in Vietnam including VNPay, Momo, ZaloPay and COD. Integrated inventory and order management system for sellers.",
            feat: "Push notifications for order updates and promotions, Real-time order tracking with map integration, Wishlist and product comparison, Review/Rating system with image upload, Voucher and loyalty points program.",
        },
    ],
};
