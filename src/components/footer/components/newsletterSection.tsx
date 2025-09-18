"use client";
import Button from "@/components/buttons/Button";
import React from "react";

const NewsletterSection: React.FC = () => {
  return (
    <form className="flex items-baseline justify-center gap-2 text-center ">
      <input
        type="email"
        className="bg-transparent border-[1px] active:outline-primary border-gray h-[clamp(44px,4.7vh,72px)] px-3  w-[clamp(237px,26.25vw,672px)] rounded-[80px] "
        placeholder="Email address"
        required
      />
      <Button size="md" variant="secondary" type="submit" onClick={() => {}}>
        submit
      </Button>
    </form>
  );
};

export default NewsletterSection;
