import Content from "@/components/content";
import SlicingTest from "@/components/header";
import Sidebar from "@/components/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <SlicingTest />
      <Sidebar />
      <Content />
    </main>
  );
}
