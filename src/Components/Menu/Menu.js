import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Menu() {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/pokemon"}>Pokemon</Link>
                </li>
                <li>
                    <Link to={"/posts"}>Posts</Link>
                </li>
            </ul>
        </nav>

        <Outlet/>
    </>
  )
}

export default Menu