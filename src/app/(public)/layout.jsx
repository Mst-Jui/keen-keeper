import React from 'react';
import Footer from "@/components/homepage/footer/Footer";
import Navbar from "@/components/homepage/navbar/Navbar";
import Providers from '@/app/lib/providers';

const PublicLayout = ({children}) => {
  return (<>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;

