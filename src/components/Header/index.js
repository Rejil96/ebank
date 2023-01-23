import './index.css'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    const isCookiesFound = Cookies.get('jwt_token')
    if (isCookiesFound !== undefined) {
      Cookies.remove('jwt_token')
      history.replace('/ebank/login')
    }
  }

  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <button type="button" className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(Header)
