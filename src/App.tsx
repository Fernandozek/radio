import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Album1 from './pages/Album1';
import Album2 from './pages/Album2';
import Album3 from './pages/Album3';
import Album4 from './pages/Album4';
import Album5 from './pages/Album5';
import Album6 from './pages/Album6';
import Error404 from './pages/Error404';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/queen"
            render={(props) => <Album1 {...props} />}
          />
          <Route path="/rhcp" component={Album2} />
          <Route path="/muse" component={Album3} />
          <Route path="/lp" component={Album4} />
          <Route path="/pj" component={Album5} />
          <Route path="/ls" component={Album6} />
          <Route path='*' component={Error404} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
