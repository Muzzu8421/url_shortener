import clientPromise from "../../../../lib/mongodb";

export async function POST(request) {
  try {
    const data = await request.json();
    const client = await clientPromise;
    const db = client.db("url_shortener");
    const collection = db.collection("urls");

    if (data.shortUrl) {
      const existingUrl = await collection.findOne({ shortUrl: data.shortUrl });
      if (existingUrl) {
        return Response.json(
          { message: "Custom URL already exists" },
          { status: 409 },
        );
      } else {
        // Use the provided custom short URL
        await collection.insertOne({
          url: data.url,
          shortUrl: data.shortUrl,
          date: new Date(),
        });
      }
    } else {
      // Function to generate random short URL
      const generateShortUrl = () => {
        const characters =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let result = "";
        for (let i = 0; i < 6; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * characters.length),
          );
        }
        return result;
      };
      const shortUrl = generateShortUrl();
      data.shortUrl = shortUrl;

      // Check if the URL already exists in the database
      const existingUrl = await collection.findOne({ shortUrl: data.shortUrl });
      if (existingUrl) {
        const newShortUrl = generateShortUrl();
        data.shortUrl = newShortUrl;
      }

      await collection.insertOne({
        url: data.url,
        shortUrl: data.shortUrl,
        date: new Date(),
      });
    }

    return Response.json(
      {
        success: true,
        error: false,
        shortUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/${data.shortUrl}`,
        message: "URL generated successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: true,
        shortUrl: null,
        message: "An error occurred while generating the URL: " + error.message,
      },
      { status: 500 },
    );
  }
}
