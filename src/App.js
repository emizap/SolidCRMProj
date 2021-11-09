import HomePage from './HomePage';
import Register from './Register';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path = '/' component={HomePage} exact/>
            <Route path = '/register' component={Register} />
        </Switch>
        </BrowserRouter>
  );
}

export default App;
