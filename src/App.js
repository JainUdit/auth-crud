import React from 'react';
import 'antd/dist/antd.css';
import { Route, Switch } from 'react-router-dom';
import ConnectedAuth from './redux-app/containers/ConnectedAuth';
import ConnectedListPage from './redux-app/containers/ConnectedListPage';
import { PrivateRoute } from './redux-app/routeHoc/PrivateRoute';
import { NotFound } from './redux-app/components/NotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ConnectedAuth} />
      <PrivateRoute path="/list" component={ConnectedListPage} />
      <Route component={NotFound}/>
    </Switch>
  );
}

export default App;