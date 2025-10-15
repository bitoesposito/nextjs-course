// Importa le funzioni per gestire i dati dummy
import { getAllFeedback, addFeedback } from "../../../dummy-data";

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.feedback;

    // Aggiunge nuovo feedback usando i dati dummy
    const newFeedback = addFeedback(email, feedbackText);

    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {
    // Restituisce tutti i feedback dai dati dummy
    const data = getAllFeedback();
    res.status(200).json({ feedback: data });
  }
}

export default handler;
