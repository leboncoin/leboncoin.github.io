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
                <h1 className="white-text">leboncoin engineering<br/>& data science</h1>
                <p className="white-subtext">Creative engineers and data scientists building a French virtual Flea Market for everyone.</p>
                <a className="orange-btn" href="#blog">Learn more</a>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default HomeWrapper
