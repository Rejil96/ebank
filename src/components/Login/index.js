import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {userId: '', userPin: '', errorMsg: false, errorText: ''}

  onLogin = async event => {
    event.preventDefault()
    const {history} = this.props
    const {userId, userPin} = this.state
    const url = 'https://apis.ccbp.in/ebank/login'
    const userLoginCredentials = {user_id: userId, pin: userPin}
    const options = {
      method: 'POST',
      body: JSON.stringify(userLoginCredentials),
    }

    const checkUserApi = await fetch(url, options)
    const checkUserApiResponse = await checkUserApi.json()
    if (checkUserApi.ok) {
      Cookies.set('jwt_token', checkUserApiResponse.jwt_token, {expires: 30})
      history.replace('/')
    } else {
      this.setState({errorMsg: true, errorText: checkUserApiResponse.error_msg})
    }
  }

  onUserIdChange = event => {
    this.setState({userId: event.target.value})
  }

  onUserPinChange = event => {
    this.setState({userPin: event.target.value})
  }

  render() {
    const {userId, userPin, errorMsg, errorText} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-bg-container">
        <div className="login-card-wrapper">
          <div className="card-banner">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
              className="login-banner-img"
            />
          </div>
          <form className="login-card" onSubmit={this.onLogin}>
            <h1 className="login-card-heading">Welcome Back!</h1>
            <div className="input-controller">
              <label className="input-label" htmlFor="userId">
                User ID
              </label>
              <input
                type="text"
                className="input-control"
                placeholder="Enter User ID"
                id="userId"
                value={userId}
                onChange={this.onUserIdChange}
              />
            </div>
            <div className="input-controller">
              <label className="input-label" htmlFor="pinNo">
                PIN
              </label>
              <input
                type="password"
                className="input-control"
                placeholder="Enter User ID"
                id="pinNo"
                value={userPin}
                onChange={this.onUserPinChange}
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
            {errorMsg && <p className="error">{errorText}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
