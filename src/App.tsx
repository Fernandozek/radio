import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Error404 from './pages/Error404';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path='*' component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
