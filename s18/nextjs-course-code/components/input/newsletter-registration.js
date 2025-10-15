import classes from "./newsletter-registration.module.css";
import { useRef, useContext } from "react";
import { NotificationContext } from "../../store/notification-context";

function NewsletterRegistration() {
  const emailInputRef = useRef(null);
  const notificationCtx = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();

    // fetch user input (state or refs)
    const enteredEmail = emailInputRef.current.value;
    notificationCtx.showNotification({
      title: "Signing up...",
      message: "Registering for newsletter.",
      status: "pending",
    });
    // optional: validate input
    if (!enteredEmail || !enteredEmail.includes("@")) {
      return;
    }
    
    // send valid data to API
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      notificationCtx.showNotification({
        title: "Success!",
        message: "Registered for newsletter.",
        status: "success",
      });
    }).catch(() => {
      notificationCtx.showNotification({
        title: "Error!",
        message: "Failed to register for newsletter.",
        status: "error",
      });
    });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
