import React from 'react';
import Card from './Card'; // Import the Card component

// Styles for Hero Section
const heroStyles = {
    section: {
        padding: '4rem 2rem',
        textAlign: 'center',
        color: '#fff',
        zIndex: 2,
        position: 'relative',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        gap: '4rem',
        marginBottom: '3rem',
    },
    stats: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: '1rem 2rem',
        borderRadius: '10px',
        border: '1px solid #00bcd4',
        boxShadow: '0 0 15px rgba(0, 188, 212, 0.5)',
    },
    statItem: {
        fontSize: '1.2rem',
        marginBottom: '0.5rem',
        color: '#e0f7fa',
    },
    statValue: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#00bcd4',
    },
    title: {
        fontSize: '2.8rem',
        marginBottom: '3rem',
        color: '#fff',
        textShadow: '0 0 10px rgba(0, 188, 212, 0.7)',
    },
    cardsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
    },
};

// Hero Section component (What's in it for you?)
const HeroSection = () => {
    return (
        <section id="whats-in-it" style={heroStyles.section}>
            <div style={heroStyles.header}>
                <div style={heroStyles.stats}>
                    <p style={heroStyles.statItem}>COLLEGE AMBASSADORS</p>
                    <p style={heroStyles.statValue}>500+</p>
                </div>
                <div style={heroStyles.stats}>
                    <p style={heroStyles.statItem}>COLLEGES</p>
                    <p style={heroStyles.statValue}>180+</p>
                </div>
            </div>
            <h2 style={heroStyles.title}>What's in it for you?</h2>
            <div style={heroStyles.cardsContainer}>
                <Card
                    icon="🏅"
                    title="Certificate"
                    description="Each ambassador would be getting certificates from AXIS, VNIT Nagpur based on performance."
                />
                <Card
                    icon="🏆"
                    title="Exciting Prizes"
                    description="Top performing CAs will be given AXIS goodies."
                />
                <Card
                    icon="🤝"
                    title="Networking"
                    description="CAs are from around the country, forming a diverse network."
                />
                <Card
                    icon="💡"
                    title="Guidance and Mentoring"
                    description="Each CA is mentored personally by a team member from AXIS VNIT Nagpur."
                />
                <Card
                    icon="🎟️"
                    title="Access to all the Workshop"
                    description="Best performing CAs will get AXIS 2024 passes and will be invited to the VNIT campus."
                />
                <Card
                    icon="👕"
                    title="Merchandise"
                    description="Best performing CAs will get EXCLUSIVE AXIS'24 Merchandise"
                />
            </div>
        </section>
    );
};

export default HeroSection;