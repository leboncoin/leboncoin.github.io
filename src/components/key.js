import React from "react"
import {Col} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


class Key extends React.Component {
  render() {
    return (
      <Col sm={3} xs={6}>
        <div className="number">
          <FontAwesomeIcon className={"numberIcon"} icon={this.props.icon} size="3x" color={"blue"}/>
          <h3 className="white-text"><span className="counter">{this.props.number}</span></h3>
          <span className="white-subtext">{this.props.type}</span>
        </div>
      </Col>
    )
  }
}

export default Key
