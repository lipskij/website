import React, { useState } from "react";
import styles from "../styles/Contacts.module.css";

const ContactForm = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameInput = (values) => {
    if (values.target.value.length > 25) {
      setText("Name is too long");
    }
    if (values.target.value.length < 3) {
      setText("Name has to be longer than 3 letters");
    } else {
      setText("");
    }
  };

  const emailInput = (email) => {
    console.log(email.target.value);
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email.target.value)) {
      setEmail("Invalid email adress");
      return re.test(email);
    } else {
      setEmail("");
    }
  };

  const messageInput = (message) => {
    if (message.target.value.length > 200) {
      setMessage("Message is too long");
    }
    if (message.target.value.length < 4) {
      setMessage("Message has to be longer than 3 letters");
    } else {
      setMessage("");
    }
  };
  return (
    <div className={styles.emailCell}>
      <h2>CONTACT</h2>
      <div className={styles.emailForm}>
        <form name='contact' method='POST' data-netlify='true'>
          <input type='hidden' name='form-name' value='contact' />
          <div>
            <p>{text}</p>
            <input
              onChange={nameInput}
              type='text'
              name='name'
              className={styles.name}
              placeholder='Your name'
            />
          </div>
          <div>
            <p>{email}</p>
            <input
              onChange={emailInput}
              name='email'
              type='text'
              className={styles.name}
              placeholder='Your email'
            />
          </div>
          <div>
            <p>{message}</p>
            <textarea
              onChange={messageInput}
              name='message'
              rows='4'
              className={styles.subject}
              placeholder='Write me a message'
            ></textarea>
          </div>
          <div>
            <button type='submit' className={styles.button}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
