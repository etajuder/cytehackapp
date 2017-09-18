import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';


/**
 * App - Wrapper Component
 */
const App = (props) => (
  <div className="row">
    <Header />
    {props.children}
  </div>
  );

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
