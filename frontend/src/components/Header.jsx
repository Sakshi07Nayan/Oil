import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { Link } from 'react-router-dom';

const Header = () => {
    const theme = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();

    return (
        <header className={`header ${theme}`}>
            <div><h2>LOGO</h2></div>
            <nav>
                <ul className='nav-links'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>

            <button onClick={() => dispatch(toggleTheme())}>
                {theme === 'light' ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}

export default Header;