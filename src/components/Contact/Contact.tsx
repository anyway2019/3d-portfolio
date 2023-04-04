import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from './Contact.module.scss'
import Map from "../Map";

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    emailjs.sendForm(
        "service_id",
        "template_id",
        ref.current,
        "public_key"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <div className={styles.Section}>
      <div className={styles.Container}>
        <div className={styles.Left}>
          <form className={styles.Form} ref={ref} onSubmit={handleSubmit}>
            <h1 className={styles.Title}>Contact Us</h1>
            <input className={styles.Input} placeholder="Name" name="name" />
            <input className={styles.Input} placeholder="Email" name="email" />
            <textarea className={styles.TextArea}
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <button className={styles.Button} type="submit">Send</button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </form>
        </div>
        <div className={styles.Right}>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
