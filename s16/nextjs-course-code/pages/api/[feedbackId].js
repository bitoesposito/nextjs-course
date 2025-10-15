// Importa la funzione per ottenere feedback per ID dai dati dummy
import { getFeedbackById } from "../../../dummy-data";

export default function handler(req, res) {
    const feedbackId = req.query.feedbackId;
    // Cerca il feedback specifico nei dati dummy
    const feedback = getFeedbackById(feedbackId);
    res.status(200).json({ feedback });
}