import React from 'react';
import 'normalize.css';
import 'prismjs/themes/prism-solarizedlight.css';

import '../layouts/globalStyles';

export default ({ children, location }) => (
  <div className="test">{children}</div>
);
