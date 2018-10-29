import React from "react";
import { Row } from "react-bootstrap";
import Logo from "../images/logo.svg";
import {
  faGithub,
  faMedium,
  faTwitter,
} from "@fortawesome/fontawesome-free-brands";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" className="sm-padding bg-dark">
        <div className="container">
          <Row>
            <div className="col-md-12">
              <div className="footer-logo">
                <a href="#">
                  <img src={Logo} alt="logo" />
                </a>
              </div>

              <ul className="footer-follow">
                <li>
                  <a
                    href="https://github.com/leboncoin"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://medium.com/leboncoin-engineering-blog"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faMedium} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/leboncoinEng"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.leboncoin.fr/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGlobeAmericas} />
                  </a>
                </li>
              </ul>

              <div className="footer-copyright">
                <p>Copyright 2018. All Rights Reserved.</p>
              </div>
            </div>
          </Row>
        </div>
      </footer>
    );
  }
}

export default Footer;
