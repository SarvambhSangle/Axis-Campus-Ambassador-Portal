import React, { useState } from 'react';

const campusAmbassadorStyles = {
    section: {
        // Reduced vertical padding from '4rem 2rem' to '2rem 2rem'
        padding: '2rem 2rem', // Adjusted for less space
        textAlign: 'center',
        color: '#fff',
        zIndex: 2,
        position: 'relative',
        // Removed minHeight: '80vh' as it forces a large height even with less content
        // If you need a minimum height, make it smaller, e.g., '50vh' or 'auto'
        // For now, removing it will allow content to dictate height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: '3.5rem',
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: '0.5rem', // Reduced from '1rem'
        textShadow: '0 0 15px rgba(0, 188, 212, 0.8)',
    },
    subtitle: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#00bcd4',
        marginBottom: '1rem', // Reduced from '2rem'
        textShadow: '0 0 10px rgba(0, 188, 212, 0.7)',
    },
    description: {
        fontSize: '1.1rem',
        color: '#cfd8dc',
        maxWidth: '800px',
        margin: '0 auto 1.5rem auto', // Reduced from '3rem'
        lineHeight: '1.6',
    },
    buttonContainer: {
        marginBottom: '1.5rem', // Reduced from '3rem'
    },
    button: {
        padding: '12px 30px',
        backgroundColor: '#00bcd4',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        textTransform: 'uppercase',
    },
    // buttonHover will be handled by Tailwind
    contentGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr', // Default to single column for small screens
        gap: '2rem',
        maxWidth: '1000px',
        width: '100%',
        margin: '1.5rem auto 0 auto', // Reduced from '2rem'
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '15px',
        padding: '2rem',
        textAlign: 'left',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardTitle: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#00bcd4',
        marginBottom: '1rem',
        textAlign: 'center',
    },
    cardText: {
        fontSize: '1.1rem',
        color: '#e0f7fa',
        lineHeight: '1.7',
    },
    // Media query for larger screens will be handled by Tailwind when integrated
    '@media (min-width: 768px)': {
        contentGrid: {
            gridTemplateColumns: '1fr 1fr', // Two columns for larger screens
        },
    },
};

const CampusAmbassador = () => {
    // State to manage the visibility of the detailed sections
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <section id="campus-ambassador" style={campusAmbassadorStyles.section}>
            <h1 style={campusAmbassadorStyles.title}>Campus Ambassador</h1>
            <p style={campusAmbassadorStyles.subtitle}>Program</p>
            <p style={campusAmbassadorStyles.description}>
                Be our mascot for AXIS, the Largest Technical Fest by VNIT NAGPUR in your
                college and city, by joining AXIS's Campus Ambassador Program
            </p>

            <div style={campusAmbassadorStyles.buttonContainer}>
                <button
                    onClick={toggleDetails}
                    style={campusAmbassadorStyles.button}
                >
                    {showDetails ? 'Show Less' : 'Learn More'}
                </button>
            </div>

            {/* Conditional Rendering: Show these sections only if showDetails is true */}
            {showDetails && (
                <div style={campusAmbassadorStyles.contentGrid}>
                    <div style={campusAmbassadorStyles.card}>
                        <h3 style={campusAmbassadorStyles.cardTitle}>About Us</h3>
                        <p style={campusAmbassadorStyles.cardText}>
                            The AXIS'25 Campus Ambassador program is designed for students who
                            wish to actively participate in and promote the AXIS'25 technical fest on
                            their college campuses. The Campus Ambassador program is an excellent
                            opportunity for students to actively engage with AXIS'25, gain valuable event
                            management and promotion experience, and contribute to the success of the
                            technical fest on their campus.
                        </p>
                    </div>

                    <div style={campusAmbassadorStyles.card}>
                        <h3 style={campusAmbassadorStyles.cardTitle}>AIM</h3>
                        <p style={campusAmbassadorStyles.cardText}>
                            Our College Ambassador Program seeks to ignite a passion for leadership,
                            innovation, and community-building among students. Through mentorship,
                            networking, and hands-on experiences, we aim to nurture tomorrow's change-
                            makers, providing a platform for them to amplify their voices, drive positive impact,
                            and create lasting connections. Join us in shaping the future, one ambassador at a
                            time.
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CampusAmbassador;