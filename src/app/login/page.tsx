import React from "react";
import LoginFormSection from "./components/loginFormSection";
import TextureComponent from "./components/textureComponent";

const Page = () => {
  return (
    <main className=" min-h-screen 2xl:my-[120px] md:my-24 my-12 xl:my-24 grid justify-center  items-center gap-2 lg:grid-cols-12 md:grid-cols-8 grid-cols-4">
      <section className="  flex flex-col items-center md:items-start col-span-4 md:col-span-4 xl:col-span-4  ">
        <header className="">
          <h1 className="  lg:mb-20 md:mb-6 mb-8 ">Welcome Back!</h1>
        </header>
        <LoginFormSection />
      </section>
      <section className="hidden 2xl:h-[1070px] lg:h-[636px]  md:h-[328px]   relative md:block lg:col-span-7 lg:col-start-6   md:col-span-4 ">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <video
            src="/loginVideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 right-0">
            <TextureComponent />
          </div>
          <div className="absolute inset-0 flex bg-gray-950/25  items-end  lg:p-8 md:p-4 justify-center">
            <p className="text-white 2xl:text-[40px] lg:text-[28px] md:text-[14px] text-start    drop-shadow-lg">
              Discover Talib-Alillm, an innovative platform offering a variety
              of interactive Islamic courses designed for learners of all
              levels.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
