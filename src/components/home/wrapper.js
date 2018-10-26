import React from "react"
import {Col, Grid, Row} from "react-bootstrap"

class HomeWrapper extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Grid className={"container"}>
          <Row>
            <Col md={10} mdOffset={1}>
              <div className="home-content">
                <h1 className="white-text">We Are Creative Agency</h1>
                <p className="white-text">Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit
                  amet magna in magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere.
                </p>
                <button className="white-btn">Get Started!</button>
                <button className="main-btn">Learn more</button>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default HomeWrapper
