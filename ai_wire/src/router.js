import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Login from './login_page';
import MainPage from './content_page';

export class AppRouter extends React.Component {
  render() {
    return(
      <div>
        <Router>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" component={MainPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppRouter;