"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Mylink = ({href, children}) => {
  const pathName = usePathname()
  return (
    <Link
     href={href}
     className={`font-semibold ${pathName === href? "btn bg-green-900 text-white border-none" : ""}`}
    >
     {children}  
    </Link>
  );
};

export default Mylink;