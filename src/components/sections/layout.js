import Title from "../title";
import React from "react";

class Section extends React.Component {
  render() {
    return(
      <div id={this.props.sectionName} className="section md-padding">
        <div className="container">
          {this.props.sectionTitle && <Title title={this.props.sectionTitle}/>}
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Section