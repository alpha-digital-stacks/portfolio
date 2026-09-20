"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SectionHeading from "../../shared/section-heading";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/work-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="work" className="scroll-mt-28 bg-background">
      <div className="py-16 md:py-28">
        <div className="container">
          <SectionHeading
            title="Latest Works"
            index="03"
            eyebrow="Selected projects"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-8">
            {workData?.map((value: any, index: number) => (
              <Link
                key={index}
                href={`${value.link}`}
                target="_blank"
                className="group surface-card overflow-hidden"
              >
                <div className="relative overflow-hidden bg-background">
                  <Image
                    src={value?.image}
                    alt={value?.title}
                    width={570}
                    height={414}
                    className="w-full h-[240px] md:h-[300px] object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-xs tracking-[0.2em] uppercase text-primary mb-2">
                    {value?.client}
                  </p>
                  <h5 className="text-lg xl:text-xl group-hover:text-primary transition-colors">
                    {value?.title}
                  </h5>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
