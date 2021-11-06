import React from "react";
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    const { cartNumber } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>
            The Coffee House
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to='/'>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/binding'>
                  Binding
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/components'>
                  Components
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/props'>
                  Props
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/state'>
                  State
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/style'>
                  Style
                </Link>
              </li>
            </ul>
            <button type="button" className="btn btn-primary position-relative">
              Giỏ hàng
              <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                {cartNumber}
              </span>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
