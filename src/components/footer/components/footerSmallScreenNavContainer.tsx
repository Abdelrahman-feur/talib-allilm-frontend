import React from "react";
import FooterSmallScreenNav from "./footerSmallScreenNav";
import LinkItem from "./linkItem";

const FooterSmallScreenNavContainer = () => {
  return (
    <FooterSmallScreenNav title="pages">
      <ul className="  text-heading-color flex-col gap-6 items-center">
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
    </FooterSmallScreenNav>
  );
};

export default FooterSmallScreenNavContainer;
