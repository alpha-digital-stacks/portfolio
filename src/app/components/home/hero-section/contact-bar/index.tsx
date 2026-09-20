"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ContactBar = () => {
  const [contactBarData, setContactBarData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactBarData(data?.contactBar);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="relative z-10 -mt-4">
      <div className="container">
        <div className="surface-card flex flex-col lg:flex-row items-center justify-between gap-5 px-5 py-5 md:px-8">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            {contactBarData?.contactItems?.map(
              (value: any, index: number) => (
                <Link
                  key={index}
                  href={value?.link}
                  className="flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2.5 text-sm md:text-base hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <Image
                    src={value?.icon}
                    alt={value?.type}
                    width={20}
                    height={20}
                    className="min-w-5 min-h-5"
                  />
                  <span>{value?.label}</span>
                </Link>
              )
            )}
          </div>
          <div className="flex items-center gap-3">
            {contactBarData?.socialItems?.map((value: any, index: number) => (
              <Link
                key={index}
                href={value?.link}
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background hover:border-primary hover:bg-primary/8 transition-colors"
              >
                <Image
                  src={value?.icon}
                  alt={value?.platform}
                  width={22}
                  height={22}
                  className="dark:invert"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
