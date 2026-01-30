import React from 'react';

// Styles for Contact Us Section
const contactStyles = {
    section: {
        padding: '4rem 2rem',
        textAlign: 'center',
        color: '#fff',
        zIndex: 2,
        position: 'relative',
    },
    title: {
        fontSize: '2.8rem',
        marginBottom: '1rem',
        color: '#fff',
        textShadow: '0 0 10px rgba(0, 188, 212, 0.7)',
    },
    subtitle: {
        fontSize: '1.5rem',
        color: '#e0f7fa',
        marginBottom: '0.5rem',
    },
    chatPrompt: {
        fontSize: '1.1rem',
        color: '#cfd8dc',
        marginBottom: '3rem',
    },
    contactCardsContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
        maxWidth: '900px',
        margin: '0 auto',
    },
    contactCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '15px',
        padding: '2rem',
        textAlign: 'center',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        width: 'calc(50% - 2rem)',
        minWidth: '280px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    // contactCardHover will be handled by Tailwind's hover classes
    contactIcon: {
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
    contactName: {
        fontSize: '1.5rem',
        margin: '1rem 0',
        color: '#e0f7fa',
    },
    contactDetail: {
        fontSize: '1rem',
        color: '#cfd8dc',
        margin: '0.5rem 0',
    },
    // NEW STYLE: For clickable email links
    contactEmailLink: {
        fontSize: '1rem',
        color: '#00bcd4', // A clickable link color
        textDecoration: 'underline', // Underline to indicate it's a link
        margin: '0.5rem 0',
        display: 'block', // Ensure it takes up its own line like the p tag did
        cursor: 'pointer', // Indicate it's clickable
        transition: 'color 0.3s ease',
        '&:hover': {
            color: '#4dd0e1', // Lighter shade on hover
        }
    },
};

// Contact Us Section component
const ContactUsSection = () => {
    return (
        <section id="contact-us" style={contactStyles.section}>
            <h2 style={contactStyles.title}>Contact Us</h2>
            <p style={contactStyles.subtitle}>We'd love to hear from you</p>
            <p style={contactStyles.chatPrompt}>Chat to our friendly team.</p>
            <div style={contactStyles.contactCardsContainer}>
                <div style={contactStyles.contactCard}>
                    <div style={contactStyles.contactIcon}>✉️</div>
                    <h3 style={contactStyles.contactName}>Aditya Shahale</h3>
                    <p style={contactStyles.contactDetail}>+91 8956190786</p>
                    {/* MODIFIED: Wrapped email in <a> tag with mailto: */}
                    <a href="mailto:aditya.shahale@axisvnit.in" style={contactStyles.contactEmailLink}>
                        aditya.shahale@axisvnit.in
                    </a>
                </div>
                <div style={contactStyles.contactCard}>
                    <div style={contactStyles.contactIcon}>✉️</div>
                    <h3 style={contactStyles.contactName}>Ali Shadan</h3>
                    <p style={contactStyles.contactDetail}>+91 9408028792</p>
                    {/* MODIFIED: Wrapped email in <a> tag with mailto: */}
                    <a href="mailto:ali.shadan@axisvnit.in" style={contactStyles.contactEmailLink}>
                        ali.shadan@axisvnit.in
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;