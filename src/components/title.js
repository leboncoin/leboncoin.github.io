import React from "react"

class Title extends React.Component {
  render() {
    return (
      <div className="section-header text-center">
        <h2 className="title">{this.props.title}</h2>
      </div>
    )
  }
}

export default Title
