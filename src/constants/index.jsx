import { Brain } from "lucide-react";
import { CpuIcon } from "lucide-react";
import { Notebook } from "lucide-react";
import { BarChart } from "lucide-react";
import { PenToolIcon } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
export const navItems = [
  { label: "About Us", sectionId: "hero-section" },
  { label: "Features", sectionId: "feature-section" },
  { label: "Workflow", sectionId: "workflow-section" },
  { label: "Contact Us", sectionId: "contact-section"}

];
export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Brain />,
    text: "AI-Powered Learning",
    description:
      "Enhance your study sessions with our advanced AI that offers personalized questions, explanations, and instant support tailored to your medical textbooks.",
  },
  {
    icon: <CpuIcon />,
    text: "Multi-Device Compatibility",
    description:
      "Access Acolyte seamlessly across multiple devices, including tablets, smartphones, and computers, for uninterrupted learning anywhere.",
  },
  {
    icon: <Notebook />,
    text: "Smart Note-Taking",
    description:
      "Utilize our innovative note-taking system with toggle functionality, allowing you to take notes efficiently without losing sight of your study material.",
  },
  {
    icon: <BarChart />,
    text: "Real-Time Progress Tracking",
    description:
      "Monitor your learning progress in real-time, identifying areas for improvement and adjusting your study strategy for optimal results.",
  },
  {
    icon: <PenToolIcon />,
    text: "Collaboration Tools",
    description:
      "Share notes and insights with fellow students, fostering a collaborative learning environment to enhance your medical education.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into your study habits and performance with our integrated analytics dashboard, helping you optimize your learning approach.",
  },
];

export const checklistItems = [
  {
    title: "Efficient Learning",
    description:
      "Master complex medical concepts faster with AI-assisted study tools and personalized learning paths.",
  },
  {
    title: "Seamless Note Organization",
    description:
      "Keep your notes organized and easily accessible, linked directly to relevant textbook sections.",
  },
  {
    title: "Time-Saving Features",
    description:
      "Reduce study time with smart summaries, quick-reference tools, and instant answers to your questions.",
  },
  {
    title: "Collaborative Study",
    description:
      "Share insights and study materials with peers, enhancing your understanding through group learning.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
