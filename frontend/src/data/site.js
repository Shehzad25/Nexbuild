import {
  Globe, Code2, Smartphone, Bot, TrendingUp, Palette, Zap, Wrench,
  GraduationCap, Store, Rocket, UtensilsCrossed, ShoppingBag, Briefcase,
  Handshake, Building2, Target, Cpu, MonitorSmartphone, MessagesSquare,
  CalendarCheck, Headset, Magnet, Blocks, Workflow, MessageSquare,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "Why Us", to: "/why-us" },
  { label: "Process", to: "/process" },
  { label: "Promise", to: "/promise" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export const TEAM = [
  {
    name: "Shehzad Khan",
    initials: "SK",
    phone: "9730525070",
    phoneIntl: "9730525070",
    email: "khanshehzad2698@gmail.com",
  },
  {
    name: "Rushikesh Suryarao",
    initials: "RS",
    phone: "8793280415",
    phoneIntl: "8793280415",
    email: "r.suryarao007@gmail.com",
  },
  {
    name: "Chetan Deshmukh",
    initials: "CD",
    phone: "8856841644",
    phoneIntl: "8856841644",
    email: "deshmukhchetan694@gmail.com",
  },
];

export const WHATSAPP_URL =
  "https://wa.me/919730525070?text=" +
  encodeURIComponent("Hi NexBuild Tech & Services, I would like to discuss a project.");

export const STATS = [
  { to: 15, suffix: "+", label: "Projects Built" },
  { to: 6, suffix: "+", label: "Core Services" },
  { to: 100, suffix: "%", label: "Client Focused" },
  { text: "24/7", label: "Digital Possibilities" },
];

export const SERVICES = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Modern, responsive and SEO-friendly websites that represent your brand.",
    tags: ["Business websites", "School websites", "Portfolio websites", "Landing pages", "Corporate websites", "E-commerce websites"],
  },
  {
    icon: Code2,
    title: "Web Application Development",
    desc: "Custom web applications built for performance, scalability and growth.",
    tags: ["Admin dashboards", "Management systems", "Booking systems", "Business platforms", "Customer portals"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Android and iOS applications with seamless user experiences.",
    tags: ["Business apps", "School apps", "Booking apps", "Management apps", "Custom mobile applications"],
  },
  {
    icon: Bot,
    title: "AI & Chatbot Solutions",
    desc: "Intelligent AI solutions that help businesses automate and engage better.",
    tags: ["AI chatbots", "Customer support bots", "AI assistants", "Document-based AI", "Business automation", "AI integrations"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & SEO",
    desc: "Help your business become more visible and discoverable online.",
    tags: ["SEO", "Local SEO", "Social media", "Content strategy", "Google visibility", "Digital campaigns"],
  },
  {
    icon: Palette,
    title: "UI/UX Design & Branding",
    desc: "Attractive digital experiences and consistent brand identities.",
    tags: ["UI design", "UX design", "Logo design", "Social media creatives", "Business banners", "Brand identity"],
  },
  {
    icon: Zap,
    title: "Automation Solutions",
    desc: "Automate repetitive business processes using modern technologies.",
    tags: ["Workflow automation", "Data entry automation", "Report generation", "Notifications & alerts"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Updates, bug fixes, improvements, hosting assistance and technical support.",
    tags: ["Website updates", "Bug fixes", "Performance improvements", "Hosting assistance", "Technical support"],
  },
];

export const SOLUTIONS = [
  { icon: GraduationCap, title: "Schools & Educational Institutions", desc: "Modern school websites, admission systems, enquiry forms, galleries, announcements and digital communication." },
  { icon: Store, title: "Small Businesses", desc: "Professional websites, Google visibility and digital tools that help you win more local customers." },
  { icon: Rocket, title: "Startups", desc: "Landing pages, MVPs, web apps and brand identities built fast, so you can launch and validate quickly." },
  { icon: UtensilsCrossed, title: "Restaurants & Cafes", desc: "Menu websites, online ordering, table booking systems and social media creatives that grow footfall." },
  { icon: ShoppingBag, title: "Shops & Local Businesses", desc: "Catalogue websites, WhatsApp ordering, local SEO and Google Business optimization for nearby customers." },
  { icon: Briefcase, title: "Professionals", desc: "Portfolio websites, personal branding and booking systems for consultants, doctors, trainers and creators." },
  { icon: Handshake, title: "Service Businesses", desc: "Lead-generation websites, booking systems and automation that turn enquiries into confirmed customers." },
  { icon: Building2, title: "Growing Companies", desc: "Scalable web platforms, dashboards, AI automation and dedicated long-term support for expanding operations." },
];

export const PROJECT_FILTERS = [
  { key: "all", label: "All" },
  { key: "websites", label: "Websites" },
  { key: "apps", label: "Apps" },
  { key: "ai", label: "AI" },
  { key: "branding", label: "Branding" },
];

export const PROJECTS = [
  {
    id: "school-website",
    title: "School Website",
    category: "websites",
    categoryLabel: "Website",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    desc: "A modern school website with admission enquiries, gallery, notices and parent communication.",
    tech: ["React", "Tailwind CSS", "SEO"],
    details: "A complete digital presence for a school — admissions enquiry forms, photo galleries, announcement boards, staff directory and a mobile-first experience for parents.",
    features: ["Admission enquiry system", "Notice board & announcements", "Photo & event gallery", "Mobile-first parent experience"],
  },
  {
    id: "business-website",
    title: "Business Website",
    category: "websites",
    categoryLabel: "Website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    desc: "A corporate website that presents services clearly and converts visitors into enquiries.",
    tech: ["React", "CMS", "Analytics"],
    details: "A polished corporate website with service pages, lead capture forms, Google Maps integration and analytics to measure every enquiry.",
    features: ["Service showcase pages", "Lead capture forms", "Google Maps & reviews", "Analytics dashboard"],
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    category: "ai",
    categoryLabel: "AI Solution",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=80",
    desc: "An intelligent chatbot that answers customer questions and captures leads 24/7.",
    tech: ["Python", "LLM APIs", "WhatsApp API"],
    details: "An AI assistant trained on business documents that answers FAQs, qualifies leads and hands over conversations to the team on WhatsApp.",
    features: ["Document-based answers", "Lead qualification", "WhatsApp handover", "24/7 automated support"],
  },
  {
    id: "ecommerce-website",
    title: "E-commerce Website",
    category: "websites",
    categoryLabel: "Website",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    desc: "An online store with catalogue, cart, secure payments and order management.",
    tech: ["React", "Payments", "Admin Panel"],
    details: "A full e-commerce experience — product catalogue, cart, secure checkout, order tracking and an admin panel to manage inventory.",
    features: ["Product catalogue & search", "Secure online payments", "Order tracking", "Inventory admin panel"],
  },
  {
    id: "management-dashboard",
    title: "Management Dashboard",
    category: "apps",
    categoryLabel: "Web App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    desc: "A business dashboard that brings sales, staff and operations data into one view.",
    tech: ["React", "FastAPI", "Charts"],
    details: "A central operations dashboard with role-based access, real-time charts, exports and automated daily summaries.",
    features: ["Role-based access", "Real-time charts & KPIs", "Data exports", "Automated daily reports"],
  },
  {
    id: "mobile-application",
    title: "Mobile Application",
    category: "apps",
    categoryLabel: "Mobile App",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    desc: "A booking and management app for Android and iOS with push notifications.",
    tech: ["React Native", "Firebase", "Push Notifications"],
    details: "A cross-platform mobile app with booking flows, customer profiles, reminders and push notifications to keep users engaged.",
    features: ["Android & iOS builds", "Booking & scheduling", "Push notifications", "Customer profiles"],
  },
  {
    id: "brand-identity",
    title: "Brand Identity Kit",
    category: "branding",
    categoryLabel: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
    desc: "A complete brand kit — logo, colors, social media creatives and business banners.",
    tech: ["Logo Design", "Creatives", "Brand Guidelines"],
    details: "A consistent identity system covering logo usage, color palette, typography, social media templates and print-ready banners.",
    features: ["Logo & variations", "Color & type system", "Social media templates", "Print-ready banners"],
  },
];

export const WHY_US = [
  { icon: Target, title: "Business-Focused", desc: "We build around your actual business requirements." },
  { icon: Cpu, title: "Modern Technology", desc: "Modern web, mobile, AI and automation technologies." },
  { icon: MonitorSmartphone, title: "Responsive Experiences", desc: "Solutions that work beautifully across devices." },
  { icon: MessagesSquare, title: "Transparent Communication", desc: "Clear communication throughout the project." },
  { icon: CalendarCheck, title: "Reliable Delivery", desc: "A structured approach from planning to launch." },
  { icon: Headset, title: "Dedicated Support", desc: "Support and improvements after launch." },
];

export const PROCESS_STEPS = [
  { num: "01", title: "Understand", desc: "We understand your business, goals and requirements." },
  { num: "02", title: "Plan", desc: "We define the structure, features, technology and project roadmap." },
  { num: "03", title: "Design", desc: "We create the UI/UX and visual experience." },
  { num: "04", title: "Build", desc: "We develop and integrate the required functionality." },
  { num: "05", title: "Test", desc: "We test performance, responsiveness and functionality." },
  { num: "06", title: "Launch", desc: "We deploy your solution and help you get started." },
  { num: "07", title: "Grow", desc: "We provide improvements, maintenance and support." },
];

export const AI_FEATURES = [
  { icon: Bot, title: "AI Chatbots" },
  { icon: MessageSquare, title: "Customer Support Automation" },
  { icon: Magnet, title: "Lead Generation" },
  { icon: Briefcase, title: "Business Assistants" },
  { icon: Workflow, title: "Workflow Automation" },
  { icon: Blocks, title: "AI Integrations" },
];

export const SEO_POINTS = [
  "Technical SEO",
  "On-page SEO",
  "Local SEO",
  "Keyword optimization",
  "Performance optimization",
  "Search-friendly content",
  "Google Business optimization",
];

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    business: "Sunrise Public School",
    rating: 5,
    text: "NexBuild built our school website with an admission enquiry system and notice board. Parents find it easy to use, and enquiries have increased noticeably. The team communicated clearly at every step.",
  },
  {
    name: "Amit Patel",
    business: "Patel Electronics",
    rating: 5,
    text: "We needed a catalogue website with WhatsApp ordering for our shop. NexBuild delivered on time, and local customers now find us on Google. Great value and honest guidance throughout.",
  },
  {
    name: "Sneha Kulkarni",
    business: "Cafe Aroma",
    rating: 5,
    text: "From our menu website to social media creatives, everything looks premium. The table booking form works smoothly on phones, which is exactly what we needed.",
  },
  {
    name: "Rahul Verma",
    business: "Verma Consultancy",
    rating: 5,
    text: "Their AI chatbot now answers common client questions on our website and forwards serious enquiries to us. It saves hours every week. Professional team, transparent process.",
  },
];

export const FAQS = [
  { q: "What type of websites do you build?", a: "We build business websites, school websites, portfolio websites, landing pages, corporate websites and e-commerce stores. Every website is modern, mobile-friendly and SEO-ready." },
  { q: "Do you build mobile applications?", a: "Yes. We build Android and iOS applications including business apps, school apps, booking apps, management apps and fully custom mobile applications." },
  { q: "Can you add AI to an existing website?", a: "Absolutely. We can add AI chatbots, AI assistants and automation features to your existing website or app without rebuilding everything from scratch." },
  { q: "Do you provide SEO?", a: "Yes. We provide technical SEO, on-page SEO, local SEO, keyword optimization and Google Business optimization so customers can actually find you online." },
  { q: "Do you provide website maintenance?", a: "Yes. We offer ongoing maintenance plans covering updates, bug fixes, improvements, backups, hosting assistance and technical support." },
  { q: "How long does a website take to build?", a: "A simple website typically takes 1–2 weeks. Larger projects like web applications or e-commerce stores usually take 3–6 weeks, depending on features. We share a clear timeline before starting." },
  { q: "Do you provide hosting and domain assistance?", a: "Yes. We help you choose, register and set up your domain and hosting, and we handle the complete deployment for you." },
  { q: "Can you customize the solution according to our business?", a: "That is exactly how we work. Every solution is planned around your business goals, processes and budget — nothing is a one-size-fits-all template." },
  { q: "Do you provide support after launch?", a: "Yes. We stay available after launch for updates, improvements and technical help. Long-term support is a core part of how we work." },
  { q: "How can I get a project quote?", a: "Simply fill in the enquiry form on our Contact page, call us, or message us on WhatsApp. Tell us your idea and we will get back with a clear, no-obligation quote." },
];

export const SERVICE_OPTIONS = [
  "Website Development",
  "Web Application Development",
  "Mobile App Development",
  "AI & Chatbot Solutions",
  "Digital Marketing & SEO",
  "UI/UX Design & Branding",
  "Automation Solutions",
  "Maintenance & Support",
  "Other / Not Sure Yet",
];

export const BUDGET_OPTIONS = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "Above ₹1,00,000",
  "Not Sure Yet",
];
