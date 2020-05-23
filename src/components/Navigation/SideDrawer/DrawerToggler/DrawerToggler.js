import React from 'react';

const DrawerToggler = (props) => (
  <div>
    <button
      type="button"
      onClick={props.clicked}
    >Toggle
    </button>
  </div>
);

export default DrawerToggler;
