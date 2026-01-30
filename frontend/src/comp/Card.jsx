import React, { useState } from 'react';

// Styles for Cards (retained from your original code)
const cardStyles = {
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '15px',
        padding: '2rem',
        textAlign: 'center',
        backdropFilter: 'blur(10px)', // Glassmorphism effect
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardHover: {
        transform: 'translateY(-10px)',
        boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.5)',
    },
    icon: {
        fontSize: '3rem',
        marginBottom: '1rem',
        backgroundColor: 'rgba(0, 188, 212, 0.2)',
        borderRadius: '50%',
        padding: '0.8rem',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80px',
        height: '80px',
    },
    title: {
        fontSize: '1.5rem',
        margin: '1rem 0',
        color: '#e0f7fa',
    },
    description: {
        fontSize: '1rem',
        color: '#cfd8dc',
        flexGrow: 1,
    },
    readMoreButton: {
        marginTop: '1rem',
        padding: '0.6rem 1.5rem',
        backgroundColor: '#00bcd4',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '0.9rem',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
    readMoreButtonHover: {
        backgroundColor: '#0097a7',
        transform: 'scale(1.05)',
    }
};

// Reusable Card component
const Card = ({ icon, title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    const currentCardStyle = {
        ...cardStyles.card,
        ...(isHovered && cardStyles.cardHover)
    };
    const currentReadMoreButtonStyle = {
        ...cardStyles.readMoreButton,
        ...(isHovered && cardStyles.readMoreButtonHover)
    };

    return (
        <div
            style={currentCardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={cardStyles.icon}>{icon}</div>
            <h3 style={cardStyles.title}>{title}</h3>
            <p style={cardStyles.description}>{description}</p>
            <button style={currentReadMoreButtonStyle}>Read More</button>
        </div>
    );
};

export default Card;