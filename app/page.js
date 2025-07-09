"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }

  const [text, setText] = useState("")

  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2 ">
        <div className=" flex justify-center flex-col ml-[10vw] gap-3 my-40">
          <p className="text-[#d2e823] font-bold text-7xl">Everything you</p>
          <p className="text-[#d2e823] font-bold text-7xl">are. In one,</p>
          <p className="text-[#d2e823] font-bold text-7xl">simple link in bio.</p>
          <p className="text-[#d2e823] text-xl my-4">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>

          <div className="input flex gap-2">
            <input value={text} onChange={(e) => setText(e.target.value)} className="bg-white rounded-md px-2 py-2 focus:outline-green-900" type="text" placeholder="Enter Your Handle" />
            <button onClick={() => createTree()} className="bg-pink-300 rounded-full px-4 py-4 font-semibold">Claim your Linktree</button>
          </div>
        </div>

        <div className=" flex items-center justify-center flex-col mr-[10vw]">
          <img src="home.png" alt="home image" />
        </div>
      </section>

      <section className="bg-[#e9c0e9] min-h-[100vh] grid grid-cols-2">
        <div className="secondOne flex items-center justify-center flex-col ml-[10vw]">
          <img src="second.png" alt="second img" />
          </div>

            <div className="flex justify-center flex-col mr-[10vw] gap-3 my-40">
              <h2 className="text-[#502274] font-bold text-5xl">Create and customize your Linktree in minutes</h2>
              <p className="m-5 ml-0">Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>
              <button className="bg-[#502274] w-60 hover:bg-[#50229A] rounded-full px-4 py-4 text-white">Get started for me</button>
            </div>
        
      </section>

      <section className="bg-[#780016] min-h-[100vh] grid grid-cols-2">
      <div className="third flex justify-center flex-col ml-[10vw] gap-3 my-40">
          <p className="text-[#e9c0e9] font-bold text-5xl">Share your Linktree from </p>
          <p className="text-[#e9c0e9] font-bold text-5xl"> your Instagram, TikTok,</p>
          <p className="text-[#e9c0e9] font-bold text-5xl">Twitter and other bios</p>
          <p className="text-[#fff] my-4">Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.</p>

          <button className="bg-[#e9c0e9] w-60 hover:bg-[#de9fde] rounded-full px-4 py-4 text-black font-[600]">Get started for me</button>
        </div>

        <div className=" flex items-center justify-center flex-col mr-[10vw]">
          <img src="third.png" alt="home image" />
        </div>

      </section>
      <section className="bg-[#e8efd6] min-h-[100vh] grid grid-cols-2">
                  <div className="forth flex items-center justify-center flex-col ml-[10vw]">
          <img src="forth.png" alt="second img" />
          </div>

            <div className="flex justify-center flex-col mr-[10vw] gap-3 my-40">
              <h2 className="text-[#1e2330] font-bold text-5xl">Analyze your audience and keep your followers engaged</h2>
              <p className="m-5 ml-0">Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p>

              <button className="bg-[#e9c0e9] w-60 hover:bg-[#de9fde] rounded-full px-4 py-4 text-black font-[600]">Get started for me</button>
            </div>
      </section>
    </main>
  );
}
