import React from "react";
import { Link } from "react-router-dom";
import "../Style/Nav.css";

const Nav = () => {
    return (
        <nav className='Nav'>
            <Link to='/'>Home</Link>

            <Link to='/blog'>Blog</Link>

            <Link to='/tictactoe'>TicTacToe</Link>

            <Link to='/about'>About</Link>

            <Link to='/contact'>Contact Me</Link>
        </nav>
    );
};

export default Nav;
