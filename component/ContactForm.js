import React, { useEffect, useState } from "react";
import styles from "../styles/Contacts.module.css";

const ContactForm = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    () => {
      setDisabled();
    };
    return () => {
      setDisabled(true);
    };
  }, [text, email, message]);

  const nameInput = (values) => {
    if (values.target.value.length > 25) {
      setText("Name is too long");
    }
    if (values.target.value.length === 0) {
      setText("Enter your name");
    } else {
      setText("");
    }
  };

  const emailInput = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email.target.value)) {
      setEmail("Invalid email adress");
      setDisabled(true);
      return re.test(email);
    } else {
      setEmail("");
    }
  };

  const messageInput = (message) => {
    if (message.target.value.length > 200) {
      setMessage("Message is too long");
    }
    if (message.target.value.length === 0 || message.target.value.length <= 3) {
      setMessage("Message has to be at least 5 letters");
    } else {
      setDisabled(false);
      setMessage("");
    }
  };

  return (
    <div className={styles.emailCell}>
      <div className={styles.emailForm}>
        <h1 className={styles.messageSvg}>Message me</h1>
        <form name='contact' method='POST' data-netlify='true'>
          <input type='hidden' name='form-name' value='contact' />
          <div>
            <p>{text}</p>
            <input
              onChange={nameInput}
              type='text'
              name='name'
              className={styles.name}
              placeholder='Your name*'
            />
          </div>
          <div>
            <p>{email}</p>
            <input
              onChange={emailInput}
              name='email'
              type='text'
              className={styles.name}
              placeholder='Your email*'
            />
          </div>
          <div>
            <p>{message}</p>
            <textarea
              onChange={messageInput}
              name='message'
              rows='4'
              className={styles.subject}
              placeholder='Write me a message*'
            ></textarea>
          </div>
          <div className={styles.button}>
            <button
              type='submit'
              disabled={disabled}
              style={
                disabled
                  ? {
                      background: "grey",
                      color: "#fefefe",
                      cursor: "not-allowed",
                    }
                  : null
              }
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
