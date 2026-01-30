import React from 'react';
import { Link } from 'react-router-dom'; // For proper routing

// Styles for Footer
const footerStyles = {
    footer: {
        padding: '2rem',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        textAlign: 'center',
        zIndex: 2,
        position: 'relative',
        backdropFilter: 'blur(5px)',
        marginTop: 'auto',
    },
    logoContainer: {
        marginBottom: '1rem',
    },
    logoText: {
        fontSize: '1.8rem',
        fontWeight: 'bold',
    },
    footerNav: {
        margin: '1rem 0',
    },
    footerNavLink: {
        color: '#fff',
        textDecoration: 'none',
        margin: '0 1rem',
        transition: 'color 0.3s ease',
    },
    // footerNavLinkHover will be handled by Tailwind's hover classes
    copyright: {
        fontSize: '0.9rem',
        color: '#cfd8dc',
        marginBottom: '1rem',
    },
    socialIcons: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
    },
    socialIcon: {
        fontSize: '1.5rem',
        color: '#fff',
        textDecoration: 'none',
        transition: 'transform 0.3s ease, color 0.3s ease',
    },
    // socialIconHover will be handled by Tailwind's hover classes
};

// Footer component
const Footer = () => {
    return (
        <footer style={footerStyles.footer}>
            <div style={footerStyles.logoContainer}>
                <span style={footerStyles.logoText}>AXIS25</span>
            </div>
            <div style={footerStyles.footerNav}>
                <Link to="/" style={footerStyles.footerNavLink}>Home</Link>
                <Link to="/about" style={footerStyles.footerNavLink}>About</Link>
            </div>
            <p style={footerStyles.copyright}>
                &copy; Copyright by AXIS 2025. All Rights Reserved.
            </p>
            <div style={footerStyles.socialIcons}>
                <a href="#" style={footerStyles.socialIcon}>📸</a>
                <a href="#" style={footerStyles.socialIcon}>🔗</a>
                <a href="#" style={footerStyles.socialIcon}>▶️</a>
            </div>
        </footer>
    );
};

export default Footer;