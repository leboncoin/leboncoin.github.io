import Key from "../key";
import Section from "./layout";
import Background from "../../images/background2.jpg";
import React from "react";
import {Row} from "react-bootstrap";
import {faServer, faRocket, faDatabase, faImages} from '@fortawesome/free-solid-svg-icons'


class Keys extends React.Component {
  render() {
    return (
      <Section
        sectionName={"keys"}
      >
        <div className="bg-img" style={{backgroundImage: `url(${Background})`}}>
          <div className="overlay"/>
        </div>
        <Row>
          <Key icon={faServer} number={"2K+"} type={"VMs / Containers"}/>
          <Key icon={faRocket} number={"12"} type={"Throughput Gbps"}/>
          <Key icon={faDatabase} number={"6To"} type={"Database"}/>
          <Key icon={faImages} number={"300M"} type={"Pictures"}/>
        </Row>
      </Section>
    )
  }
}

export default Keys