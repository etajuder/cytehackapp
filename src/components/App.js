import React from 'react';
import PropTypes from 'prop-types';


/**
 * App - Wrapper Component
 */
const App = (props) => (
  <div className="container-fluid">
    {props.children}
  </div>
  );

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
