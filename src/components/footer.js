import React from "react";
import {Row} from "react-bootstrap";
import Logo from "../images/logo.svg"
import {faGithub, faMedium, faTwitter, faLinkedinIn} from "@fortawesome/fontawesome-free-brands"
import {faGlobeAmericas} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" className="sm-padding bg-dark">

        <div className="container">

          <Row>

            <div className="col-md-12">

              <div className="footer-logo">
                <a href="#"><img src={Logo} alt="logo"/></a>
              </div>

              <ul className="footer-follow">
                <li><a href="https://github.com/leboncoin" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a></li>
                <li><a href="https://twitter.com/leboncoinEng" target="_blank">
                  <FontAwesomeIcon icon={faMedium} />
                </a></li>
                <li><a href="https://twitter.com/leboncoinEng" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </a></li>
                <li><a href="https://www.leboncoin.fr/" target="_blank">
                  <FontAwesomeIcon icon={faGlobeAmericas} />
                </a></li>
              </ul>

              <div className="footer-copyright">
                <p>Copyright © 2017. All Rights Reserved. Designed by <a href="https://colorlib.com"
                                                                         target="_blank">Colorlib</a></p>
              </div>

            </div>

          </Row>

        </div>

      </footer>
    )
  }
}

export default Footer;