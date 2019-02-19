import React from "react"
import {Navbar, Nav, NavItem} from "react-bootstrap"
import Logo from "../images/logo.svg"

const menuItems = [
  {title: "Blog", link: "#blog"},
  {title: "Projects", link: "#projects"},
  {title: "Events", link: "https://www.welcometothejungle.co/companies/leboncoin/meetings", target: "_blank"},
  {title: "Careers", link: "https://recrutement.leboncoin.fr/departments/it-data", target: "_blank"}
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.setNavExpanded = this.setNavExpanded.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.state = {
      navClass: "nav-transparent",
      logo: "logo-alt",
      navExpanded: false
    }
  }


  setNavExpanded(expanded) {
    this.setState({navExpanded: expanded});
  }

  closeNav() {
    this.setState({navExpanded: false});
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
      <Navbar
        id={"nav"}
        fixedTop
        className={this.state.navClass}
        onToggle={this.setNavExpanded}
        expanded={this.state.navExpanded}
        collapseOnSelect
      >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">
              <img
                className={this.state.logo}
                src={Logo}
                alt="logo"/>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight className={"main-nav"} onSelect={this.closeNav}>
            {menuItems.map((item, index) =>
              <NavItem key={index} eventKey={index} href={item.link} target={item.target || "_self" }>
                {item.title}
              </NavItem>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header
