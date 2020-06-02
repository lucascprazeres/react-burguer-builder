import React from 'react';

import Layout from './hoc/Layout/Layout';
import BurguerBuilder from './containers/BurgerBuilder/BurguerBuilder';
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Layout>
        <BurguerBuilder />
        <Checkout />
      </Layout>
    </div>
  );
}

export default App;
