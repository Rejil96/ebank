import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

const Home = () => {
  const isCookieFound = Cookies.get('jwt_token')
  if (isCookieFound === undefined) {
    return <Redirect to="/ebank/login" />
  }

  return (
    <div className="home-banner">
      <p>Haii</p>
      <Header />
    </div>
  )
}

export default Home
