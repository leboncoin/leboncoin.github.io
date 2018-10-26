import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClock, faComments } from '@fortawesome/free-solid-svg-icons'


class ArticleTile extends React.Component {
  render() {
    return (
      <div className="col-md-4">
      <div className="blog">
        <div className="blog-img">
          <img className="img-responsive" src="./img/blog1.jpg" alt=""/>
        </div>
        <div className="blog-content">
          <ul className="blog-meta">
            <li><FontAwesomeIcon icon={faUser}/>John doe</li>
              <li><FontAwesomeIcon icon={faClock}/>18 Oct</li>
              <li><FontAwesomeIcon icon={faComments}/>57</li>
          </ul>
          <h3>Molestie at elementum eu facilisis sed odio</h3>
          <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non
            blandit massa enim nec.</p>
          <a href="blog-single.html">Read more</a>
        </div>
      </div>
    </div>

    )
  }
}

export default ArticleTile
