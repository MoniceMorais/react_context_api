import "./Navbar.css"

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">First</NavLink>
            <NavLink to="/second">Second</NavLink>
            <NavLink to="/third">Third</NavLink>
        </nav>
    )
}

export default Navbar