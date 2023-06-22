// import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleMessageChange = (e) => {
  //   setMessage(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Perform any necessary logic with the email and message data
  //   // e.g., send a form submission to a backend server
  //   console.log("Email:", email);
  //   console.log("Message:", message);
  //   // Reset the form
  //   setEmail("");
  //   setMessage("");
  // };

  return (
    <footer className="footer">
      <div className="">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <div className="social-icons">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="mr-2" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="mr-2" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="mr-2" />
          </a>
        </div>
        {/* <form onSubmit={handleSubmit}>
          <div className="form-group row justify-content-center">
            <div className="col-sm-4">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <div className="col-sm-6">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Message"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <div className="col-sm-4">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form> */}
      </div>
    </footer>
  );
};

export default Footer;
