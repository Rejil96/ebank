import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Login from './components/Login'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact to="/ebank/login" component={Login} />
    <ProtectedRoute exact to="/" component={Home} />
    <Route exact to="not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
