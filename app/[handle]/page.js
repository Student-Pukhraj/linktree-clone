import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";



export default async function Page({ params }) {
    const { handle } = await params
    const client = await clientPromise;
    const db = client.db("Linktree")
    const collection = db.collection("links")

const item = await collection.findOne({handle:handle})
if(!item){
    return notFound()
}

    const item2 = {
        "_id": {
            "$oid": "67d00e309f6e49b065922592"
        },
        "links": [
            {
                "link": "https://www.facebook.com/",
                "linktext": "facebook"
            },
            {
                "link": "https://www.instagram.com/__chintu_chronicles__/",
                "linktext": "instagram"
            },
            {
                "link": "https://www.youtube.com/",
                "linktext": "youtube"
            }
        ],
        "handle": "pukhraj",
        "picture": "https://avatars.githubusercontent.com/u/163715385?s=400&u=e041527826140f9ee890fbfe9159a7c90929884f&v=4"
    }
    return <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
        {item && <div className="photo flex flex-col items-center justify-center gap-4">
            <img className="rounded-full w-32" src={item.picture} alt="" />
            <span className="font-bold text-xl">@{item.handle}</span>
            <span className="desc w-80 text-center">{item.desc}</span>
            <div className="links">
                {item.links.map((item, index) => {
                    return <Link key={index} href={item.link}> <div className="bg-purple-100 py-4 shadow-lg px-2 min-w-96 justify-center flex rounded-md my-3">
                        {item.linktext}
                    </div></Link>
                })}
            </div>
        </div>}
    </div>
}