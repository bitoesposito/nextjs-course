// Importa la funzione per ottenere tutti i feedback dai dati dummy
import { getAllFeedback } from "../../dummy-data";

export default function FeedbackPage(props) {
  function loadFeedbackHandler(id) {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.feedback);
      });
  }

  return (
    <ul>
      {props.feedbackItems.map((message) => (
        <li key={message.id}>
          {message.text}
          <br /> <small>{message.email}</small>
          <br />
          <button onClick={() => loadFeedbackHandler(message.id)}>
            Load Feedback
          </button>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  // Ottiene i feedback dai dati dummy invece che dal file system
  const data = getAllFeedback();

  return {
    props: {
      feedbackItems: data,
    },
  };
}
