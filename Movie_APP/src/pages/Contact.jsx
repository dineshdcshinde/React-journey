import { Form } from "react-router-dom";
import "./Contact.css";

export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error.message);
  }
};

export const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-image"></div>
        <div className="contact-form">
          <h2 className="uppercase text-4xl">Contact Us</h2>
          <Form action="/contact" method="POST">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </Form>
        </div>
      </div>
    </>
  );
};
