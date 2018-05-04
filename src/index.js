import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

// import containers (pages)
import LandingPage from './containers/LandingPage';
import NotFoundPage from './containers/NotFoundPage';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
