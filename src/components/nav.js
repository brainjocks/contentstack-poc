import React, { Component } from 'react'
import bjlogo from '../img/brainjocks-logo.svg'
import { Link } from 'gatsby'
import PageColumn1 from './page-structures/score-column1-page'

const links = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/contact', text: 'Contact Us' },
]

class Header extends Component {
  constructor(props) {
    super(props)

    if (typeof window !== 'undefined') {
      let prevScrollpos = window.pageYOffset
      window.onscroll = function() {
        const maxScroll = document.body.clientHeight - window.innerHeight
        let currentScrollPos = window.pageYOffset
        if (
          (maxScroll > 0 &&
            prevScrollpos > currentScrollPos &&
            prevScrollpos <= maxScroll) ||
          (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
          (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
          document.getElementById('navbar').style.top = '0'
        } else {
          document.getElementById('navbar').style.top = '-124px'
        }
        prevScrollpos = currentScrollPos
      }
    }

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const classDropdownMenu =
      'navbar-collapse collapse' + (this.state.collapsed ? ' ' : ' in')
    const buttonToggle =
      'score-hamburger navbar-toggle' +
      (!this.state.collapsed ? '' : ' collapsed')
    return (
      <header id="navbar">
        <PageColumn1>
          <div className="score-megamenu">
            <div className="score-nav-wrapper">
              <div className="score-nav">
                <div className="navbar-header score-navbar-header">
                  <button onClick={this.toggleNavbar} className={buttonToggle}>
                    <span className="sr-only"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <Link to="/" className="navbar-brand">
                    <img
                      src={bjlogo}
                      alt="brainjocks logo"
                      className="image-responsive"
                    />
                  </Link>
                </div>
                <div className={classDropdownMenu}>
                  <div className="nav navbar-nav score-nav">
                    {links.map((item, index) => {
                      return (
                        <li className="score-megamenu-basic-item" key={index}>
                          <Link to={item.href} className={item.className}>
                            {item.text}
                          </Link>
                        </li>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageColumn1>
      </header>
    )
  }
}

export default Header
