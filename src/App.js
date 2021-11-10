import HomePage from './HomePage';
import Register from './Register';
import Dashboard from './DashBoard';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Estimates from './Estimates';
function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path = '/' component={HomePage} exact/>
            <Route path = '/register' component={Register} />
            <Route path = '/estimates-home' component={Estimates} />
            <Route path = '/dashboard' component={Dashboard} />
        </Switch>
        </BrowserRouter>
  );
}

export default App;
