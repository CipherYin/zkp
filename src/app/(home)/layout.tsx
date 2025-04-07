"use client"
import { HomeFooter } from "@/modules/home/home-footer";
import { HomeLayout } from "@/modules/home/home-layout";

interface LayoutProps {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
   <div>
    <HomeLayout/>
    <div className="py-10">
        {children}
    </div>
    <HomeFooter/>
   </div>
  );
};

export default Layout;
