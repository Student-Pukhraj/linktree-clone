"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";
// import Image from "next/image";

const Generate = () => {
  const searchParams = useSearchParams();
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState(() => searchParams.get("handle") || "");
  const [picture, setpicture] = useState("");
  const [desc, setdesc] = useState("");

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) =>
      initialLinks.map((item, i) => {
        if (i === index) {
          return { link, linktext };
        } else {
          return item;
        }
      })
    );
  };

  const addLink = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]));
  };

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      links,
      handle,
      picture,
      desc,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const r = await fetch("/api/add", requestOptions); // ✅ relative path, works on Vercel
      const result = await r.json();

      if (result.success) {
        toast.success(result.message);
        setLinks([{ link: "", linktext: "" }]);
        sethandle("");
        setpicture("");
        setdesc("");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="bg-[#1E5ABF] min-h-screen grid grid-cols-2">
      {/* Left column */}
      <div className="col1 flex justify-center items-center flex-col">
        <div className="flex flex-col gap-5 my-32">
          <h1 className="font-bold text-3xl my-0">Create your Linktree</h1>

          {/* Step 1 */}
          <div className="item">
            <h2 className="font-semibold text-2xl">Step 1: Claim your Handle</h2>
            <div className="mx-4">
              <input
                value={handle}
                onChange={(e) => sethandle(e.target.value)}
                className="bg-white px-4 py-4 mx-2 my-2 rounded-full focus:outline-blue-500"
                type="text"
                placeholder="Choose your Handle"
              />
            </div>
          </div>

          {/* Step 2 - Add Links */}
          <div className="item">
            <h2 className="font-semibold text-2xl">Step 2: Add Links</h2>
            {links.map((item, index) => (
              <div key={index} className="mx-4 my-1">
                <input
                  value={item.linktext || ""}
                  onChange={(e) =>
                    handleChange(index, item.link, e.target.value)
                  }
                  className="bg-white px-4 py-4 mx-2 my-2 rounded-full focus:outline-blue-500"
                  type="text"
                  placeholder="Enter link text"
                />
                <input
                  value={item.link || ""}
                  onChange={(e) =>
                    handleChange(index, e.target.value, item.linktext)
                  }
                  className="bg-white px-4 py-4 mx-2 my-2 rounded-full focus:outline-blue-500"
                  type="text"
                  placeholder="Enter link"
                />
              </div>
            ))}
            <button
              onClick={addLink}
              className="p-5 py-2 mx-2 bg-slate-900 text-white font-bold rounded-3xl"
            >
              + Add Links
            </button>
          </div>

          {/* Step 3 - Picture & Description */}
          <div className="item">
            <h2 className="font-semibold text-2xl">
              Step 3: Add Picture and Description
            </h2>
            <div className="mx-4 flex flex-col">
              <input
                value={picture}
                onChange={(e) => setpicture(e.target.value)}
                className="bg-white px-4 py-4 rounded-full mx-2 my-2 focus:outline-blue-500"
                type="text"
                placeholder="Enter link to your Picture"
              />
              <input
                value={desc}
                onChange={(e) => setdesc(e.target.value)}
                className="bg-white px-4 py-4 rounded-full mx-2 my-2 focus:outline-blue-500"
                type="text"
                placeholder="Enter description"
              />
              <button
                disabled={
                  picture === "" || handle === "" || links[0].linktext === ""
                }
                onClick={submitLinks}
                className="disabled:bg-slate-500 p-5 py-2 w-fit mx-2 my-2 bg-slate-900 text-white font-bold rounded-3xl"
              >
                Create your Linktree
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="col2 w-full h-screen bg-[#1E5ABF]">
        <image
          className="h-full object-contain"
          src="/generate.png"
          alt="generate your links"
          width={600}
          height={600}
        />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Generate;

