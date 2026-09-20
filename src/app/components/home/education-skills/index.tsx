"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import SectionHeading from "../../shared/section-heading";

const EducationSkills = () => {
  const [educationData, setEductionData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEductionData(data?.educationData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="skills" className="scroll-mt-28 bg-background">
      <div className="relative overflow-hidden">
        <div className="container relative z-10 py-16 md:py-28">
          <Image
            src={"/images/home/education-skill/edu-skill-vector.svg"}
            alt="vector"
            width={220}
            height={140}
            className="no-print absolute top-8 left-6 opacity-40 w-auto h-auto"
          />
          <SectionHeading
            title="Education & Skills"
            index="02"
            eyebrow="Craft"
          />
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 xl:gap-16">
            <div className="relative space-y-6">
              <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border hidden sm:block" />
              {educationData?.education?.map((value: any, index: number) => (
                <div key={index} className="relative flex gap-4 sm:pl-0">
                  <div className="no-print mt-2 h-4 w-4 shrink-0 rounded-full border-2 border-primary bg-background" />
                  <div className="rounded-2xl border border-border bg-card p-5">
                    <h5 className="text-lg xl:text-xl">{value?.title}</h5>
                    <p className="mt-2 text-sm md:text-base">
                      {value?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
              {educationData?.skills?.map((value: any, i: number) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-border bg-card p-4 md:p-5 flex flex-col items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
                      <Image
                        src={value?.icon}
                        alt={value?.name}
                        width={36}
                        height={36}
                        className="h-9 w-9 object-contain"
                      />
                    </div>
                    <p className="text-center text-sm md:text-base text-foreground">
                      {value?.name}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <span
                        key={j}
                        className={`h-1.5 w-1.5 rounded-full ${
                          j < value?.rating ? "bg-primary" : "bg-border"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
