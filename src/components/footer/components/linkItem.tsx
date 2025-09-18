import Link from "next/link";
import React, { ReactNode } from "react";
interface props {
  href: string;
  children: ReactNode;
}
const LinkItem: React.FC<props> = ({ href, children }) => {
  return (
    <li>
      <Link href={href}> {children}</Link>
    </li>
  );
};

export default LinkItem;
