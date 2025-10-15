import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const connectionString = `mongodb+srv://dev:Password1!@cluster0.ydcp1d6.mongodb.net/newsletter?retryWrites=true&w=majority&appName=Cluster0`;
  let client;
  try {
    client = await MongoClient.connect(connectionString);
  } catch (error) {
    res.status(500).json({ message: "Could not connect to database." });
    return;
  }
  const db = client.db();
  return db;
}

export default async function handler(req, res) {

  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
        res.status(422).json({ message: "Invalid email address." });
        return;
    }

    const db = await connectToDatabase();
    await db.collection("newsletter").insertOne({ email: userEmail });
    await db.close();
    res.status(201).json({ message: "Signed up!" });
  }

  if (req.method === "GET") {
    const db = await connectToDatabase();
    const newsletter = await db.collection("newsletter").find().toArray();
    await db.close();
    res.status(200).json({ newsletter: newsletter });
  }
}
