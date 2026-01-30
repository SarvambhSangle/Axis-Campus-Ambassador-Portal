import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active styling

const navStyles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 3rem',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slightly transparent background
        backdropFilter: 'blur(10px)', // Glassmorphism effect
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.18)',
        position: 'sticky', // Make navbar sticky
        top: 0,
        zIndex: 1000, // Ensure it's above other content
    },
    logo: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#00bcd4', // A vibrant color for the logo
        textDecoration: 'none',
        textShadow: '0 0 8px rgba(0, 188, 212, 0.5)',
    },
    navLinks: {
        display: 'flex',
        gap: '2.5rem', // Increased gap for better spacing
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
    navItem: {
        fontSize: '1.1rem',
        fontWeight: '600',
    },
    navLink: {
        color: '#e0f7fa', // Light color for text
        textDecoration: 'none',
        transition: 'color 0.3s ease, text-shadow 0.3s ease',
        // Hover and active styles will be handled by className with Tailwind later
    },
    // Styles for active NavLink (React Router DOM NavLink specific)
    activeNavLink: {
        color: '#00bcd4', // Highlight active link
        textShadow: '0 0 8px rgba(0, 188, 212, 0.7)',
    },
    // Burger menu for responsiveness (will be implemented with Tailwind)
    burgerMenu: {
        display: 'none', // Hidden by default, shown on small screens with Tailwind
        flexDirection: 'column',
        cursor: 'pointer',
    },
    bar: {
        width: '25px',
        height: '3px',
        backgroundColor: '#fff',
        margin: '4px 0',
        transition: '0.4s',
    },
    mobileMenu: {
        display: 'none', // Hidden by default
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        padding: '1rem 0',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    },
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav style={navStyles.navbar}>
            <NavLink to="/" style={navStyles.logo}>AXIS25</NavLink>

            {/* Desktop Navigation */}
            <ul style={navStyles.navLinks}>
                <li style={navStyles.navItem}>
                    <NavLink
                        to="/"
                        style={({ isActive }) => ({
                            ...navStyles.navLink,
                            ...(isActive ? navStyles.activeNavLink : {}),
                        })}
                    >
                        Home
                    </NavLink>
                </li>
                {/* You might not have an '/about' route yet, replace with an actual one if available */}
                <li style={navStyles.navItem}>
                    <NavLink
                        to="/whats-in-it"
                        style={({ isActive }) => ({
                            ...navStyles.navLink,
                            ...(isActive ? navStyles.activeNavLink : {}),
                        })}
                    >
                        What's in it?
                    </NavLink>
                </li>
                <li style={navStyles.navItem}>
                    <NavLink
                        to="/responsibilities"
                        style={({ isActive }) => ({
                            ...navStyles.navLink,
                            ...(isActive ? navStyles.activeNavLink : {}),
                        })}
                    >
                        Responsibilities
                    </NavLink>
                </li>
                <li style={navStyles.navItem}>
                    <NavLink
                        to="/faqs"
                        style={({ isActive }) => ({
                            ...navStyles.navLink,
                            ...(isActive ? navStyles.activeNavLink : {}),
                        })}
                    >
                        FAQs
                    </NavLink>
                </li>
                <li style={navStyles.navItem}>
                    <NavLink
                        to="/testimonials"
                        style={({ isActive }) => ({
                            ...navStyles.navLink,
                            ...(isActive ? navStyles.activeNavLink : {}),
                        })}
                    >
                        Testimonials
                    </NavLink>
                </li>
                 <li style={navStyles.navItem}>
                    <NavLink
                        to="/leaderboard"
                        style={({ isActive }) => ({
                            ...navStyles.navLink,
                            ...(isActive ? navStyles.activeNavLink : {}),
                        })}
                    >
                        Leaderboard
                    </NavLink>
                </li>
                <li style={navStyles.navItem}>
                    <NavLink
                        to="/fortnite-leaderboard"
                        style={({ isActive }) => ({
                            ...navStyles.navLink,
                            ...(isActive ? navStyles.activeNavLink : {}),
                        })}
                    >
                        Fortnite Leaderboard
                    </NavLink>
                </li>
                <li style={navStyles.navItem}>
                    <NavLink
                        to="/contact-us"
                        style={({ isActive }) => ({
                            ...navStyles.navLink,
                            ...(isActive ? navStyles.activeNavLink : {}),
                        })}
                    >
                        Contact us!
                    </NavLink>
                </li>
                {/* NEW PROFILE LINK */}
                <li style={navStyles.navItem}>
                    <NavLink
                        to="/profile"
                        style={({ isActive }) => ({
                            ...navStyles.navLink,
                            ...(isActive ? navStyles.activeNavLink : {}),
                        })}
                    >
                        Profile
                    </NavLink>
                </li>
            </ul>

            {/* Mobile Burger Menu (will be styled with Tailwind for small screens) */}
            <div style={navStyles.burgerMenu} onClick={toggleMenu}>
                <div style={navStyles.bar}></div>
                <div style={navStyles.bar}></div>
                <div style={navStyles.bar}></div>
            </div>

            {/* Mobile Menu (will be styled with Tailwind for small screens) */}
            {/* {isOpen && (
                <ul style={navStyles.mobileMenu}>
                    <li style={navStyles.navItem}>
                        <NavLink to="/" style={navStyles.navLink} onClick={toggleMenu}>Home</NavLink>
                    </li>
                    <li style={navStyles.navItem}>
                        <NavLink to="/whats-in-it" style={navStyles.navLink} onClick={toggleMenu}>What's in it?</NavLink>
                    </li>
                    <li style={navStyles.navItem}>
                        <NavLink to="/responsibilities" style={navStyles.navLink} onClick={toggleMenu}>Responsibilities</NavLink>
                    </li>
                    <li style={navStyles.navItem}>
                        <NavLink to="/faqs" style={navStyles.navLink} onClick={toggleMenu}>FAQs</NavLink>
                    </li>
                    <li style={navStyles.navItem}>
                        <NavLink to="/testimonials" style={navStyles.navLink} onClick={toggleMenu}>Testimonials</NavLink>
                    </li>
                    <li style={navStyles.navItem}>
                        <NavLink to="/leaderboard" style={navStyles.navLink} onClick={toggleMenu}>Leaderboard</NavLink>
                    </li>
                    <li style={navStyles.navItem}>
                        <NavLink to="/fortnite-leaderboard" style={navStyles.navLink} onClick={toggleMenu}>Fortnite Leaderboard</NavLink>
                    </li>
                    <li style={navStyles.navItem}>
                        <NavLink to="/contact-us" style={navStyles.navLink} onClick={toggleMenu}>Contact us!</NavLink>
                    </li>
                     <li style={navStyles.navItem}>
                        <NavLink to="/profile" style={navStyles.navLink} onClick={toggleMenu}>Profile</NavLink>
                    </li>
                </ul>
            )} */}
        </nav>
    );
};

export default Navbar;