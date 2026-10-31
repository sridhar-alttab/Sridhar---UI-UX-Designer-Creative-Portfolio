export interface Project {
  id: string;
  number: string;
  title: string;
  tagline?: string;
  category: string;
  description: string;
  features: string[];
  thumbnail: string;
  accentColor: string;
  overview: string;
  problemStatement: string;
  solution: string;
  uxHighlights: string[];
  toolsUsed: string[];
}

export interface CreativeItem {
  id: string;
  title: string;
  category: 'Social Media' | 'Canva' | 'E-book' | 'Educational Content' | 'Digital Content';
  description: string;
  format: string;
  tools: string;
  thumbnail?: string;
  aspect: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  platform: string;
  issueDate: string;
  credentialId: string;
  verifyUrl: string;
  pdfUrl: string;
  instructor: string;
  skillsAcquired: string[];
  description: string;
}

export const PERSONAL_INFO = {
  name: "Sridhar",
  roleTitle: "UI/UX Designer | Content Creator | Creative Designer",
  subtitle: "Designing Digital Experiences & Creating Meaningful Content.",
  heroTagline: "Turning Ideas Into Creative Digital Experiences.",
  heroBio: "I'm passionate about designing beautiful digital experiences and creating meaningful content that connects with people.",
  education: "B.Sc Computer Science",
  location: "Salem, Tamil Nadu, India",
  photoUrl: "/assets/images/sridhar_portrait.jpeg",
  phone: "+91 96776 23051",
  phoneRaw: "9677623051",
  email: "sridhar.s0149@gmail.com",
  socials: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    whatsapp: "https://wa.me/919677623051?text=Hi%20Sridhar,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!",
  },
  aboutMeText: [
    "I'm Sridhar, a B.Sc Computer Science student passionate about UI/UX design, content creation and creative digital experiences.",
    "I enjoy transforming ideas into visually appealing designs, creating user-friendly interfaces and producing engaging digital content.",
    "I love exploring new creative tools, learning modern design techniques and continuously improving my skills.",
    "My goal is to create meaningful digital experiences and build a strong creative career."
  ]
};

export const DESIGN_SKILLS = [
  { name: "UI/UX Design", icon: "Layout" },
  { name: "Figma", icon: "Figma" },
  { name: "Wireframing", icon: "PenTool" },
  { name: "Prototyping", icon: "Layers" },
  { name: "User Research", icon: "Search" },
  { name: "User Flow", icon: "GitCommit" },
  { name: "Design Thinking", icon: "Lightbulb" },
  { name: "Visual Design", icon: "Palette" }
];

export const CREATIVE_SKILLS = [
  { name: "Canva", icon: "Sparkles" },
  { name: "Content Creator", icon: "Video" },
  { name: "E-book Design", icon: "BookOpen" },
  { name: "Mobile App UI Design", icon: "Smartphone" },
  { name: "Website UI Design", icon: "Globe" },
  { name: "Google Stitch", icon: "Grid" },
  { name: "AI Website Design", icon: "Cpu" }
];

export const TECHNICAL_SKILLS = [
  { name: "Python", icon: "Terminal", subtitle: "Data Science, AI & Development" }
];

export const PROJECTS: Project[] = [
  {
    id: "fee-reminder-bot",
    number: "01",
    title: "FEE REMINDER BOT",
    category: "EdTech & Automation",
    description: "A Smart College Fee Reminder System designed to simplify student fee management and automate fee deadline reminders.",
    thumbnail: "/assets/images/project_fee_reminder_1793409737262.jpg",
    accentColor: "from-blue-600 to-indigo-600",
    features: [
      "Student Fee Management",
      "Automated Fee Reminders",
      "Admin Dashboard",
      "Student Information Management",
      "Deadline Notifications"
    ],
    overview: "Managing college tuition dues and recurring fee cycles often results in administrative friction, missed deadlines, and delayed disbursements. The Fee Reminder Bot provides an integrated dashboard for college administrators to track pending payments and automatically dispatch timed, multi-channel reminder alerts to students.",
    problemStatement: "College administrative departments spend countless manual hours cross-referencing ledger tables and calling students before exam deadlines, leading to high administrative overhead and poor payment tracking visibility.",
    solution: "Designed a clean, single-pane dashboard featuring color-coded payment statuses, an automated reminder scheduler, student profile management, and granular deadline alerts.",
    uxHighlights: [
      "Intuitive payment status cards with instant cohort filtering",
      "One-click multi-channel dispatch (Email, SMS & WhatsApp) for batch reminders",
      "Clean tabular student fee ledger with exportable receipts",
      "Mobile-responsive portal view for students to verify payment receipts"
    ],
    toolsUsed: ["Figma", "UI/UX Design", "Wireframing", "Dashboard Design", "Prototyping"]
  },
  {
    id: "agritamil-ai",
    number: "02",
    title: "AGRITAMIL AI",
    category: "AgriTech & AI Experience",
    description: "An AI-powered agricultural assistance platform designed to provide useful agricultural information and smart support for farmers.",
    thumbnail: "/assets/images/project_agritamil_ai_1793409738294.jpg",
    accentColor: "from-emerald-500 to-teal-600",
    features: [
      "Crop Diagnostic Assistance",
      "Regional Farming Advice",
      "Weather & Seasonal Forecasts",
      "Localized Crop Calendar",
      "Smart Pest & Disease Detection"
    ],
    overview: "AgriTamil AI empowers farmers across Tamil Nadu with localized, accessible, and timely agricultural guidance. The user experience was built with low-literacy affordances, visual pest cards, and regional Tamil language ergonomics.",
    problemStatement: "Smallholder farmers often struggle to diagnose sudden crop diseases early or interpret complex meteorological advisories, leading to crop loss.",
    solution: "A mobile-first agricultural companion with high-contrast visual cards, voice-first search affordance, and photographic crop diagnosis guides.",
    uxHighlights: [
      "Accessible high-contrast UI designed for outdoor daylight legibility",
      "Iconographic diagnostic camera flow with instant disease matching",
      "Localized microclimate weather cards tailored to district agrarian zones",
      "Minimal cognitive load through simple visual swipe cards"
    ],
    toolsUsed: ["Figma", "User Research", "Mobile App UI Design", "Visual Design", "Design Thinking"]
  },
  {
    id: "agrisoil-ai",
    number: "03",
    title: "AGRISOIL AI",
    category: "AgriTech & Data Visualization",
    description: "An AI-based soil analysis and agricultural support platform designed to provide soil-related insights and support smarter farming decisions.",
    thumbnail: "/assets/images/project_agrisoil_ai_1793409737948.jpg",
    accentColor: "from-cyan-500 to-blue-600",
    features: [
      "Soil NPK Nutrient Analysis",
      "Moisture & pH Monitoring",
      "Crop Suitability Scoring",
      "Fertilizer Dosage Recommendations",
      "Historical Soil Health Trends"
    ],
    overview: "AgriSoil AI translates lab soil telemetry into clear, actionable farming decisions. Through clear data visualizations and radar charts, farmers can immediately gauge NPK deficits and receive exact organic and mineral fertilizer guidance.",
    problemStatement: "Traditional soil test reports are dense with chemical acronyms and parts-per-million metrics that average farm operators cannot readily translate into fertilizer action.",
    solution: "Designed an intuitive dashboard featuring an NPK radar diagram, color-coded soil moisture gauges, and smart crop rotation suggestions.",
    uxHighlights: [
      "Visual NPK radar polygon comparing current soil levels vs optimal crop baselines",
      "Color-coded pH balance gauge with instant corrective amendments",
      "Yield impact projection cards based on recommended soil treatments",
      "Bilingual interface toggle for regional field agronomy technicians"
    ],
    toolsUsed: ["Figma", "Data Visualization", "User Flow", "Wireframing", "UI Prototyping"]
  },
  {
    id: "civicfix",
    number: "04",
    title: "CIVICFIX",
    tagline: "Report. Track. Resolve.",
    category: "GovTech & Civic UX",
    description: "A Smart Local Issue Reporting & Resolution System that allows users to report public issues and track their resolution status.",
    thumbnail: "/assets/images/project_civicfix_app_1793409740963.jpg",
    accentColor: "from-purple-600 to-indigo-700",
    features: [
      "Report Local Issues",
      "Upload Issue Images",
      "Track Complaints",
      "Issue Status Updates",
      "Admin Dashboard",
      "Department Management"
    ],
    overview: "CivicFix bridges the communication gap between citizens and municipal authorities. Citizens can capture geo-tagged photos of civic infrastructure issues (potholes, broken streetlights, garbage overflow) and track the repair lifecycle transparently from submission to resolution.",
    problemStatement: "Citizens lack a transparent, accountable mechanism to report municipal breakdowns, while civic authorities struggle to triage incoming complaints across unorganized channels.",
    solution: "Designed a 3-step reporting mobile workflow paired with a municipal triage dashboard that groups tickets by ward, priority, and department responsibility.",
    uxHighlights: [
      "Rapid 3-tap incident reporting flow: Snap photo, GPS auto-detect, Submit",
      "Visual timeline status stepper (Submitted → Investigating → Repairing → Resolved)",
      "Municipal back-office dashboard with ward heatmaps and SLA monitors",
      "Before-and-after photo verification upon ticket resolution"
    ],
    toolsUsed: ["Figma", "User Flow", "Mobile App UI Design", "Admin Dashboard", "Prototyping"]
  }
];

export const CREATIVE_SPACE_ITEMS: CreativeItem[] = [
  {
    id: "cs-1",
    title: "Visual Storytelling: A Creative's Guide",
    category: "E-book",
    description: "Comprehensive 42-page editorial guide on typographic rhythm, layout hierarchy, and visual narrative for modern digital creators.",
    format: "PDF & Digital E-book",
    tools: "Canva · Figma",
    thumbnail: "/assets/images/creative_gallery_preview_1793409739432.jpg",
    aspect: "3:4"
  },
  {
    id: "cs-2",
    title: "Design Principles Carousel Series",
    category: "Digital Content",
    description: "10-part educational visual carousel breakdown on contrast, proximity, alignment, and modern micro-interactions.",
    format: "Visual Carousel (1080x1350)",
    tools: "Canva · Digital Design",
    thumbnail: "/assets/images/creative_gallery_preview_1793409739432.jpg",
    aspect: "4:5"
  },
  {
    id: "cs-3",
    title: "Minimalist Brand Identity Mockup Set",
    category: "Canva",
    description: "Cohesive brand stationery, color swatch boards, and social banners created for a sustainable lifestyle boutique.",
    format: "Brand Collateral",
    tools: "Canva Pro · Graphic Design",
    thumbnail: "/assets/images/creative_gallery_preview_1793409739432.jpg",
    aspect: "16:9"
  },
  {
    id: "cs-4",
    title: "UI/UX Starter Roadmap for Students",
    category: "Educational Content",
    description: "Infographic curriculum roadmap guiding college students from basic wireframing to portfolio-ready Figma case studies.",
    format: "Educational Visual Guide",
    tools: "Figma · Content Creation",
    thumbnail: "/assets/images/creative_gallery_preview_1793409739432.jpg",
    aspect: "16:9"
  },
  {
    id: "cs-5",
    title: "Creative Typography Poster Series",
    category: "Digital Content",
    description: "Experimental poster explorations examining modern neo-grotesque sans pairings with bold architectural grids.",
    format: "Digital Posters",
    tools: "Canva · Graphic Design",
    thumbnail: "/assets/images/creative_gallery_preview_1793409739432.jpg",
    aspect: "3:4"
  },
  {
    id: "cs-6",
    title: "Creator Playbook: Social Media Engagement",
    category: "E-book",
    description: "Strategic handbook covering visual hooks, thumbnail optimization, and consistent brand palettes for emerging creators.",
    format: "E-book & PDF Guide",
    tools: "Canva · E-book Design",
    thumbnail: "/assets/images/creative_gallery_preview_1793409739432.jpg",
    aspect: "4:5"
  }
];

export const DESIGN_PROCESS = [
  {
    step: "01",
    title: "Research",
    description: "Investigating user pain points, competitor landscapes, and real-world behavioral patterns through qualitative inquiry.",
    deliverables: "Competitive Analysis · User Interviews · Field Observations"
  },
  {
    step: "02",
    title: "Understand",
    description: "Synthesizing research insights into clear problem definitions, user personas, empathy maps, and core product objectives.",
    deliverables: "User Personas · Problem Statement · Information Architecture"
  },
  {
    step: "03",
    title: "Wireframing",
    description: "Constructing low-fidelity structural sketches and architectural blueprints to map out content hierarchy and navigation flows.",
    deliverables: "Low-Fi Wireframes · User Journey Flow · Screen Hierarchy"
  },
  {
    step: "04",
    title: "UI Design",
    description: "Crafting modern, pixel-perfect visual interfaces with deliberate typographic pairings, accessible palettes, and design tokens.",
    deliverables: "High-Fidelity Screens · Component System · Design Tokens"
  },
  {
    step: "05",
    title: "Prototyping",
    description: "Connecting UI screens into fluid, clickable interactive prototypes with realistic transitions, gestures, and state feedback.",
    deliverables: "Interactive Figma Prototypes · Micro-interactions · Clickable Demo"
  },
  {
    step: "06",
    title: "Testing & Improvement",
    description: "Validating interfaces with actual users to uncover friction, benchmark usability metrics, and iterate toward perfection.",
    deliverables: "Usability Audit · Feedback Matrix · Refined Production Assets"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "UI/UX Design",
    description: "End-to-end user experience design grounded in research, ergonomic flows, and intuitive digital interfaces.",
    iconName: "Layout",
    deliverables: ["User Research", "Wireframes", "Interactive Prototypes", "Design Systems"]
  },
  {
    number: "02",
    title: "Website UI Design",
    description: "Modern, high-converting desktop and responsive web layouts crafted with contemporary typography and spatial balance.",
    iconName: "Globe",
    deliverables: ["Responsive Layouts", "Component Libraries", "Style Guides", "Developer Handoff"]
  },
  {
    number: "03",
    title: "Mobile App UI Design",
    description: "Thumb-friendly, iOS and Android application interfaces designed for seamless navigation and high retention.",
    iconName: "Smartphone",
    deliverables: ["Mobile Design Systems", "Gesture Flows", "App Store Mockups", "Interactive Prototypes"]
  },
  {
    number: "04",
    title: "Landing Page Design",
    description: "High-impact landing experiences engineered with crisp visual hierarchy, compelling copy layout, and focused CTAs.",
    iconName: "Monitor",
    deliverables: ["Hero Concepts", "Conversion Wireframes", "Figma Auto-Layout", "Asset Exports"]
  },
  {
    number: "05",
    title: "Canva Graphic Design",
    description: "Expressive, flexible graphic templates and marketing collaterals engineered for immediate brand consistency.",
    iconName: "Sparkles",
    deliverables: ["Custom Canva Templates", "Brand Kits", "Marketing Flyers", "Digital Banners"]
  },
  {
    number: "06",
    title: "Social Media Post Design",
    description: "Attention-grabbing carousel slides, story templates, and feed graphics optimized for high social engagement.",
    iconName: "Share2",
    deliverables: ["Instagram Carousels", "LinkedIn Infographics", "Story Templates", "Feed Grids"]
  },
  {
    number: "07",
    title: "Content Creator",
    description: "Creative visual storytelling that translates complex concepts into clear, engaging, and memorable digital media.",
    iconName: "Video",
    deliverables: ["Educational Visuals", "Content Strategy", "Creative Direction", "Visual Media Assets"]
  },
  {
    number: "08",
    title: "E-book Design",
    description: "Polished editorial publications, whitepapers, and guides with elegant typography, chapter headers, and callouts.",
    iconName: "BookOpen",
    deliverables: ["Cover Concepts", "Editorial Layout", "Infographic Spreads", "Print-ready & Web PDFs"]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "coursera-uiux",
    title: "Introduction to UX/UI Design",
    issuer: "IBM",
    platform: "Coursera",
    issueDate: "Jun 18, 2026",
    credentialId: "QIYHZP1YD7VY",
    verifyUrl: "https://coursera.org/verify/QIYHZP1YD7VY",
    pdfUrl: "/assets/aistudio/Coursera_QIYHZP1YD7VY_1823c0ef.pdf",
    instructor: "Antonio Cangiano, Director, IBM Skills Network",
    skillsAcquired: [
      "User Interface Design Fundamentals",
      "User Experience Methodologies",
      "Wireframing & Prototyping",
      "Design Thinking & Usability Evaluation"
    ],
    description: "Official online certificate authorized by IBM and offered through Coursera, validating proficiency in UX/UI design thinking, user research synthesis, and interface prototyping."
  },
  {
    id: "coursera-python",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    platform: "Coursera",
    issueDate: "Dec 25, 2025",
    credentialId: "H4FYBJNZ5PR9",
    verifyUrl: "https://coursera.org/verify/H4FYBJNZ5PR9",
    pdfUrl: "/assets/aistudio/Coursera_H4FYBJNZ5PR9_2d5ce708.pdf",
    instructor: "Joseph Santarcangelo, Senior Data Scientist, IBM",
    skillsAcquired: [
      "Python Programming Fundamentals",
      "Data Science & AI Techniques",
      "Algorithmic Problem Solving",
      "Libraries & Data Structures"
    ],
    description: "Official online certificate authorized by IBM and offered through Coursera, validating competencies in Python programming, algorithmic logic, data structures, and AI development."
  }
];

export const MASTER_DRIBBBLE_PROMPT = `BUILD A PREMIUM PERSONAL PORTFOLIO WEBSITE

Create a modern, premium, creative and fully responsive personal portfolio website for Sridhar.
The website should represent a professional UI/UX Designer, Content Creator and Creative Designer.

1. PERSONAL DETAILS
Name: Sridhar
Education: B.Sc Computer Science
Professional Identity: UI/UX Designer | Content Creator | Creative Designer | Freelancer
Location: Salem, Tamil Nadu, India.
Main Tagline: "Designing Digital Experiences & Creating Meaningful Content."

2. DESIGN STYLE
Create a premium portfolio inspired by modern creative designer websites (Dribbble/Behance featured design).
Color Palette:
- White
- Dark Navy (#0A0F1D / #070B14)
- Blue Gradient (#2563EB to #3B82F6)
- Purple Gradient (#7C3AED to #6366F1)
- Light Grey (#F8FAFC)
Design Requirements:
- Premium minimalist design.
- Modern typography (Outfit / Plus Jakarta Sans).
- Smooth scrolling.
- Beautiful micro-animations and hover interactions.
- Glassmorphism effects with backdrop blur and subtle hairline borders.
- Professional visual hierarchy.
- Fully responsive layout with perfect mobile experience.

3. HOME – HERO SECTION
Display:
"Hi, I'm Sridhar 👋"
"UI/UX Designer | Content Creator | Creative Designer"
"I'm passionate about designing beautiful digital experiences and creating meaningful content that connects with people."
Tagline: "Turning Ideas Into Creative Digital Experiences."
Buttons:
- Explore My Work
- Hire Me
- Download Resume
Include:
- Professional profile image of Sridhar.
- Ambient gradient glows and glassmorphism card frame.
- Creative typography and social icons (LinkedIn, Instagram, GitHub, Email).

4. ABOUT ME
Title: About Me
Content:
"I'm Sridhar, a B.Sc Computer Science student passionate about UI/UX design, content creation and creative digital experiences.
I enjoy transforming ideas into visually appealing designs, creating user-friendly interfaces and producing engaging digital content.
I love exploring new creative tools, learning modern design techniques and continuously improving my skills.
My goal is to create meaningful digital experiences and build a strong creative career."
Include authentic portrait and modern editorial layout.

5. MY SKILLS
Display skills using beautiful cards with icons.
DESIGN SKILLS:
- UI/UX Design, Figma, Wireframing, Prototyping, User Research, User Flow, Design Thinking, Visual Design
CREATIVE SKILLS:
- Canva, Content Creator, E-book Design, Mobile App UI Design, Website UI Design, Google Stitch, AI Website Design
TECHNICAL & PROGRAMMING SKILLS:
- Python (Data Science, AI & Development - IBM Certified)
IMPORTANT:
Do not display fake skill percentages.

6. MY PROJECTS
Add ONLY these four projects with full case study modal viewers:
PROJECT 01: FEE REMINDER BOT
- A Smart College Fee Reminder System designed to simplify student fee management and automate fee deadline reminders.
- Features: Student Fee Management, Automated Fee Reminders, Admin Dashboard, Student Information Management, Deadline Notifications.
PROJECT 02: AGRITAMIL AI
- An AI-powered agricultural assistance platform designed to provide useful agricultural information and smart support for farmers.
PROJECT 03: AGRISOIL AI
- An AI-based soil analysis and agricultural support platform designed to provide soil-related insights and support smarter farming decisions.
PROJECT 04: CIVICFIX
- Tagline: Report. Track. Resolve.
- A Smart Local Issue Reporting & Resolution System that allows users to report public issues and track their resolution status.
- Features: Report Local Issues, Upload Issue Images, Track Complaints, Issue Status Updates, Admin Dashboard, Department Management.

7. CONTENT CREATION SECTION (My Creative Space)
Showcase: Canva Creations, Creative Posts, Educational Content, E-book Designs, Digital Content.
Visual gallery with lightbox previews and Instagram/LinkedIn links.

8. MY DESIGN PROCESS
Visual timeline:
1. Research -> 2. Understand -> 3. Wireframing -> 4. UI Design -> 5. Prototyping -> 6. Testing & Improvement.

9. MY SERVICES (What I Can Do For You)
8 Service cards: UI/UX Design, Website UI Design, Mobile App UI Design, Landing Page Design, Canva Graphic Design, Social Media Post Design, Content Creator, E-book Design.

10. CERTIFICATIONS
- IBM & Coursera: Introduction to UX/UI Design (Verified Credential QIYHZP1YD7VY)
- IBM & Coursera: Python for Data Science, AI & Development (Verified Credential H4FYBJNZ5PR9)

11. FREELANCING & OPPORTUNITIES
Headline: "Let's Create Something Amazing Together!"
Status: Available for Freelance Projects, Open to Internships, Open to Remote Opportunities, Open to Collaborations.

12. CONTACT SECTION
"Have a Project in Mind? Let's Talk!"
Mobile (+91 96776 23051), Email, LinkedIn, GitHub, WhatsApp + interactive contact form with validation.

13. FOOTER & RESUME MODAL
"Designed with creativity by Sridhar. UI/UX Designer | Content Creator | Creative Designer. © 2026 Sridhar. All Rights Reserved."
Complete working downloadable resume viewer.`;
