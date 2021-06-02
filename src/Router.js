import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}>
            <Login />
          </Route>
          <Route path="/login" component={Login}>
            <Login />
          </Route>
          <Route path="/dashboard" component={Dashboard}>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default routes;
