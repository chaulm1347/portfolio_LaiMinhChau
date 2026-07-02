// Bilingual content for the comic-style portfolio.
// Ported faithfully from the original HTML design's DCLogic renderVals().
// Do NOT alter wording here — this mirrors the source design 1:1.

import { Locale } from "@/lib/translations";

export interface ChapterStat {
  value: string;
  label: string;
}

export interface Chapter {
  chapter: string;
  bannerBg: string;
  bannerText: string;
  bannerNarr: string;
  bannerPad: string;
  bannerFont: string;
  narrative: string;
  title: string;
  titleFont: string;
  subtitle: string;
  shadowColor: string;
  statBg: string;
  statColor: string;
  marginBot: string;
  bodyPad: string;
  subGap: string;
  statPad: string;
  statFont: string;
  stats: ChapterStat[];
}

export interface SprintStep {
  label: string;
  bg: string;
  color: string;
  arrow: boolean;
}

export interface ProcessStat {
  value: string;
  label: string;
}

export interface RoleTag {
  label: string;
  bg: string;
  color: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface LeaderRole {
  year: string;
  title: string;
  desc: string;
}

export interface PortfolioContent {
  localeBtnLabel: string;

  name: string;
  email: string;
  phone: string;
  location: string;
  tagline: string;
  avatarPlaceholder: string;

  signature: string;
  summaryParts: string[];

  // Tree
  sectEvolution: string;
  narrativeIntro: string;
  youAreHere: string;
  crownText: string;
  evoLabel1: string;
  evoLabel2: string;
  evoLabel3: string;
  evoLabel4: string;
  evoLabel5: string;
  evoSub1: string;
  evoSub2: string;
  evoSub4: string;
  evoNarr1: string;
  evoNarr2: string;
  evoNarr3: string;
  evoNarr4: string;
  evoNarr5: string;

  // Journey photos
  galleryLabel: string;
  photoLabel1: string;
  photoLabel2: string;
  photoLabel3: string;
  photoLabel4: string;
  photoLabel5: string;

  // Flagship
  sectQuest: string;
  flagshipTitle: string;
  flagshipStatus: string;
  flagshipHook: string;
  processTitle: string;
  sprintTimeline: SprintStep[];
  processStats: ProcessStat[];
  docsPlaceholder: string;
  docsCaption: string;
  teaserPlaceholder: string;
  teaserCaption: string;
  roleTags: RoleTag[];

  // Chapters
  sectChapters: string;
  chapters: Chapter[];

  // Skills
  sectSkills: string;
  skillGroups: SkillGroup[];
  techNote: string;

  // Leadership
  sectLead: string;
  leaderNarrative: string;
  leaderRoles: LeaderRole[];
  award: string;
  awardBy: string;

  // Education
  sectEdu: string;
  eduProgram: string;
  eduDegree: string;
  eduYear: string;

  // CTA
  ctaNarrative: string;
  sectCta: string;
  ctaMsg: string;
  ctaBtn: string;
}

export function getPortfolioContent(locale: Locale): PortfolioContent {
  const vi = locale === "vi";

  // ── Tree labels (NO numbers) ──
  const evoLabel1 = vi ? "KHỞI NGUỒN" : "ORIGIN";
  const evoLabel2 = vi ? "COO START-UP" : "COO STARTUP";
  const evoLabel3 = vi ? "KHỞI NGHIỆP" : "VENTURE";
  const evoLabel4 = vi ? "HEAD OF PD" : "HEAD OF PD";
  const evoLabel5 = vi ? "PRODUCT DELIVERY" : "PRODUCT DELIVERY";

  // ── Tree narratives ──
  const evoNarr1 = vi
    ? "Học tập trong môi trường STEM để rèn luyện tư duy logic và chủ động tham gia NGO để tìm kiếm cơ hội phát triển"
    : "Studying in a STEM environment to build logical thinking, proactively joining NGOs to seek growth opportunities";
  const evoNarr2 = vi
    ? "Dấn thân và không ngừng thử - sai - làm lại ở vai trò COO Start-up, đặt nền móng thực chiến về Business"
    : "Diving in and relentlessly trying-failing-rebuilding as COO of a startup, laying practical business foundations";
  const evoNarr3 = vi
    ? "Chập chững khởi nghiệp và học được bài học thực tế từ thất bại trong P&L"
    : "Taking first steps in entrepreneurship and learning real lessons from P&L failures";
  const evoNarr4 = vi
    ? "Trưởng thành từng ngày ở vai trò Head of Partners Development - Domain Tech Services"
    : "Growing every day as Head of Partners Development in the Tech Services domain";
  const evoNarr5 = vi
    ? "Định hướng phát triển sâu hơn về Tech Product - Bắt đầu vai trò Product Delivery & Coordinator"
    : "Deepening focus on Tech Product — Starting the role of Product Delivery & Coordinator";

  // ── Chapters (04, 03, 02 NEW, 01) ──
  const chapters: Chapter[] = [
    {
      chapter: vi ? "CHƯƠNG 04" : "CH.04",
      bannerBg: "#e63946",
      bannerText: "#fff",
      bannerNarr: "rgba(255,255,255,.7)",
      bannerPad: "14px 26px",
      bannerFont: "26px/1",
      narrative: vi ? "Dẫn dắt delivery sản phẩm AI — từ PRD đến go-live" : "Leading AI product delivery — PRD to go-live",
      title: vi ? "Điều phối Dự án & Triển khai (AI)" : "Project Coordination & Delivery (AI)",
      titleFont: "22px/1.2",
      subtitle: vi
        ? "Cộng tác với 1 Công ty trong ngành viễn thông phát triển dự án AI-Agent tích hợp hệ thống · 2025 - 2026"
        : "Collaborated with a telecom company developing an integrated AI-Agent system · 2025 - 2026",
      shadowColor: "#e63946",
      statBg: "#fef2f2",
      statColor: "#e63946",
      marginBot: "30px",
      bodyPad: "28px 32px",
      subGap: "22px",
      statPad: "20px",
      statFont: "40px/1",
      stats: [
        { value: "01", label: vi ? "POC doanh nghiệp" : "Enterprise POC" },
        { value: "~80%", label: vi ? "Yêu cầu từ Stakeholders" : "Stakeholder Requirements" },
        { value: "0", label: vi ? "Khẩn cấp" : "Escalations" },
      ],
    },
    {
      chapter: vi ? "CHƯƠNG 03" : "CH.03",
      bannerBg: "#fca311",
      bannerText: "#000",
      bannerNarr: "rgba(0,0,0,.5)",
      bannerPad: "14px 26px",
      bannerFont: "26px/1",
      narrative: vi ? "Xây hệ sinh thái từ con số không" : "Building ecosystem from zero",
      title: vi ? "Trưởng phòng Phát triển Đối tác" : "Head of Partner Development",
      titleFont: "22px/1.2",
      subtitle: "Mat Bao Corp · 2024 - 2025",
      shadowColor: "#fca311",
      statBg: "#fefaf0",
      statColor: "#b37400",
      marginBot: "30px",
      bodyPad: "28px 32px",
      subGap: "22px",
      statPad: "20px",
      statFont: "40px/1",
      stats: [
        { value: "+50%", label: vi ? "Doanh số YoY (Dòng sản phẩm AI)" : "YoY Revenue (AI product line)" },
        {
          value: "25+",
          label: vi
            ? "Đối tác Affiliate & Cross-Sale (Doanh nghiệp, Hiệp hội,...)"
            : "Affiliate & Cross-Sale Partners (Enterprises, Associations,...)",
        },
        { value: "400+", label: vi ? "C-level trong cộng đồng" : "C-level in Community" },
        { value: "6+", label: vi ? "Webinars (Nhận Google Fund)" : "Webinars (Won Google Fund)" },
      ],
    },
    {
      chapter: vi ? "CHƯƠNG 02" : "CH.02",
      bannerBg: "#d4d4d4",
      bannerText: "#333",
      bannerNarr: "rgba(0,0,0,.4)",
      bannerPad: "10px 26px",
      bannerFont: "21px/1",
      narrative: vi ? "Khởi nghiệp cùng cộng sự" : "Entrepreneurship with co-founders",
      title: vi ? "Co-founder" : "Co-founder",
      titleFont: "19px/1.2",
      subtitle: "2024",
      shadowColor: "#d4d4d4",
      statBg: "#f5f5f5",
      statColor: "#666",
      marginBot: "30px",
      bodyPad: "16px 26px",
      subGap: "12px",
      statPad: "12px",
      statFont: "30px/1",
      stats: [{ value: vi ? "Dừng lại" : "Stopped", label: vi ? "vì thiếu vốn" : "due to lack of funding" }],
    },
    {
      chapter: vi ? "CHƯƠNG 01" : "CH.01",
      bannerBg: "#4ade80",
      bannerText: "#000",
      bannerNarr: "rgba(0,0,0,.45)",
      bannerPad: "14px 26px",
      bannerFont: "26px/1",
      narrative: vi ? "Xây nền tảng vận hành startup từ đầu" : "Building startup ops from scratch",
      title: vi ? "Giám đốc Vận hành" : "Operations Director",
      titleFont: "22px/1.2",
      subtitle: "IMARU Co., Ltd. · 2022 - 2024",
      shadowColor: "#4ade80",
      statBg: "#f0fcf4",
      statColor: "#1a7a3a",
      marginBot: "30px",
      bodyPad: "28px 32px",
      subGap: "22px",
      statPad: "20px",
      statFont: "40px/1",
      stats: [
        { value: "600M", label: vi ? "Doanh thu Dự án" : "Project Revenue" },
        { value: "SOP", label: vi ? "Chuẩn hóa" : "Standardization" },
      ],
    },
  ];

  // ── Flagship 4-tier data ──
  const sprintTimeline: SprintStep[] = [
    { label: "Concept", bg: "#fef2f2", color: "#e63946", arrow: true },
    { label: "GDD v1", bg: "#fef2f2", color: "#e63946", arrow: true },
    { label: "Prototype", bg: "#fef2f2", color: "#e63946", arrow: true },
    { label: "Playtest", bg: "#e63946", color: "#fff", arrow: true },
    { label: "GDD v3", bg: "#fef2f2", color: "#e63946", arrow: true },
    { label: "Dev Handoff", bg: "#e63946", color: "#fff", arrow: false },
  ];

  const processStats: ProcessStat[] = [
    { value: "1", label: vi ? "Cộng sự" : "Collaborator" },
    { value: "8", label: "Product Backlog" },
    { value: "2", label: vi ? "Module lớn" : "Big Modules" },
    { value: "1", label: "MVP" },
  ];

  const roleTags: RoleTag[] = [
    { label: "Product Owner", bg: "#e63946", color: "#fff" },
    { label: "Scrum", bg: "#fca311", color: "#000" },
    { label: "Game Design", bg: "#4ade80", color: "#000" },
    { label: "AI-augmented", bg: "#4cc9f0", color: "#000" },
  ];

  // ── Skills ──
  const skillGroups: SkillGroup[] = [
    {
      name: vi ? "Sản phẩm & Delivery" : "Product & Delivery",
      items: vi
        ? [
            "Phân tích Yêu cầu",
            "Backlog & Sắp xếp độ ưu tiên",
            "Điều phối Đa chức năng",
            "Quản lý Dự án",
            "Quản lý Stakeholders",
            "User Story",
            "UAT & Triển khai",
            "Ổn định Hậu triển khai",
            "MoSCoW",
            "DoD",
            "Agile/Scrum",
          ]
        : [
            "Requirements Analysis",
            "Backlog & Prioritization",
            "Cross-functional Coordination",
            "Project Management",
            "Stakeholder Management",
            "User Stories",
            "UAT & Rollout",
            "Post-launch Stabilization",
            "MoSCoW",
            "DoD",
            "Agile/Scrum",
          ],
    },
    {
      name: vi ? "Đối tác & GTM" : "Partnership & GTM",
      items: vi
        ? [
            "Go-to-Market",
            "Hệ sinh thái Đối tác",
            "Phát triển Kênh",
            "Xây hệ sinh thái",
            "Phối hợp Đối tác",
            "Tăng trưởng Kinh doanh",
            "Kênh Tiếp thị Liên kết",
            "Chiến lược",
            "B2B",
            "B2B2C",
            "Chiến dịch Thương hiệu",
            "Mở phễu (Top of Funnel)",
          ]
        : [
            "Go-to-Market",
            "Ecosystem Ops",
            "Channel Dev",
            "Build ecosystem",
            "Partnership Coordination",
            "Business Growth",
            "Affiliate Channel",
            "Strategy",
            "B2B",
            "B2B2C",
            "Branding Campaign",
            "Top of Funnel",
          ],
    },
    {
      name: vi ? "Vận hành" : "Operations",
      items: vi ? ["SOP & Quy trình", "KPI/OKR", "Báo cáo Dữ liệu", "Phân tích"] : ["SOP & Process", "KPI/OKR", "Data Reporting", "Analysis"],
    },
    {
      name: vi ? "Công cụ" : "Tools",
      items: vi
        ? ["Notion", "Excel/Sheets", "CRM", "Jira/Trello", "Zalo OA", "Figma", "Ứng dụng AI & Tự động hóa Quy trình"]
        : ["Notion", "Excel/Sheets", "CRM", "Jira/Trello", "Zalo OA", "Figma", "AI application & Workflow"],
    },
    {
      name: vi ? "Ngôn ngữ" : "Languages",
      items: vi ? ["Tiếng Việt — Bản địa", "English — VSTEP B2"] : ["Vietnamese — Native", "English — VSTEP B2"],
    },
  ];

  return {
    localeBtnLabel: vi ? "EN" : "VI",

    name: vi ? "Lại Minh Châu" : "Lai Minh Chau",
    email: "chau.lm1347@gmail.com",
    phone: "(+84) 971 528 015",
    location: vi ? "TP. Hồ Chí Minh" : "Ho Chi Minh City",
    tagline: vi
      ? "Phát triển sản phẩm · Xây hệ sinh thái · Quản lý dự án · Vận hành kinh doanh · Kết nối B2B"
      : "Product Development · Ecosystem Building · Project Management · Business Operations · B2B Networking",
    avatarPlaceholder: vi ? "Kéo thả ảnh đại diện" : "Drop your avatar photo",

    signature: "“Not everyone gets the job title before they do the work — but the work always shows.”",
    summaryParts: vi
      ? [
          "Bộ sưu tập đa dạng trải nghiệm ở nhiều vai trò, tỷ lệ nghịch với độ tuổi 25, tôi là minh chứng của câu nói “Made, not born”.",
          "Không giới hạn bản thân ở việc được rèn dũa tính kỷ luật và logic nhờ xuất phát từ môi trường STEM, tôi lựa chọn theo đuổi con đường kết nối giữa con người và hệ thống, từng bước trở thành cầu nối giữa bài toán Kinh doanh và Công nghệ, dù biết rằng ẩn chứa nhiều thách thức.",
          "Tôi tin rằng các cột mốc và con số đã đi qua là những mảnh ghép chân thực nhất xâu chuỗi nên câu chuyện khát vọng không ngừng vươn lên của bản thân mình trong bất kỳ hoàn cảnh nào. Và biết đâu, những giá trị mà tôi có là mảnh ghép đồng kiến tạo và dẫn dắt sự thay đổi mà bạn đang tìm kiếm?",
        ]
      : [
          "A diverse collection of experiences across many roles, inversely proportional to the age of 25 — I am proof of “Made, not born.”",
          "Not limiting myself to the discipline and logic forged in a STEM environment, I chose to pursue a path of connecting people and systems — step by step becoming a bridge between Business and Technology problems, knowing full well the challenges ahead.",
          "I believe the milestones and numbers I’ve passed are the most authentic pieces that thread together my story of an aspiration to keep rising in any circumstance. And who knows — perhaps the value I bring is the missing piece to co-create and lead the change through innovation that you’re looking for?",
        ],

    // Tree
    sectEvolution: vi ? "HÀNH TRÌNH TIẾN HÓA" : "EVOLUTION PATH",
    narrativeIntro: vi
      ? "Nếu hình dung chặng đường phát triển sự nghiệp đã qua một cách tóm tắt nhất, tôi sẽ kể bạn nghe về cây tiến hóa..."
      : "If I were to summarize my career journey in the most concise way, I’d tell you about the evolution tree...",
    youAreHere: "Open To Work",
    crownText: vi
      ? "Nỗ lực tìm kiếm một cơ hội mới phù hợp để tạo ra giá trị trên con đường Tech Product đã chọn"
      : "Seeking the right opportunity to create value on the chosen Tech Product path",

    evoLabel1,
    evoLabel2,
    evoLabel3,
    evoLabel4,
    evoLabel5,
    evoSub1: "HUST",
    evoSub2: "IMARU",
    evoSub4: "Mat Bao",
    evoNarr1,
    evoNarr2,
    evoNarr3,
    evoNarr4,
    evoNarr5,

    // Journey photos
    galleryLabel: vi ? "📸 HÀNH TRÌNH PHÁT TRIỂN" : "📸 GROWTH JOURNEY",
    photoLabel1: vi ? "Ảnh 1" : "Photo 1",
    photoLabel2: vi ? "Ảnh 2" : "Photo 2",
    photoLabel3: vi ? "Ảnh 3" : "Photo 3",
    photoLabel4: vi ? "Ảnh 4" : "Photo 4",
    photoLabel5: vi ? "Ảnh 5" : "Photo 5",

    // Flagship
    sectQuest: vi ? "DỰ ÁN CÁ NHÂN" : "PERSONAL PROJECT",
    flagshipTitle: vi ? "Game Giáo dục STEM" : "STEM Education Game",
    flagshipStatus: vi ? "Đang thực hiện" : "Ongoing",
    flagshipHook: vi ? "Học mà chơi - Chơi mà học" : "Learn while playing - Play while learning",
    processTitle: vi ? "QUY TRÌNH LÀM VIỆC" : "PROCESS EVIDENCE",
    sprintTimeline,
    processStats,
    docsPlaceholder: vi
      ? "Kéo thả ảnh chụp bộ tài liệu (GDD, Spec, Backlog...)"
      : "Drop screenshot of document stack (GDD, Spec, Backlog...)",
    docsCaption: vi
      ? "Bộ tài liệu 4 lớp: Tầm nhìn → Thiết kế → Đặc tả → Xây dựng"
      : "4-layer document suite: Vision → Design → Spec → Build",
    teaserPlaceholder: vi ? "Kéo thả screenshot demo" : "Drop demo screenshot",
    teaserCaption: vi ? "Hiện đang trong giai đoạn closed playtest." : "Currently in closed playtest.",
    roleTags,

    // Chapters
    sectChapters: vi ? "CÁC CHƯƠNG SỰ NGHIỆP" : "CAREER CHAPTERS",
    chapters,

    // Skills
    sectSkills: vi ? "NĂNG LỰC CỐT LÕI" : "CORE COMPETENCIES",
    skillGroups,
    techNote: vi
      ? "Biến xuất phát điểm trái ngành thành điểm chạm làm việc hiệu quả với đội ngũ kỹ thuật, biến trải nghiệm thực chiến từ con số 0 thành thấu hiểu bài toán Doanh nghiệp!"
      : "Turning a non-technical starting point into a strength for working effectively with engineering teams, and turning hands-on experience built from zero into a deep understanding of business problems!",

    // Leadership
    sectLead: vi ? "LÃNH ĐẠO & CỘNG ĐỒNG" : "LEADERSHIP",
    leaderNarrative: vi
      ? "Hành trình phát triển bản thân 4+ năm gắn bó với JCI Vietnam - Liên đoàn Lãnh đạo và Doanh nhân trẻ Thế giới (JCI có mặt ở 120+ quốc gia), mỗi vai trò là một bài học vô giá về lãnh đạo không lợi nhuận, điều phối và kết nối nhiều dự án cộng đồng."
      : "4+ years of personal growth with JCI Vietnam - Junior Chamber International (present in 120+ countries), each role an invaluable lesson in nonprofit leadership, coordination, and connecting community projects.",
    leaderRoles: [
      {
        year: "2025",
        title: vi ? "Phó Giám đốc Hợp tác & Tài trợ" : "Associate Director Partnership & Sponsorship",
        desc: vi ? "Mở rộng hợp tác NPO–doanh nghiệp · Diễn giả & Giám khảo" : "NPO–business partnerships · Speaker & Judge",
      },
      {
        year: "2024",
        title: vi ? "Phó Giám đốc Phát triển Lãnh đạo" : "Associate Director Leaders Development",
        desc: vi
          ? "Chương trình Huấn luyện Lãnh đạo tinh hoa · 30 thành viên tham gia là C-level tại Doanh nghiệp"
          : "Elite Leadership Coaching Program · 30 participating members are C-level at enterprises",
      },
      {
        year: "22 - 23",
        title: vi
          ? "Đồng sáng lập Creative Young Entrepreneur Program (Chương trình Doanh nhân trẻ sáng tạo)"
          : "Co-founder Creative Young Entrepreneur Program",
        desc: vi
          ? "50+ Doanh nghiệp đội thi · 23 mentors · 16 đối tác · 39 sự kiện · thu hút sự quan tâm 500+ SMEs và Quỹ · 350.000 USD tài trợ hiện kim và hiện vật"
          : "50+ competing businesses · 23 mentors · 16 partners · 39 events · attracted 500+ SMEs and Funds · $350,000 in cash & in-kind sponsorship",
      },
    ],
    award: vi
      ? "★ Phó Giám đốc Xuất sắc Nhất Toàn quốc — JCI Vietnam 2024"
      : "★ Best National Associate Director — JCI Vietnam 2024",
    awardBy: vi
      ? "Hand-pick bởi Chủ tịch JCI Vietnam 2024 - Mrs. Trần Phương Ngọc Thảo"
      : "Hand-picked by JCI Vietnam President 2024 - Mrs. Tran Phuong Ngoc Thao",

    // Education
    sectEdu: vi ? "HỌC VẤN" : "EDUCATION",
    eduProgram: vi
      ? "Chương trình Đào tạo Tinh hoa (ELiTECH) - ĐẠI HỌC BÁCH KHOA HÀ NỘI"
      : "ELiTECH Honors Program - HANOI UNIVERSITY OF SCIENCE AND TECHNOLOGY",
    eduDegree: vi
      ? "Cử nhân Kỹ thuật Hóa Dược (STEM) - Chương trình kết hợp với Adelaide University (Hạng #79 thế giới - Top 8 Australia)"
      : "B.Eng. Pharmaceutical Chemical Engineering (STEM) - Joint program with Adelaide University (Rank #79 in the world - in Top 8 Australia)",
    eduYear: "2019 - 2024",

    // CTA
    ctaNarrative: vi
      ? "Câu chuyện của tôi vẫn đang được viết tiếp. Chương tiếp theo có thể bắt đầu cùng bạn."
      : "My story is still being written. The next chapter could start with you.",
    sectCta: vi ? "SẴN SÀNG HỢP TÁC?" : "READY TO COLLABORATE?",
    ctaMsg: vi ? "Hãy kết nối với tôi nếu bạn thấy điểm chạm!" : "Connect with me if you see a match!",
    ctaBtn: vi ? "LIÊN HỆ NGAY" : "GET IN TOUCH",
  };
}
