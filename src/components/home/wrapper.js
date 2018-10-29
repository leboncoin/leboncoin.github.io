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
                <h1 className="white-text">LEBONCOIN ENGINEERING & DATA SCIENCE</h1>
                <p className="white-text">Creative engineers and data scientists building a French virtual Flea Market for everyone.</p>
                <a className="btn main-btn" href="#blog">Learn more</a>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default HomeWrapper
