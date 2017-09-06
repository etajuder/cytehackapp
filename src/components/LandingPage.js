import React, { Component } from 'react';

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
      <div></div>
    );
  }
}