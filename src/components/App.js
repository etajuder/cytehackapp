import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import LandingPage from './LandingPage';


/**
 * App - Wrapper Component
 */
const App = (props) => (
  <div className="row">
    <Header />
    {console.log('the children', props.children)}
    {props.children}
  </div>
  );

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
