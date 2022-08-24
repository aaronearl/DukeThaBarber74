import React from "react";

const isCurrent = (anchor, pathname) => (
  pathname.endsWith(anchor)
    ? 'current'
    : ''
)
class Navigation extends React.Component {
  state = {
    pathname: '#home'
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ pathname: window.location.href });
    })
  }
  render() {
    const { pathname = '' } = this.state
    return (
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" />
        <ul id="nav" className="nav">
          <li className={isCurrent('#home', pathname)}>
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li className={isCurrent('#about', pathname)}>
            <a className="smoothscroll" href="#about">
              King Duke
            </a>
          </li>
          <li className={isCurrent('#resume', pathname)}>
            <a className="smoothscroll" href="#resume">
              Appointment / Prices
            </a>
          </li>
          <li className={isCurrent('#skills', pathname)}>
            <a className="smoothscroll" href="#skills">
              Gallery
            </a>
          </li>
          <li className={isCurrent('#testimonials', pathname)}>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li className={isCurrent('#footer', pathname)}>
            <a className="smoothscroll" href="#footer">

            </a>
          </li>
        </ul>
      </nav>
    )
  }
};

export default Navigation;
