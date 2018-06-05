import React from 'react';
import Link from 'gatsby-link';
import 'normalize.css';

import './globalStyles';

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    return <div>{children()}</div>;
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
};

export default Template;
