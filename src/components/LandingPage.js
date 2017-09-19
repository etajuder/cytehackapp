import React, { Component } from 'react';
import MenuOptions from './MenuOptions';

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoggedIn: false, user: {}, isLoading: false };
  }

  componentDidMount() {
    //some action goes in here

  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return (


      <div className="banner">
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="img/banner/banner-slider-3.jpg" alt="banner-slider-12" />
              <div className="container">
                <div className="carousel-caption banner-slider-inner banner-top-align">
                  <h1 className="hidden-lg hidden-sm hidden-md" data-animation="animated fadeInDown delay-05s"><span>Find your </span> Dream House</h1>
                  <a href="#" className="btn button-md button-theme hidden-lg hidden-sm hidden-md" data-animation="animated fadeInUp delay-05s">Get Started Now</a>
                  <a href="#" className="btn button-md border-button-theme hidden-lg hidden-sm hidden-md" data-animation="animated fadeInUp delay-05s">Learn More</a>

                  <div className="options text-middle">
                    <div className="menu-item">
                    <a href="#" className="btn button-sm button-theme">Climate Control</a>
                    </div>
                    <div className="menu-item2">
                    <a href="#" className="btn button-sm button-theme">Non Climate Control</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <MenuOptions />
      </div>
    );
  }
}

export default LandingPage;