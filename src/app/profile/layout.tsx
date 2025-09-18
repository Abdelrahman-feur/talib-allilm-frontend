import React from "react";
import ProfileImage from "./components/profileImage";

const Layout = () => {
  return (
    <>
      <header className="shadow min-w-full p-10 rounded-[30px] min-h-[500px] my-28">
        <div className="flex justify-between">
          <section>
            <ProfileImage imageSrc="/ProfilePicture.png" />
          </section>
        </div>
      </header>
    </>
  );
};

export default Layout;
