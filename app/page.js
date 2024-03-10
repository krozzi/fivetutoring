"use client"

import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Five Tutoring</title>
        <meta name="description" content="About us"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>


        <section className="flex flex-col h-screen hero justify-center items-center">
            <div className="">
              <h1 className="text-9xl font-semibold">Hello FiveTutoring!</h1>
            </div>
        </section>
      

      </main>



    </div>
  );
}
