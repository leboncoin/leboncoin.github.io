import React from "react"
import { Navbar, Nav, NavItem } from "react-bootstrap"
import Logo from "../static/logo.png"
import LogoAlt from "../static/logo-alt.png"

const menuItems = [
  {title: "Home", link: "#home"},
  {title: "Blog", link: "#blog"},
  {title: "Keys", link: "#keys"},
  {title: "Projects", link: "#projects"}
];

class Header extends React.Component {
  render() {
    return (
      <Navbar id={"nav"} className={"nav-transparent"}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">
              <img className="logo" src={Logo} alt="logo"/>
              <img className="logo-alt" src={LogoAlt} alt="logo"/>
            </a>
          </Navbar.Brand>
          <Navbar.Collapse>
            <span/>
          </Navbar.Collapse>
        </Navbar.Header>
        <Nav pullRight className={"main-nav"}>
          {menuItems.map((item, index) =>
            <NavItem key={index} eventKey={index} href={item.link}>
            {item.title}
            </NavItem>
          )}
        </Nav>
      </Navbar>
    )
  }
}

export default Header
