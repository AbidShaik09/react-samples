import Image from "next/image";
import Footer from "./footer/footer";
import Header from "./Header";
import AddSlot from "./AddSlot";

export default function Home() {
  return (
    <>
       <Header/>
       <AddSlot/>
       <Footer/>
    </>
  );
}
