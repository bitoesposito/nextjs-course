// Dati dummy per i feedback - sostituisce il file system
const DUMMY_FEEDBACK = [
  {
    id: "1",
    email: "user1@example.com",
    text: "Ottima applicazione! Molto utile per raccogliere feedback."
  },
  {
    id: "2", 
    email: "user2@example.com",
    text: "Interfaccia pulita e funzionale. Consigliato!"
  },
  {
    id: "3",
    email: "user3@example.com", 
    text: "Sistema di feedback molto intuitivo e facile da usare."
  }
];

// Funzione per ottenere tutti i feedback
export function getAllFeedback() {
  return DUMMY_FEEDBACK;
}

// Funzione per ottenere un feedback specifico per ID
export function getFeedbackById(id) {
  return DUMMY_FEEDBACK.find(feedback => feedback.id === id);
}

// Funzione per aggiungere un nuovo feedback
export function addFeedback(email, text) {
  const newFeedback = {
    id: new Date().toISOString(), // Usa timestamp come ID univoco
    email: email,
    text: text
  };
  
  DUMMY_FEEDBACK.push(newFeedback);
  return newFeedback;
}
