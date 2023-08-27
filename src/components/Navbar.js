//component should be named in capital letters only
import React from 'react'
import PropTypes from 'prop-types'
  

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
  <div className={`container-fluid text-${props.mode==='light'?'dark':'light'}`} >
    <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" href="/">{props.about}</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${props.mode==='light'?'dark':'light'}`} href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className={`nav-link dropdown-toggle text-${props.mode==='light'?'dark':'light'}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item text">
          <a className={`nav-link disabled text-${props.mode==='light'?'dark':'light'}`} href='/'>Disabled</a>
        </li>
      </ul>
      {/* color themess */}
      <div>Choose color theme: &nbsp;</div>
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" className="btn btn-danger" onClick={props.tred}>Red</button>
  <button type="button" className="btn btn-warning">Green</button>
  <button type="button" className="btn btn-success">Yellow</button>
</div>
&nbsp;&nbsp;
      {/* toggle button */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onChange={props.toggle} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.disable}</label>
</div>
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes={
  title:PropTypes.string.isRequired,
  about:PropTypes.string
}
Navbar.defaultProps={
  title:6,
  about:"default about"
}