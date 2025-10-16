import { MongoClient } from "mongodb";

async function handler(req, res) {
  // Gestisce solo richieste POST
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    // Validazione input - controlla che tutti i campi siano presenti e validi
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // Crea oggetto messaggio con i dati validati
    const newMessage = {
      email,
      name,
      message,
    };

    // Stringa di connessione MongoDB (in produzione usare variabili d'ambiente)
    const connectionString = `mongodb+srv://dev:Password1!@cluster0.ydcp1d6.mongodb.net/my-site?retryWrites=true&w=majority&appName=Cluster0`;
    let client;

    try {
      // Connessione al database MongoDB
      client = await MongoClient.connect(connectionString);
      const db = client.db('my-site');

      // Inserimento del messaggio nella collezione 'messages'
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;

      // Risposta di successo con i dati del messaggio inserito
      res.status(201).json({ message: "Success", data: newMessage });
    } catch (error) {
      // Gestione errori - risposta di errore e chiusura connessione
      console.error('Database error:', error);
      res.status(500).json({ message: "Database operation failed." });
    } finally {
      // Chiusura sicura della connessione al database
      if (client) {
        await client.close();
      }
    }
  } else {
    // Metodo HTTP non supportato
    res.status(405).json({ message: "Method not allowed" });
  }
}

export default handler;
