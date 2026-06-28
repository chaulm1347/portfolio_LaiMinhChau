// Translations for Vietnamese and English

export type Locale = "vi" | "en";

export interface Translations {
    // Hero Section
    issueLabel: string;
    heroSignal: string;
    yearsExp: string;

    // Section Headers
    superpowers: string;
    theSagaSoFar: string;
    sideQuests: string;
    leadershipTitle: string;
    educationTitle: string;

    // Experience
    mission: string;

    // Projects
    battleLog: string;
    viewDemo: string;
    toolsLabel: string;
    outcomeLabel: string;
    ongoing: string;

    // Skills
    technicalLiteracy: string;

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
        issueLabel: "HỒ SƠ · 2026",
        heroSignal: "LIÊN HỆ",
        yearsExp: "4+ năm kinh nghiệm",

        // Section Headers
        superpowers: "Năng Lực Cốt Lõi",
        theSagaSoFar: "Kinh Nghiệm Làm Việc",
        sideQuests: "Dự Án Cá Nhân",
        leadershipTitle: "Lãnh Đạo & Cộng Đồng",
        educationTitle: "Học Vấn",

        // Experience
        mission: "MỤC TIÊU",

        // Projects
        battleLog: "DỰ ÁN",
        viewDemo: "Xem Demo",
        toolsLabel: "Công cụ & Phương pháp",
        outcomeLabel: "Kết quả",
        ongoing: "Hiện tại",

        // Skills
        technicalLiteracy:
            "NĂNG LỰC KỸ THUẬT — Làm việc hiệu quả với đội kỹ thuật trên các sản phẩm AI & cloud: tiếp nhận spec, phân rã yêu cầu, hỗ trợ review tiến độ và leo thang vấn đề mà không cần viết code.",

        // Footer
        readyToJoinForces: "SẴN SÀNG HỢP TÁC?",
        summonMessage: "Kết nối với Lại Minh Châu cho cơ hội sản phẩm tiếp theo của bạn!",
        sendSignal: "GỬI TIN NHẮN",
        designedBy: "© 2026 Lại Minh Châu · Portfolio",

        // Summary
        summary:
            "Không phải ai cũng có chức danh trước khi làm được việc — nhưng công việc luôn nói lên tất cả. Ở tuổi 25, tôi đã điều phối toàn bộ vòng đời delivery của một sản phẩm AI B2B và xây dựng hệ sinh thái đối tác từ con số không, đóng góp vào mức tăng trưởng doanh thu 50%. Tôi đang chủ động định hướng sự nghiệp sang lĩnh vực sản phẩm công nghệ — vì đó là công việc tôi đã thực sự làm.",
    },
    en: {
        // Hero Section
        issueLabel: "PROFILE · 2026",
        heroSignal: "CONTACT",
        yearsExp: "4+ years of experience",

        // Section Headers
        superpowers: "Core Competencies",
        theSagaSoFar: "Work Experience",
        sideQuests: "Personal Project",
        leadershipTitle: "Leadership & Community",
        educationTitle: "Education",

        // Experience
        mission: "OBJECTIVE",

        // Projects
        battleLog: "PROJECT",
        viewDemo: "View Demo",
        toolsLabel: "Tools & Methods",
        outcomeLabel: "Outcome",
        ongoing: "Ongoing",

        // Skills
        technicalLiteracy:
            "TECHNICAL FLUENCY — Works effectively with engineering teams on AI & cloud products: ingesting specs, breaking down requirements, supporting progress reviews and escalating issues without writing code.",

        // Footer
        readyToJoinForces: "READY TO COLLABORATE?",
        summonMessage: "Connect with Lại Minh Châu for your next product opportunity!",
        sendSignal: "GET IN TOUCH",
        designedBy: "© 2026 Lại Minh Châu · Portfolio",

        // Summary
        summary:
            "Not everyone earns a title before they earn the work — but the work always speaks for itself. At 25, I coordinated the full delivery lifecycle of a B2B AI product and built a partner ecosystem from scratch, contributing to 50% revenue growth. I am deliberately steering my career toward technology product management — because it is the work I have actually done.",
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
            comicTitle: "AI VOICE AGENT — POC DOANH NGHIỆP ĐẦU TIÊN",
            mission:
                "Điều phối toàn bộ delivery sản phẩm AI Voice Agent B2B tích hợp Call Center doanh nghiệp (LiveKit, FreeSWITCH/FusionPBX, MinIO). Đầu mối giữa CEO và nhóm kỹ thuật 4 người — từ PRD đến go-live.",
            achievements: [
                "Phân rã yêu cầu: Tiếp nhận PRD từ CEO, chuyển hóa mục tiêu sản phẩm cấp cao thành task thực thi, phân công cho BA, Dev, QA và duy trì bảng theo dõi task xuyên suốt delivery.",
                "Quản lý tiến độ: Xây dựng và quản lý timeline từ kickoff đến go-live, theo dõi hàng ngày, phát hiện blocker sớm và leo thang rủi ro với CEO trong sprint 2 tháng.",
                "Giao tiếp stakeholder: Đầu mối duy nhất giữa khách hàng doanh nghiệp và đội kỹ thuật — thu thập yêu cầu, chuyển hóa nhu cầu kinh doanh thành tóm tắt kỹ thuật và quản lý kỳ vọng.",
                "Tổ chức UAT & triển khai: Điều phối các phiên UAT với đội vận hành khách hàng, theo dõi xử lý lỗi với dev và sắp xếp trình tự go-live để bàn giao ổn định.",
                "Hoàn thành POC doanh nghiệp đầu tiên của sản phẩm từ đầu đến cuối — kết quả là hợp đồng được ký, trở thành nền tảng cho chiến lược go-to-market B2B.",
                "AI Voice Agent đi vào hoạt động với ~80% độ phủ tính năng theo yêu cầu; duy trì quan hệ khách hàng tốt, không có lần leo thang khẩn cấp nào.",
            ],
        },
        {
            comicTitle: "XÂY DỰNG HỆ SINH THÁI ĐỐI TÁC TỪ CON SỐ KHÔNG",
            mission:
                "Xây dựng và vận hành hệ sinh thái đối tác B2B của công ty từ đầu — onboarding, SOP hợp tác, theo dõi hiệu suất, kênh cộng đồng và phối hợp 5 bộ phận nội bộ.",
            achievements: [
                "Thiết kế hệ sinh thái: Xây dựng toàn bộ hành trình đối tác — quy trình onboarding, SOP hợp tác, checklist khởi động và theo dõi KPI hàng tuần; điều phối qua 5 bộ phận nội bộ.",
                "Kênh thu hút khách hàng: Đề xuất, lên kế hoạch và tổ chức chuỗi 6 webinar tạo pipeline có cấu trúc; trực tiếp làm MC dẫn chương trình.",
                "Quản lý cộng đồng: Chuyển hóa học viên webinar thành cộng đồng Zalo 400+ người — điểm tương tác thường xuyên cho tin tức sản phẩm và kích hoạt đối tác.",
                "Sáng kiến sản phẩm đa chức năng: Đề xuất và điều phối trang giới thiệu đối tác trên Matbao.net — phối hợp UX/UI và Frontend từ yêu cầu đến production.",
                "Xây dựng và quản lý 25+ đối tác chủ động (SaaS, AI, ERP & MES, E-commerce…), đạt tỷ lệ hợp tác thành công ~80%.",
                "Đóng góp vào mức tăng trưởng doanh thu sản phẩm 50% so với năm trước qua kênh đối tác; chuỗi webinar góp phần đưa Mat Bao được Google Fund ghi nhận.",
            ],
        },
        {
            comicTitle: "HẠ TẦNG VẬN HÀNH CHO STARTUP GIAI ĐOẠN ĐẦU",
            mission:
                "Xây dựng hạ tầng vận hành và triển khai dự án từ đầu cho một startup thúc đẩy thương mại Việt – Nhật và hợp tác giáo dục quốc tế.",
            achievements: [
                "Xây dựng hệ thống vận hành: Thiết kế hệ thống theo dõi dự án, SOP và quy trình đa bộ phận từ đầu; chuẩn hóa pipeline bán hàng và điều phối nội bộ.",
                "Điều phối dự án quốc tế: Quản lý các dự án xúc tiến thương mại Việt – Nhật, theo dõi mốc tiến độ và đồng bộ delivery qua các đối tác KVK, Nakanihon, FUNiX, Rikkei.",
                "Quản lý chuỗi cung ứng & nhà cung cấp, điều phối đội ngũ nội bộ trên nhiều dự án song song; duy trì báo cáo KPI và tiến độ hàng tuần.",
                "Triển khai chương trình đào tạo cho 200+ sinh viên tại 3 trường đại học — điều phối hậu cần, lịch giảng viên và nội dung.",
                "Cải thiện hiệu suất vận hành ~50% thông qua chuẩn hóa quy trình và SOP.",
                "Quản lý các dự án thương mại và chuỗi cung ứng với doanh thu ~600 triệu VND.",
            ],
        },
    ],
    en: [
        {
            comicTitle: "AI VOICE AGENT — FIRST ENTERPRISE POC",
            mission:
                "Coordinated the full delivery of a B2B AI Voice Agent integrated with an enterprise Call Center (LiveKit, FreeSWITCH/FusionPBX, MinIO). Single point of contact between the CEO and a 4-person engineering team — from PRD to go-live.",
            achievements: [
                "Requirements breakdown: Took the PRD from the CEO, translated high-level product goals into executable tasks, assigned them across BA, Dev and QA, and kept a live task tracker throughout delivery.",
                "Timeline management: Built and ran the timeline from kickoff to go-live, tracked progress daily, surfaced blockers early and escalated dependency risks to the CEO within a 2-month sprint.",
                "Stakeholder communication: Acted as the sole bridge between the enterprise client and engineering — gathering requirements, translating business needs into technical briefs and managing expectations.",
                "UAT & rollout: Ran UAT sessions with the client's operations team, tracked bug resolution with dev and sequenced the go-live for a stable handover.",
                "Delivered the product's first enterprise POC end-to-end — resulting in a signed contract that became the foundation of the B2B go-to-market strategy.",
                "The AI Voice Agent went live with ~80% of requested feature coverage; client relationship stayed strong with zero emergency escalations.",
            ],
        },
        {
            comicTitle: "BUILT A PARTNER ECOSYSTEM FROM ZERO",
            mission:
                "Built and ran the company's B2B partner ecosystem from scratch — onboarding, partnership SOPs, performance tracking, a community channel and coordination across 5 internal departments.",
            achievements: [
                "Ecosystem design: Built the entire partner journey — onboarding process, partnership SOPs, kickoff checklist and weekly KPI tracking; coordinated execution across 5 internal departments.",
                "Acquisition channel: Proposed, planned and ran a series of 6 webinars to create a structured pipeline; hosted the series as MC.",
                "Community management: Converted webinar attendees into a 400+ member Zalo community — a recurring touchpoint for product news and partner activation.",
                "Cross-functional product initiative: Proposed and coordinated a partner showcase page on Matbao.net — working with UX/UI and Frontend from requirements to production.",
                "Built and managed 25+ active partners (SaaS, AI, ERP & MES, E-commerce…) with a ~80% partnership success rate.",
                "Contributed to 50% YoY product revenue growth through partner channels; the webinar series helped earn Mat Bao recognition from Google Fund.",
            ],
        },
        {
            comicTitle: "OPERATIONS FOUNDATION FOR AN EARLY-STAGE STARTUP",
            mission:
                "Built operations infrastructure and project delivery from scratch for a startup driving Vietnam–Japan trade and international education partnerships.",
            achievements: [
                "Operations system: Designed project tracking, SOPs and cross-department processes from scratch; standardized the sales pipeline and internal coordination.",
                "International project delivery: Managed Vietnam–Japan trade promotion projects, tracked milestones and synced delivery across partners KVK, Nakanihon, FUNiX and Rikkei.",
                "Managed supply chain and vendor relationships, coordinated internal teams across parallel projects; maintained weekly KPI and progress reports.",
                "Delivered training programs for 200+ students across 3 universities — coordinating logistics, instructor schedules and content.",
                "Improved operational efficiency by ~50% through process standardization and SOP rollout.",
                "Managed trade and supply-chain projects with ~600 million VND in revenue.",
            ],
        },
    ],
};

// Project translations
export interface ProjectTranslation {
    desc: string;
    highlights: string[];
    feat: string;
}

export const projectTranslations: Record<Locale, ProjectTranslation[]> = {
    vi: [
        {
            desc: "Dự án sản phẩm tự khởi xướng, trong đó tôi đảm nhận vai trò Product Owner, dẫn dắt nhóm nhỏ đa chức năng qua toàn bộ vòng đời phát triển sản phẩm — từ ý tưởng thô đến prototype có thể chơi được. Đây là nơi tôi tự thực hành đầy đủ vai trò PO mà không có sẵn quy trình hay chức danh: tự định nghĩa thành công, tự bảo vệ phạm vi và tự dẫn dắt nhịp lặp của sản phẩm.",
            highlights: [
                "Định nghĩa tầm nhìn sản phẩm và phân khúc người dùng mục tiêu từ đầu — chuyển hóa ý tưởng thô thành bộ tài liệu sản phẩm có cấu trúc (Vision Brief, GDD, backlog phân tầng) giúp cả nhóm có định hướng chung rõ ràng.",
                "Xác định phạm vi và bảo vệ MVP bằng các khung MoSCoW và vertical slice — cắt giảm phạm vi quyết đoán trong điều kiện nguồn lực hạn chế mà không đánh mất trải nghiệm cốt lõi cần kiểm chứng giả thuyết sản phẩm.",
                "Tổ chức các phiên playtest như vòng phản hồi có cấu trúc trong các sprint lặp — thu thập dữ liệu người dùng, ưu tiên xử lý theo sprint backlog và điều chỉnh cơ chế game dựa trên bằng chứng thực tế.",
                "Kết nối sản phẩm và kỹ thuật — tận dụng các công cụ AI xuyên suốt vòng đời sản phẩm để tăng tốc đầu ra: từ cấu trúc tài liệu, kiểm tra logic thiết kế đến tạo đặc tả kỹ thuật thực thi (Prototype Brief) giúp dev xây dựng chính xác mà không cần giải thích lại nhiều lần.",
            ],
            feat: "Demo web có thể chạy được đã được triển khai và playtest với người dùng thực tế — kiểm chứng concept từ ý tưởng đến prototype hoạt động với nhóm hai người có sự hỗ trợ của AI.",
        },
    ],
    en: [
        {
            desc: "A self-initiated product project where I acted as Product Owner, leading a small cross-functional team through the full product development lifecycle — from a raw idea to a playable prototype. This is where I practiced the full PO role with no ready-made process or title: defining success myself, protecting scope, and driving the product's iteration cadence.",
            highlights: [
                "Defined the product vision and target user segments from scratch — turning a raw idea into a structured documentation set (Vision Brief, GDD, tiered backlog) that gave the team a clear shared direction.",
                "Scoped and protected the MVP using MoSCoW and vertical-slice framing — cutting scope decisively under tight resources without losing the core experience needed to validate the product hypothesis.",
                "Ran playtests as structured feedback loops across iterative sprints — collecting user data, prioritizing via the sprint backlog and adjusting game mechanics based on real evidence.",
                "Bridged product and engineering — using AI tools across the lifecycle to accelerate output: from structuring documentation and checking design logic to producing the executable technical spec (Prototype Brief) so devs could build accurately without repeated explanation.",
            ],
            feat: "A working web demo was deployed and playtested with real users — validating the concept from idea to a functioning prototype with a two-person, AI-assisted team.",
        },
    ],
};

// Leadership & Community translations
export interface LeadershipRole {
    title: string;
    period: string;
    points: string[];
}

export interface LeadershipData {
    intro: string;
    org: string;
    orgType: string;
    roles: LeadershipRole[];
    award: { title: string; note: string };
}

export const leadershipData: Record<Locale, LeadershipData> = {
    vi: {
        intro:
            "Hơn 4 năm gắn bó với JCI — tổ chức lãnh đạo quốc tế hoạt động tại 120+ quốc gia. Các vai trò tập trung vào điều phối chương trình, quản lý stakeholder & đối tác và lãnh đạo cộng đồng quy mô toàn quốc.",
        org: "Junior Chamber International (JCI)",
        orgType: "Tổ chức Phi lợi nhuận",
        roles: [
            {
                title: "Phó Giám đốc — Hợp tác & Tài trợ · JCI Việt Nam",
                period: "2025",
                points: [
                    "Mở rộng hợp tác giữa tổ chức phi lợi nhuận và doanh nghiệp; củng cố tư duy phát triển hệ sinh thái đối tác.",
                    "Đại diện JCI Central Saigon làm Diễn giả khách mời & Giám khảo cuộc thi Ecom Challenges (phối hợp các trường ĐH tại TP.HCM).",
                ],
            },
            {
                title: "Phó Giám đốc — Chương trình Phát triển Lãnh đạo · JCI Việt Nam",
                period: "2024",
                points: [
                    "Thiết kế chương trình lãnh đạo quốc gia kéo dài 1 năm, tập trung thay đổi hành vi và kết quả thực thi.",
                    "Tuyển dụng và dẫn dắt 30 thành viên nòng cốt; triển khai 4 khóa học trong 240 ngày huấn luyện.",
                    "Huấn luyện và cố vấn 50+ founder và quản lý cấp cao trên toàn quốc.",
                ],
            },
            {
                title: "Đồng sáng lập — Creative Young Entrepreneur (CYE) · JCI Việt Nam",
                period: "2022 – 2023",
                points: [
                    "Dẫn dắt chiến lược nội dung và thiết kế chương trình ươm tạo SME; điều phối 23 mentor và 16 đối tác.",
                    "Tổ chức 39 sự kiện với 100+ SME; đồng tổ chức chương trình tiếp cận 1.000+ CEO toàn quốc.",
                    "Hỗ trợ huy động 350.000+ USD tài trợ hiện vật; được 10+ kênh truyền thông đưa tin.",
                ],
            },
        ],
        award: {
            title: "★ Phó Giám đốc Xuất sắc Nhất Toàn quốc — JCI Việt Nam 2024",
            note:
                "Do bà Trần Phương Ngọc Thảo bình chọn — Chủ tịch Toàn quốc JCI Việt Nam 2024 & Phó Chủ tịch HĐQT, Tập đoàn PNJ.",
        },
    },
    en: {
        intro:
            "Over 4 years with JCI — an international leadership organization active in 120+ countries. Roles focused on program coordination, stakeholder & partner management and community leadership at a national scale.",
        org: "Junior Chamber International (JCI)",
        orgType: "Non-profit Organization",
        roles: [
            {
                title: "Vice President — Partnership & Sponsorship · JCI Vietnam",
                period: "2025",
                points: [
                    "Expanded collaboration between the non-profit and businesses; reinforced a partner-ecosystem development mindset.",
                    "Represented JCI Central Saigon as Guest Speaker & Judge at the Ecom Challenges contest (in partnership with universities in HCMC).",
                ],
            },
            {
                title: "Vice President — Leadership Development Program · JCI Vietnam",
                period: "2024",
                points: [
                    "Designed a year-long national leadership program focused on behavior change and execution outcomes.",
                    "Recruited and led 30 core members; delivered 4 courses across 240 days of coaching.",
                    "Coached and mentored 50+ founders and senior managers nationwide.",
                ],
            },
            {
                title: "Co-founder — Creative Young Entrepreneur (CYE) · JCI Vietnam",
                period: "2022 – 2023",
                points: [
                    "Led content strategy and program design for an SME incubation program; coordinated 23 mentors and 16 partners.",
                    "Organized 39 events with 100+ SMEs; co-organized a program reaching 1,000+ CEOs nationwide.",
                    "Helped raise 350,000+ USD in in-kind sponsorship; featured across 10+ media channels.",
                ],
            },
        ],
        award: {
            title: "★ Best Vice President Nationwide — JCI Vietnam 2024",
            note:
                "Selected by Ms. Tran Phuong Ngoc Thao — National President of JCI Vietnam 2024 & Vice Chair of the Board, PNJ Group.",
        },
    },
};

// Education translations
export interface EducationData {
    degree: string;
    school: string;
    program: string;
    period: string;
    classification: string;
}

export const educationData: Record<Locale, EducationData> = {
    vi: {
        degree: "Cử nhân Kỹ thuật Hóa Dược",
        school: "Đại học Bách Khoa Hà Nội",
        program: "Chương trình Tiên tiến hợp tác với Đại học Adelaide, Úc",
        period: "Tốt nghiệp 2024",
        classification: "Xếp loại: Khá",
    },
    en: {
        degree: "B.Eng. in Pharmaceutical Chemical Engineering",
        school: "Hanoi University of Science and Technology",
        program: "Advanced Program in partnership with the University of Adelaide, Australia",
        period: "Graduated 2024",
        classification: "Classification: Good (Khá)",
    },
};
