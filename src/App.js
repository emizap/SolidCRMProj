import HomePage from './HomePage';
import Register from './Register';
import Dashboard from './DashBoard';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path = '/' component={HomePage} exact/>
            <Route path = '/register' component={Register} />
            <Route path = '/dashboard' component={Dashboard} />
        </Switch>
        </BrowserRouter>
  );
}

export default App;
