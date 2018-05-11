import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import registerServiceWorker from './registerServiceWorker';

// import containers (pages)
import LandingPage from './containers/LandingPage/';
import AboutPage from './containers/AboutPage/';
import NotFoundPage from './containers/NotFoundPage/';

// import hamburger menu components
import Hamburger from './components/Hamburger';
import Drawer from './components/Drawer';

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDrawer: false,
    };
  }

  toggleDrawer() {
    this.setState({ showDrawer: !this.state.showDrawer });
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>

          <Hamburger
            showDrawer={this.state.showDrawer}
            toggleDrawer={() => this.toggleDrawer()}
          />
          <Drawer
            showDrawer={this.state.showDrawer}
            toggleDrawer={() => this.toggleDrawer()}
          />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
