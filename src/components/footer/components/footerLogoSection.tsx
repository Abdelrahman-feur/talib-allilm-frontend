import React from "react";
import SocialIconContainer from "./socialIconContainer";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { ImLinkedin } from "react-icons/im";
import Image from "next/image";

const FooterLogoSection: React.FC = () => {
  return (
    <div className="col-span-6 md:col-span-3">
      <Image
        src={"logo.svg"}
        alt="website-logo"
        width={"227"}
        height={"129"}
        className="2xl:w-[227px] 2xl:h-[129px] xl:w-[117px] xl:h-[66px] w-[89px] h-[51px]"
      />
      <h3 className="text-text-color 2xl:text-[32px] text-sm">
        Your gateway to learning
      </h3>
      <div className="flex  items-center mt-7 gap-3">
        <SocialIconContainer>
          <FaXTwitter className="xl:text-2xl md:text-[18px]" />
        </SocialIconContainer>
        <SocialIconContainer>
          <FaFacebookSquare className="xl:text-2xl md:text-[18px]" />
        </SocialIconContainer>
        <SocialIconContainer>
          <RiInstagramFill className="xl:text-2xl md:text-[18px]" />
        </SocialIconContainer>
        <SocialIconContainer>
          <ImLinkedin className="xl:text-2xl md:text-[18px]" />
        </SocialIconContainer>
      </div>
    </div>
  );
};

export default FooterLogoSection;
