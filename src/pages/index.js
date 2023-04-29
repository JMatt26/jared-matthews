import Head from "next/head";
// import Image from 'next/image'
import styles from "@/styles/Home.module.css";
import TopNavBar from "../components/TopNavBar";
import Portrait from "../components/Portrait";
import QuickIntro from "../components/QuickIntro";
import Journey from "../components/Journey";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Title</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <TopNavBar />
        <Portrait />
        <QuickIntro />
        <Journey />
      </main>
    </div>
  );
}
