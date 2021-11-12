import HomePage from './HomePage';
import Register from './Register';
import Dashboard from './DashBoard';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Estimates from './Estimates';
import PreviewEstimate from './PreviewEstimate';
function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path = '/' component={HomePage} exact/>
            <Route path = '/register' component={Register} />
            <Route path = '/estimates-home' component={Estimates} />
            <Route path = '/dashboard' component={Dashboard} />
            <Route path = '/previewEstimates' component={PreviewEstimate} />

        </Switch>
        </BrowserRouter>
  );
}

export default App;
