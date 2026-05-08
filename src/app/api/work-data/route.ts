import { NextResponse } from "next/server";

const workData = [
  {
    image: "/images/work/collubi.jpeg",
    title: "Multi-Vendor E-Commerce & Real-Time Bidding Platform",
    client: "Collubi",
    link: "https://collubi.com/",
  },
  {
    image: "/images/work/rentatron.jpeg",
    title: "Peer-to-Peer Car Rental Platform with Admin Portal",
    client: "Rentatron",
    link: "https://rentatron.vercel.app/",
  },
  {
    image: "/images/work/shadow-match.png",
    title: "Multi-Tenant Healthcare & Clinic Management System",
    client: "Shadow Match",
    link: "https://shadowmatchuser-ads.vercel.app",
  },
  {
    image: "/images/work/orangi-store.png",
    title: "Localized Multi-Vendor E-Commerce Platform with SEO Optimization",
    client: "Orangi Store",
    link: "https://www.orangistore.com/",
  },
  {
    image: "/images/work/premium.jpeg",
    title: "High-Conversion International Landing Page & Brand Identity",
    client: "PremiumID",
    link: "https://premiumid-ads.vercel.app/",
  },
  {
    image: "/images/work/emr.jpeg",
    title: "5-Tier Hospital Management System (EMR)",
    client: "EMR Health",
    link: "https://emrfront.netlify.app/",
  },
  {
    image: "/images/work/head2head.jpeg",
    title: "Interactive Sports Analytics & Football Team Builder",
    client: "H2H Gaming",
    link: "https://head2head-ads.vercel.app",
  },
  {
    image: "/images/work/automotor.jpeg",
    title: "Real-Time Car Auction & Vehicle Data Portal",
    client: "AutoMotor",
    link: "http://automotor-ads.vercel.app/",
  },
  {
    image: "/images/work/crypto.png",
    title: "Cryptocurrency Exchange Platform — Fast & Secure Trading",
    client: "CryptoTech",
    link: "https://crypto-new-ads.vercel.app",
  },
  {
    image: "/images/work/immsy.jpeg",
    title: "High-End Immersive UI — Interactive Web Experience",
    client: "Immsy",
    link: "https://immsy-ads.vercel.app/",
  },
  {
    image: "/images/work/lilia.jpeg",
    title: "CNN & LLM Solution for Medical Imaging — Brain Aneurysm Detection",
    client: "Lilia AI",
    link: "https://liliaai-ads.vercel.app",
  },
  {
    image: "/images/work/mya.jpeg",
    title: "AI-Powered Interactive Data Visualization Platform",
    client: "Dewey AI",
    link: "https://deweyai-ads.vercel.app",
  },
  {
    image: "/images/work/sirajia.jpeg",
    title: "Corporate Branding & Digital Presence — IT Solutions Company",
    client: "Sirajia Sol",
    link: "https://sirajiasol-ads.vercel.app/",
  },
  {
    image: "/images/work/transfer.jpeg",
    title: "Germany-Based Airport Transfer & Logistics Booking System",
    client: "Transfer511",
    link: "https://transfer511-ads.vercel.app/",
  },
  {
    image: "/images/work/victor-design.jpeg",
    title: "Sleek Minimalist Portfolio Website for Creative Professionals",
    client: "Victor Design",
    link: "http://victordesign-ads.vercel.app",
  },
  {
    image: "/images/work/digital-experts.jpeg",
    title: "Creative Digital Agency Website — Onshot Tech",
    client: "Moonshot",
    link: "https://moonshotanimations-ads.vercel.app/",
  },
];

export const GET = async () => {
  return NextResponse.json({
    workData,
  });
};



