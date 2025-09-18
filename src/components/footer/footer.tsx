import React from "react";
import NewsletterSection from "./components/newsletterSection";
import Image from "next/image";
import LinkItem from "./components/linkItem";
import FooterLogoSection from "./components/footerLogoSection";
import FooterSmallScreenNavContainer from "./components/footerSmallScreenNavContainer";

const Footer = () => {
  return (
    <footer className="bg-lightGray">
      <main className=" container 2xl:pt-[126px]  xl:pt-[139px] md:pt-[56px] pt-[48px]     2xl:h-[1078px] xl:h-[668px] md:h-[678px] min-h-[527px]">
        <h2 className="text-center 2xl:mb-[48px] xl:mb-[57px] md:mb-[32px] mb-3 2xl:text-[80px] xl:text-[56px] md:text-[24px] text-[18px] font-semibold ">
          Join our newsletter
        </h2>
        <NewsletterSection />
        <FooterSmallScreenNavContainer />
        <section className="grid grid-cols-12 mt-[70px]">
          <FooterLogoSection />
          <ul className=" hidden text-heading-color col-span-3 md:flex flex-col gap-6 items-center">
            <LinkItem href="/" key="footer-key-home">
              Home
            </LinkItem>
            <LinkItem href="/courses" key="footer-key-courses">
              {" "}
              Courses
            </LinkItem>
            <LinkItem href="/teachers" key="footer-key-teachers">
              Teachers
            </LinkItem>
            <LinkItem href="/aboutUs" key="footer-key-aboutUs">
              About us
            </LinkItem>
          </ul>
          <ul className=" hidden text-heading-color col-span-3 md:flex flex-col gap-6 items-center">
            <LinkItem href="/" key="footer-key-blogs">
              Blogs
            </LinkItem>
            <LinkItem href="/" key="footer-key-contactUs">
              Contact us
            </LinkItem>
            <LinkItem href="/" key="footer-key-privacyPolicy">
              Privacy policy
            </LinkItem>
            <LinkItem href="/" key="footer-key-termsOfUse">
              Terms of use
            </LinkItem>
          </ul>
          <div className=" col-span-6 md:col-span-3 flex flex-col gap-6 items-center">
            <h4 className="hidden md:block">Download our app</h4>
            <Image
              src={"/appleStore.png"}
              alt="apple-store"
              width={"181"}
              height={"59"}
            />
            <Image
              src={"/googleStore.png"}
              alt="google-store"
              width={"181"}
              height={"59"}
            />
          </div>
        </section>
      </main>
    </footer>
  );
};

export default Footer;
