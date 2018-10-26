import React from "react"
import Header from "./header"
import HomeWrapper from "./home_wrapper"

export default () => <div>
  <div>
    <div className="bg-img" style={{backgroundImage: "url('../static/background1.jpg')"}}>
      <div className="overlay"/>
    </div>
    <Header id={"home"}/>
    <HomeWrapper/>
  </div>
</div>
