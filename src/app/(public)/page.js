
import Banner from "@/components/homepage/banner/Banner";
import Image from "next/image";
import FriendsPage from "./friends/page";


export default function Home() {
  return (
    <div className="bg-gray-50">
    
      <Banner />
      <FriendsPage/>

    </div>
  );
}
