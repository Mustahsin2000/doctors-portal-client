import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../src/img-logo.png'
import { AuthContext } from '../../../Context/AuthProvider';
import './Navbar.css'
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [theme, setTheme] = useState("light-theme");

    const [isDarkMode, setIsDarkMode] = useState(() => false);

    const toggleTheme = () => {
        if (theme === "dark-theme") {
            setTheme('light-theme');
        } else {
            setTheme('dark-theme');
        }
    }


    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const handlelogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar bg-base-100 mt-3 mb-3 mx-11">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/appoinment'>Appoinment</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/reviews'>Reviews</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/signup'>Signup</Link></li>
                    </ul>
                </div>
                <img className='h-12 rounded-full' src={logo} alt="" />
                <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0 rounded font-semibold">
                    <li className='hover:bg-cyan-300 rounded hover:text-white'><Link to='/'>Home</Link></li>
                    <li className='hover:bg-cyan-300 rounded hover:text-white'><Link to='/appoinment'>Appoinment</Link></li>
                    <li className='hover:bg-cyan-300 rounded hover:text-white'><Link to='/about'>About</Link></li>

                    {user?.uid ?
                        <>
                            <li className='hover:bg-cyan-300 rounded hover:text-white'><Link to='/dashboard'>Dashboard</Link></li>
                            <li className='hover:bg-cyan-300 rounded hover:text-white'><button onClick={handlelogout}>sign out</button></li>
                        </>
                        :
                        <li className='hover:bg-cyan-300 rounded hover:text-white'><Link to='/login'>Login</Link></li>}
                    <li className='hover:bg-cyan-300 rounded hover:text-white'><Link to='/signup'>Signup</Link></li>

                </ul>
                <div>
                    <input type="checkbox" onClick={() => toggleTheme()} className="toggle mt-3" />
                    {/* <DarkModeToggle
                        onChange={setIsDarkMode}
                        checked={isDarkMode}
                        size={40}
                    /> */}

                </div>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

        </div>
    );
};

export default Navbar;