import { Menu } from "@/types/menu";

const sideMenu: Menu[] = [
  {
    id: 1,
    title: "Welcome",
    path: "/docs/",
    newTab: false,
  },
  {
    id: 2,
    title: "Project Overview",
    path: "/docs/overview",
    newTab: false,
    submenu: [
      { id: 11, title: "Brief description of the project and its objectives", path: "/docs/project-overview#brief-description", newTab: false },
      { id: 12, title: "Key features and functionalities", path: "/docs/project-overview#key-features", newTab: false },
      { id: 13, title: "Target audience and user personas", path: "/docs/project-overview#target-audience", newTab: false },
    ],
  },
  {
    id: 3,
    title: "Technology Stack",
    path: "/docs/technology-stack",
    newTab: false,
    submenu: [
      { id: 21, title: "Frontend: Next.js, Tailwind CSS, Daisy UI, Framer Motion", path: "/docs/technology-stack#frontend", newTab: false },
      { id: 22, title: "Backend: Next.js API routes (or a separate backend if necessary)", path: "/docs/technology-stack#backend", newTab: false },
      { id: 23, title: "Database: MongoDB", path: "/docs/technology-stack#database", newTab: false },
      { id: 24, title: "Other dependencies and libraries", path: "/docs/technology-stack#other-dependencies", newTab: false },
    ],
  },
  {
    id: 4,
    title: "Architecture and System Design",
    path: "/docs/architecture-and-system-design",
    newTab: false,
    submenu: [
      { id: 31, title: "High-level system architecture diagram", path: "/docs/architecture-system-design#high-level-architecture", newTab: false },
      { id: 32, title: "Client-side architecture (React components, state management, routing)", path: "/docs/architecture-system-design#client-side-architecture", newTab: false },
      { id: 33, title: "Server-side architecture (API routes, data fetching, caching)", path: "/docs/architecture-system-design#server-side-architecture", newTab: false },
      { id: 34, title: "Database design (schema, data modeling, indexing)", path: "/docs/architecture-system-design#database-design", newTab: false },
      { id: 35, title: "Authentication and authorization strategies", path: "/docs/architecture-system-design#authentication", newTab: false },
      { id: 36, title: "Payment integration (e.g., Stripe, PayPal)", path: "/docs/architecture-system-design#payment-integration", newTab: false },
      { id: 37, title: "Order tracking and shipping integration (e.g., third-party APIs)", path: "/docs/architecture-system-design#order-tracking", newTab: false },
    ],
  },
  {
    id: 5,
    title: "User Interface and User Experience",
    path: "/docs/user-interface",
    newTab: false,
    submenu: [
      { id: 41, title: "Wireframes and mockups for key pages and components", path: "/docs/user-interface#wireframes", newTab: false },
      { id: 42, title: "UI component library and design system", path: "/docs/user-interface#component-library", newTab: false },
      { id: 43, title: "Responsive design and mobile considerations", path: "/docs/user-interface#responsive-design", newTab: false },
      { id: 44, title: "Accessibility standards and best practices", path: "/docs/user-interface#accessibility", newTab: false },
    ],
  },
  {
    id: 6,
    title: "Development Workflow and Processes",
    path: "/docs/development-workflow-and-processes",
    newTab: false,
    submenu: [
      { id: 51, title: "Git branching and merging strategy", path: "/docs/development-workflow#git-strategy", newTab: false },
      { id: 52, title: "Continuous Integration and Continuous Deployment (CI/CD) setup", path: "/docs/development-workflow#cicd", newTab: false },
      { id: 53, title: "Testing strategy (unit tests, integration tests, end-to-end tests)", path: "/docs/development-workflow#testing-strategy", newTab: false },
      { id: 54, title: "Code review and quality assurance processes", path: "/docs/development-workflow#code-review", newTab: false },
      { id: 55, title: "Agile project management (sprints, task tracking, retrospectives)", path: "/docs/development-workflow#agile-management", newTab: false },
    ],
  },
  {
    id: 7,
    title: "Performance and Scalability",
    path: "/docs/performance-and-scalability",
    newTab: false,
    submenu: [
      { id: 61, title: "Server-side rendering (SSR) and static site generation (SSG) strategies", path: "/docs/performance-scalability#ssr-ssg", newTab: false },
      { id: 62, title: "Caching mechanisms (client-side, server-side, CDN)", path: "/docs/performance-scalability#caching", newTab: false },
      { id: 63, title: "Load balancing and horizontal scaling considerations", path: "/docs/performance-scalability#load-balancing", newTab: false },
      { id: 64, title: "Performance optimization techniques (code splitting, lazy loading, image optimization)", path: "/docs/performance-scalability#performance-optimization", newTab: false },
    ],
  },
  {
    id: 8,
    title: "Security and Data Privacy",
    path: "/docs/security-and-data-privacy",
    newTab: false,
    submenu: [
      { id: 71, title: "HTTPS and SSL/TLS implementation", path: "/docs/security-data-privacy#https-ssl", newTab: false },
      { id: 72, title: "Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) protection", path: "/docs/security-data-privacy#xss-csrf", newTab: false },
      { id: 73, title: "Input validation and sanitization", path: "/docs/security-data-privacy#input-validation", newTab: false },
      { id: 74, title: "Data encryption and secure storage", path: "/docs/security-data-privacy#data-encryption", newTab: false },
      { id: 75, title: "Compliance with relevant data privacy regulations (e.g., GDPR, CCPA)", path: "/docs/security-data-privacy#compliance", newTab: false },
    ],
  },
  {
    id: 9,
    title: "Deployment and Infrastructure",
    path: "/docs/deployment",
    newTab: false,
    submenu: [
      { id: 81, title: "Hosting and deployment options (e.g., Vercel, AWS, Google Cloud)", path: "/docs/deployment-infrastructure#hosting-deployment", newTab: false },
      { id: 82, title: "Serverless functions and serverless architecture considerations", path: "/docs/deployment-infrastructure#serverless", newTab: false },
      { id: 83, title: "Content Delivery Network (CDN) and edge computing", path: "/docs/deployment-infrastructure#cdn-edge-computing", newTab: false },
      { id: 84, title: "Monitoring and logging strategies", path: "/docs/deployment-infrastructure#monitoring-logging", newTab: false },
    ],
  },
  {
    id: 10,
    title: "Third-Party Integrations",
    path: "/docs/third-party-integrations",
    newTab: false,
    submenu: [
      { id: 91, title: "Blog platform integration (e.g., Contentful, Sanity.io)", path: "/docs/third-party-integrations#blog-platform", newTab: false },
      { id: 92, title: "Analytics and tracking (e.g., Google Analytics, Mixpanel)", path: "/docs/third-party-integrations#analytics-tracking", newTab: false },
      { id: 93, title: "Social media sharing and authentication", path: "/docs/third-party-integrations#social-media", newTab: false },
    ],
  },
];

// Setting the next references
for (let i = 0; i < sideMenu.length - 1; i++) {
  sideMenu[i].next = sideMenu[i + 1];
}

export default sideMenu;
