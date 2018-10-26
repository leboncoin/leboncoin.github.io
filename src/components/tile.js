import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Tile extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="about">
          <FontAwesomeIcon icon={faCoffee}/>
          <h3>{this.props.title}</h3>
          <p>{this.props.body}</p>
          <a href="#">Read more</a>
        </div>
      </div>
    )
  }
}

export default Tile
