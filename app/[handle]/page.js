import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function Page({ params }) {
  const { handle } = params;

  const client = await clientPromise;
  const db = client.db("Linktree");
  const collection = db.collection("links");

  const item = await collection.findOne({ handle });

  if (!item) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
      <div className="photo flex flex-col items-center justify-center gap-4">
        <Image
          className="rounded-full w-32"
          src={item.picture}
          alt={item.handle}
          width={128}
          height={128}
        />
        <span className="font-bold text-xl">@{item.handle}</span>
        <span className="desc w-80 text-center">
          {item.desc || "No description available"}
        </span>

        <div className="links">
          {item.links.map((linkObj, index) => (
            <Link key={index} href={linkObj.link} target="_blank">
              <div className="bg-purple-100 py-4 shadow-lg px-2 min-w-96 justify-center flex rounded-md my-3">
                {linkObj.linktext}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
