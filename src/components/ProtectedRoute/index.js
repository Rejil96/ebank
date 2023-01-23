import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const isCookiesFound = Cookies.get('jwt_token')
  if (isCookiesFound === undefined) {
    return <Redirect to="/ebank/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
