import { useState, useContext } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import { NotificationContext } from "../../store/notification-context";

// Funzione per recuperare i commenti tramite API route
async function getComments(eventId) {
  const response = await fetch(`/api/comments/${eventId}`);
  const data = await response.json();
  return data.comments;
}

function Comments(props) {
  const { eventId } = props;
  const notificationCtx = useContext(NotificationContext);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => {
      const newStatus = !prevStatus;
      // Carica i commenti quando si mostrano
      if (newStatus) {
        getComments(eventId).then((data) => {
          setComments(data);
        });
      }
      return newStatus;
    });
  }

  function addCommentHandler(commentData) {
    // Mostra notifica di caricamento
    notificationCtx.showNotification({
      title: "Invio in corso...",
      message: "Sto aggiungendo il tuo commento.",
      status: "pending",
    });

    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Mostra notifica di successo
        notificationCtx.showNotification({
          title: "Successo!",
          message: "Commento aggiunto con successo.",
          status: "success",
        });
        // Ricarica tutti i commenti per assicurarsi di avere i dati più aggiornati
        getComments(eventId).then((comments) => {
          setComments(comments);
        });
      })
      .catch((error) => {
        console.error(error);
        // Mostra notifica di errore
        notificationCtx.showNotification({
          title: "Errore!",
          message: "Impossibile aggiungere il commento. Riprova più tardi.",
          status: "error",
        });
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
