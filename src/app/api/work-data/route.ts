import { NextResponse } from "next/server";

const workData = [
  {
    image: "/images/work/automotor.jpeg",
    title: "Auto Motor Auctions - Vehicle Bidding Platform",
    client: "AutoMotor",
    link: "http://automotorauctions.com/",
  },
  {
    image: "/images/work/collubi.jpeg",
    title: "Collubi - Influencer Marketing Hub",
    client: "Collubi",
    link: "https://collubi.com/",
  },
  {
    image: "/images/work/crypto.png",
    title: "CryptoCurrency Dashboard & Exchange",
    client: "CryptoTech",
    link: "https://crypto-upgrade.vercel.app/", 
  },
  {
    image: "/images/work/emr.jpeg",
    title: "EMR Front - Healthcare Management System",
    client: "EMR Health",
    link: "https://emrfront.netlify.app/",
  },
  {
    image: "/images/work/head2head.jpeg",
    title: "Head2Head - Competitive Gaming Platform",
    client: "H2H Gaming",
    link: "https://head2head.vercel.app/",
  },
  {
    image: "/images/work/immsy.jpeg",
    title: "Immsy - Immersive Digital Experiences",
    client: "Immsy",
    link: "https://immsy.vercel.app/",
  },
  {
    image: "/images/work/lilia.jpeg",
    title: "Lilia AI - Intelligent Business Solutions",
    client: "Lilia AI",
    link: "https://www.lilia-ai.com/",
  },
  {
    image: "/images/work/mya.jpeg",
    title: "Dewey AI - Smart Knowledge Base",
    client: "Dewey AI",
    link: "https://deweyai.dev-um.xyz/",
  },
  {
    image: "/images/work/orangi-store.png",
    title: "Orangi Store - E-commerce Marketplace",
    client: "Orangi Store",
    link: "https://orangistore.com/",
  },
  {
    image: "/images/work/premium.jpeg",
    title: "Premium ID - Identity & Branding Agency",
    client: "PremiumID",
    link: "https://www.premiumid.it/",
  },
  {
    image: "/images/work/rentatron.jpeg",
    title: "Rentatron - Equipment Rental Solution",
    client: "Rentatron",
    link: "https://rentatron.vercel.app/",
  },
  {
    image: "/images/work/shadow-match.png",
    title: "Shadow Match - Behavioral Assessment Tool",
    client: "Shadow Match",
    link: "https://shadowmatchuser.dev-bt.xyz/",
  },
  {
    image: "/images/work/sirajia.jpeg",
    title: "Sirajia Solutions - Educational Tech",
    client: "Sirajia Sol",
    link: "https://sirajiasol.com/",
  },
  {
    image: "/images/work/transfer.jpeg",
    title: "Secure Transfer - Fintech Transaction App",
    client: "Transfer511",
    link: "https://nextjs-transfer511.vercel.app/",
  },
  {
    image: "/images/work/victor-design.jpeg",
    title: "Victor Design - Creative Portfolio & Studio",
    client: "Victor Design",
    link: "http://victor-design.netlify.app/",
  },
];

export const GET = async () => {
  return NextResponse.json({
    workData,
  });
};
