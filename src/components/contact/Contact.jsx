import React,{ useState } from "react";
import "./contact.scss";
import { Container } from "react-bootstrap";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <Container >
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/pic12.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button className="submit button" type="submit">Send</button>
          {message && <span>Thanks,You will get a reply soon</span>}
        </form>
      </div>
    </div>
    </Container>
  );
}