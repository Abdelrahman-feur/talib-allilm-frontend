import React from "react";
export const dynamic = "force-static";
interface props {
  children: React.ReactNode;
}
const Layout: React.FC<props> = ({ children }) => {
  return (
    <main className="min-h-screen  grid justify-center  grid-cols-12 gap-2.5 items-center">
      <section className=" 2xl:mt-60 xl:my-24 md:my-[72px] my-12 flex flex-col items-center 2xl:py-60 xl:py-[125px] md:py-[88px] py-5 col-start-1 lg:col-start-2 col-end-13 lg:col-end-12 rounded-[30px] shadow">
        {children}
      </section>
    </main>
  );
};

export default Layout;
