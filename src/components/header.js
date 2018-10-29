import React from "react"
import { Navbar, Nav, NavItem } from "react-bootstrap"
import Logo from "../images/logo.svg"

const menuItems = [
  {title: "Blog", link: "#blog"},
  {title: "Projects", link: "#project"},
  {title: "Events", link: "https://www.welcometothejungle.co/companies/leboncoin/meetings"},
  {title: "Careers", link: "https://www.welcometothejungle.co/companies/leboncoin/jobs"}
];

class Header extends React.Component {
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      navClass: "nav-transparent",
      logo: "logo-alt"
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({
      navClass: window.scrollY > 20 ? "nav-fixed" : "nav-transparent",
      logo: window.scrollY > 20 ? "logo" : "logo-alt"
    })
  }

  render() {
    return (
      <Navbar id={"nav"} fixedTop className={this.state.navClass}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">
              <img
                className={this.state.logo}
                src={Logo}
                alt="logo"/>
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
