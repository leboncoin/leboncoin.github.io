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
    console.log(this.state)
    return (
      <Navbar id={"nav"} fixedTop className={this.state.navClass}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">
              <img
                className={this.state.logo}
                src={this.state.logo === "logo" ? Logo : LogoAlt}
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
