"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { sendEmail as sendMail } from "../../lib/sendMail.js";
import { useState, useEffect } from "react";
import { toast } from "sonner";

function NewsletterBanner({ title, subtitle }) {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailContent = {
      sender: {
        name: "OutDoor Ginger Team",
        email: "newsletter@outdoorginger.com",
      },
      to: [{ email: email }],
      subject: "Welcome to Campfire Chronicles!",
      htmlContent:
        "<html><head></head><body><p>Welcome</p>Thank you for subcribing to Campfire Chronicles, the OutDoor Ginger Newsletter!</p></body></html>",
    };

    try {
      const data = await sendMail(emailContent);
      if (data) {
        toast.success("Thank you for subscribing to Campfire Chronicles!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setEmail("");
  };

  return (
    <section className="h-fit bg-ogPrimary flex flex-col items-center gap-12 text-center px-4 py-16 md:py-24">
      <div className=" space-y-4">
        <h1 className="font-display font-bold uppercase text-4xl md:text-5xl  text-ogPrimary-lightest m-0">
          {title}
        </h1>
        <h2 className=" font-display text-ogPrimary-lighter text-2xl font-medium m-0">
          {subtitle}
        </h2>
      </div>
      <p className="text-ogPrimary-lightest max-w-lg text-base md:text-lg leading-relaxed">
        Subscribe to get interesting stories, field reports, and other goodies
        straight to your inbox.
      </p>
      <form
        action=""
        className="flex flex-col md:flex-row gap-4 items-center w-full max-w-xs md:max-w-md"
      >
        <Input
          type="email"
          placeholder="Your email address"
          className="bg-ogPrimary placeholder:text-ogPrimary-lightest text-ogPrimary-lightest border-ogPrimary-lighter focus-visible:ring-0 focus-visible:ring-offset-0"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          size="lg"
          className="bg-ogPrimary-dark text-ogBG-base hover:bg-ogPrimary-darker"
          onClick={handleSubmit}
        >
          Subscribe
        </Button>
      </form>
    </section>
  );
}

export default NewsletterBanner;
