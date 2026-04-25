import { NextResponse } from "next/server";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "talhaanxaritn@gmail.com",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:talhaanxaritn@gmail.com",
    },
    {
      type: "phone",
      label: "+92 3400262456",
      icon: "/images/icon/call-icon.svg",
      link: "tel:+923400262456",
    },
  ],
  socialItems: [
    {
      platform: "upwork",
      icon: "/images/icon/upwork-icon.svg",
      link: "https://www.upwork.com/freelancers/~011c42c29eb76d4d4f?mp_source=share",
    },
    {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.svg",
      link: "https://www.linkedin.com/in/junaid-junaid-586877373",
    },
    {
      platform: "facebook",
      icon: "/images/icon/facebook-icon.svg",
      link: "https://facebook.com",
    },
  ],
};

const educationData = {
  education: [
    {
      title: "Bachelor of Computer Science (BSCS) - 2025 - Present",
      description:
        "Studying software engineering, algorithms, and full-stack development. Building strong technical skills alongside real-world project experience.",
    },
    {
      title: "Intermediate in Computer Science (ICS) - 2023 - 2024",
      description:
        "Focused on Mathematics, Physics, and Computer Science fundamentals. Developed strong analytical and problem-solving skills.",
    },
    {
      title: "Matriculation (Science) - 2021 - 2022",
      description:
        "Completed secondary education with a science background. Built a solid foundation in logic, computing basics, and critical thinking.",
    },
  ],
  skills: [
    { name: "React.js", icon: "/images/home/education-skill/react.svg", rating: 5 },
    { name: "Next.js", icon: "/images/home/education-skill/next.svg", rating: 5 },
    { name: "JavaScript", icon: "/images/home/education-skill/javascript.svg", rating: 5 },
    { name: "TypeScript", icon: "/images/home/education-skill/typescript.svg", rating: 4 },
    { name: "HTML5", icon: "/images/home/education-skill/html5.svg", rating: 5 },
    { name: "CSS3", icon: "/images/home/education-skill/css.svg", rating: 5 },
    { name: "React Native", icon: "/images/home/education-skill/react.svg", rating: 5 },
    { name: "Tailwind CSS", icon: "/images/home/education-skill/tailwind-css.svg", rating: 5 },
    { name: "Shadcn UI", icon: "/images/home/education-skill/shadcn-ui.svg", rating: 4 },
    { name: "Material UI", icon: "/images/home/education-skill/mui.svg", rating: 4 },
    { name: "Node.js", icon: "/images/home/education-skill/node.svg", rating: 5 },
    { name: "Express.js", icon: "/images/home/education-skill/expressdotjs.svg", rating: 5 },
    { name: "Laravel", icon: "/images/home/education-skill/laravel.svg", rating: 4 },
    { name: "Socket.io", icon: "/images/home/education-skill/socket.svg", rating: 5 },
    { name: "REST APIs", icon: "/images/home/education-skill/gcp-api.svg", rating: 5 },
    { name: "Axios", icon: "/images/home/education-skill/axios.svg", rating: 5 },
    { name: "Redux Toolkit", icon: "/images/home/education-skill/redux.svg", rating: 5 },
    { name: "TanStack Query", icon: "/images/home/education-skill/react-query.svg", rating: 4 },
    { name: "WordPress", icon: "/images/home/education-skill/wordpress.svg", rating: 4 },
    { name: "AI Integration", icon: "/images/home/education-skill/claude.svg", rating: 4 },
    { name: "Chatbot Development", icon: "/images/home/education-skill/aws-cat-artificial-intelligence.svg", rating: 4 },
    { name: "Git", icon: "/images/home/education-skill/git.svg", rating: 5 },
    { name: "GitHub", icon: "/images/home/education-skill/github.svg", rating: 5 },
    { name: "i18n", icon: "/images/home/education-skill/i18next.svg", rating: 3 },
  ]
};

const contactLinks = {
  socialLinks: [
    {
      title: "Upwork",
      href: "https://www.upwork.com/freelancers/~011c42c29eb76d4d4f?mp_source=share",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/junaid-junaid-586877373",
    },
    {
      title: "Facebook",
      href: "https://facebook.com",
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "talhaanxaritn@gmail.com",
      link: "mailto:talhaanxaritn@gmail.com",
    },
    {
      type: "phone",
      label: "+92 3400262456",
      link: "tel:+923400262456",
    },
  ],
};

export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks,
  });
};
