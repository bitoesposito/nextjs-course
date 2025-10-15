import { buildFeedbackPath, extractFeedback } from "../api/feedback";

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
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
}
