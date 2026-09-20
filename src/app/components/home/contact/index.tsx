"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactData(data?.contactLinks);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const reset = () => {
    setFormData({
      name: "",
      number: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    fetch("api/contact", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        number: formData.number,
        email: formData.email,
        message: formData.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmitted(data.success);
        reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const contactCards = [
    {
      type: "email",
      title: "Email",
      icon: "/images/icon/mail-icon.svg",
    },
    {
      type: "phone",
      title: "Phone",
      icon: "/images/icon/call-icon.svg",
    },
  ];

  return (
    <section id="contact" className="no-print scroll-mt-28 bg-background">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 xl:gap-20 items-start">
          <div>
            <p className="text-xs md:text-sm tracking-[0.28em] uppercase text-primary font-medium">
              Let’s collaborate
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl lg:text-[56px] leading-tight">
              Contact Me
            </h2>
            <p className="mt-5 max-w-md text-base md:text-lg">
              Have a product idea, a rebuild, or a realtime system in mind? Tell
              me what you&apos;re building — I usually reply within a day.
            </p>

            <div className="mt-10 space-y-4">
              {contactData?.contactInfo?.map((value: any, index: number) => {
                const meta = contactCards.find((item) => item.type === value.type);
                return (
                  <Link
                    key={index}
                    href={value?.link}
                    className="flex items-center gap-4 rounded-2xl border border-border px-5 py-4 hover:border-primary/50 transition-colors"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Image
                        src={meta?.icon || "/images/icon/mail-icon.svg"}
                        alt={value?.type}
                        width={22}
                        height={22}
                      />
                    </span>
                    <span>
                      <span className="block text-xs tracking-[0.18em] uppercase text-muted-foreground">
                        {meta?.title}
                      </span>
                      <span className="mt-1 block text-base md:text-lg text-foreground">
                        {value?.label}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {contactData?.socialLinks?.map((value: any, index: number) => (
                <Link
                  key={index}
                  href={value?.href}
                  className="rounded-full border border-border px-5 py-2.5 text-sm hover:border-primary hover:text-primary transition-colors"
                  target="_blank"
                >
                  {value?.title}
                </Link>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[1.75rem] border border-border p-6 md:p-8"
          >
            <p className="text-sm tracking-[0.16em] uppercase text-muted-foreground mb-6">
              Send a message
            </p>
            <div className="flex flex-col gap-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="label">
                    Name *
                  </Label>
                  <Input
                    required
                    className="w-full border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="number" className="label">
                    Phone *
                  </Label>
                  <Input
                    required
                    className="w-full border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                    id="number"
                    type="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="label">
                  Email *
                </Label>
                <Input
                  required
                  className="w-full border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="message" className="label">
                  Message *
                </Label>
                <Textarea
                  required
                  className="w-full border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              {submitted && (
                <div className="flex items-center gap-2 rounded-2xl bg-primary/10 px-4 py-3">
                  <Image
                    src={"/images/icon/success-icon.svg"}
                    alt="success-icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-sm">
                    Message sent. I&apos;ll get back to you soon.
                  </p>
                </div>
              )}
              <Button
                variant="outline"
                type="submit"
                className="btn-fill relative overflow-hidden cursor-pointer w-fit h-full py-3 md:py-5 px-6 md:px-8 border border-primary rounded-full group bg-transparent"
              >
                <span className="relative z-10 text-base md:text-lg font-medium text-primary group-hover:text-white transition-colors duration-300">
                  Send Now
                </span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
