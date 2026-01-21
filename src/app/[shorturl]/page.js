import { redirect } from "next/navigation"
import clientPromise from "../../../lib/mongodb"

export default async function Page({ params }) {
  const { shorturl } = await params
  const client = await clientPromise
  const db = client.db("url_shortener")
  const urldata = await db
    .collection("urls")
    .findOne({ shortUrl: shorturl })

    if (urldata) {
        redirect(urldata.url);
    }else{
        redirect(`${process.env.NEXT_PUBLIC_SITE_URL}`);
    }
}