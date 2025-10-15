import { MongoClient } from 'mongodb';

async function connectToDatabase() {
  const connectionString = `mongodb+srv://dev:Password1!@cluster0.ydcp1d6.mongodb.net/comments?retryWrites=true&w=majority&appName=Cluster0`;
  let client;
  try {
    client = await MongoClient.connect(connectionString);
  } catch (error) {
    throw new Error("Could not connect to database.");
  }
  const db = client.db();
  return { client, db };
}


export default async function handler(req, res) {
  const eventId = req.query.eventId;
  
  if (req.method === 'POST') {
    const { email, name, text } = req.body;
    
    if (!email || !email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newComment = {
      id: crypto.randomUUID(),
      email,
      name,
      text,
      eventId: eventId, // Aggiungiamo l'eventId al commento
    };

    try {
      const { client, db } = await connectToDatabase();
      await db.collection('comments').insertOne(newComment);
      await client.close(); // Chiudiamo il client, non il db
      res.status(201).json({ message: 'Comment added!', comment: newComment });
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }
  }

  if (req.method === 'GET') {
    try {
      const { client, db } = await connectToDatabase();
      const comments = await db.collection('comments').find({ eventId: eventId }).toArray();
      await client.close(); // Chiudiamo il client, non il db
      res.status(200).json({ comments: comments });
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }
  }
}