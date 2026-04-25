"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

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

  const chunkArray = (arr: any[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const skillChunks = chunkArray(educationData?.skills || [], 6);

  return (
    <section>
      <div className="border-t border-muted overflow-hidden">
        <div className="container relative z-10">
          <Image
            src={"/images/home/education-skill/edu-skill-vector.svg"}
            alt="vector"
            width={260}
            height={170}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2"
          />
          <div className="relative z-10 py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-primary pb-7 mb-9 xl:mb-16">
              <h2>Education & Skills</h2>
              <p className="text-xl text-primary">( 03 )</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-20">
              <div className="w-full lg:max-w-md flex flex-col gap-0 xl:gap-8">
                {educationData?.education?.map((value: any, index: any) => {
                  return (
                    <div key={index} className="flex items-start gap-6">
                      <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border bg-white flex items-center justify-center border-black">
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                        <h5>{value?.title}</h5>
                        <p className="font-normal">{value?.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Carousel opts={{ align: "start" }} className="w-full">
                <div className="absolute -top-14 right-0 flex gap-2">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
                <CarouselContent>
                  {skillChunks?.map((group: any[], index: number) => (
                    <CarouselItem key={index} className="basis-full">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 xl:gap-7">
                        {group?.map((value: any, i: number) => (
                          <div
                            key={i}
                            className="p-4 xl:p-6 border border-muted rounded-lg flex flex-col gap-5 items-center justify-between"
                          >
                            <div className="flex flex-col items-center gap-5">
                              <Image
                                src={value?.icon}
                                alt="icon"
                                width={60}
                                height={60}
                              />
                              <p className="text-center">{value?.name}</p>
                            </div>

                            <div className="flex gap-1">
                              {[...Array(5)].map((_, j) => (
                                <svg
                                  key={j}
                                  width="9"
                                  height="9"
                                  viewBox="0 0 9 9"
                                >
                                  <rect
                                    width="9"
                                    height="9"
                                    rx="4.5"
                                    fill={
                                      j < value?.rating ? "#FE4300" : "#C0D8E0"
                                    }
                                  />
                                </svg>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
