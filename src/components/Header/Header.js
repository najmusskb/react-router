import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>

            <nav>
                <Link to={'/home'}>Home</Link >
                <Link to={'/about'}>About</Link >
                <Link to={'/products'}>products</Link >
                <Link to={'/Barighor'}>barighor</Link >
            </nav>
            <h3>Common</h3>


        </div>
    );
};

export default Header;