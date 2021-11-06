import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  calcTotalProd() {
    return this.props.cart.reduce((total, item) => total += item.quantity, 0)
  }

  logout () {
    localStorage.removeItem('access_token')
    this.props.history.push('/user/login')
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">The coffee house</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/binding">Binding</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/components">Components</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/props">Props</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/state">State</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/style">Style</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/life-cycle">Life cycle</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/functional">Functional</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/redux">Redux</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/axios">Axios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user/login">Login</Link>
              </li>
              <li className="nav-item">
                <button onClick={this.logout}>Đăng xuất</button>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <button type="button" className="btn btn-outline-success position-relative">
                  Giỏ hàng
                  <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                    {this.calcTotalProd()}
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)
