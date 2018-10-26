import React from "react"
import { Nav, NavItem } from "react-bootstrap"

class HomeWrapper extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="container">
          <div className="row">

            <div className="col-md-10 col-md-offset-1">
              <div className="home-content">
                <h1 className="white-text">We Are Creative Agency</h1>
                <p className="white-text">Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit
                  amet magna in magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere.
                </p>
                <button className="white-btn">Get Started!</button>
                <button className="main-btn">Learn more</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default HomeWrapper
