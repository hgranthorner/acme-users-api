import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <ul className={'nav nav-tabs'}>
      <li className="nav-item">
        <NavLink className={'nav-link'} to={'/home'}>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={'nav-link'} to={'/users/0'}>Users</NavLink>
      </li>
    </ul>
  )
}

export default Nav