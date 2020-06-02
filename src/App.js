import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurguerBuilder from './containers/BurgerBuilder/BurguerBuilder';
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" exact component={BurguerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
