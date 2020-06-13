import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const ActiveStyle = {
        color: '#F15B2A'
    };

    return (
    <nav>
        <NavLink to='/' activeStyle={ActiveStyle} exact>Home</NavLink>{"  |  "}
        <NavLink to='/about' activeStyle={ActiveStyle}>About</NavLink>{"  |  "}
        <NavLink to='/courses' activeStyle={ActiveStyle}>Courses</NavLink>
    </nav>
    );
}

export default Header;
