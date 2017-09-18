import React, { Component } from 'react';


class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuthenticated: false,
      user: {}
    };
  }

  componentDidMount() {
    console.log(this.props);
  }


  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }


  render() {
    const { isAuthenticated, user } = this.state;
    return (
      <div>
        <header className="top-header hidden-xs" id="top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="list-inline">
                  <a href="tel:1-8X0-666-8X88"><i className="fa fa-phone"></i>1-8X0-666-8X88</a>
                  <a href="tel:info@themevessel.com"><i className="fa fa-envelope"></i>info@themevessel.com</a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <ul className="top-social-media pull-right">
                  <li>
                    <a href="login.html" className="sign-in"><i className="fa fa-sign-in"></i> Login</a>
                  </li>
                  <li>
                    <a href="signup.html" className="sign-in"><i className="fa fa-user"></i> Register</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <header className="main-header">
          <div className="container">
            <nav className="navbar navbar-default">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navigation" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a href="index.html" className="logo">
                  <img src="img/logos/logo.png" alt="logo" />
                </a>
              </div>

              <div className="navbar-collapse collapse" role="navigation" aria-expanded="true" id="app-navigation">
                <ul className="nav navbar-nav">
                  <li className="active">
                    <a tabindex="0" data-submenu="" aria-expanded="false">
                      Home
                      </a>
                  </li>
                  <li >
                    <a tabindex="0" data-submenu="" aria-expanded="false">
                      Solutions
                    </a>
                  </li>
                  <li >
                    <a tabindex="0" data-submenu="" aria-expanded="false">
                      About Us
                    </a>
                  </li>

                  <li >
                    <a tabindex="0" data-submenu="" aria-expanded="false">
                      Support
                    </a>
                  </li>
                  <li >
                    <a tabindex="0" data-submenu="" aria-expanded="false">
                      Space by Name
                    </a>
                  </li>
                  <li >
                    <a tabindex="0" data-submenu="" aria-expanded="false">
                      List Space
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}


export default Header;