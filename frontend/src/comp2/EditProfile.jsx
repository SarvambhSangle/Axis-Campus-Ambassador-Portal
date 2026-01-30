import React from 'react';

const editProfileStyles = {
    section: {
        padding: '4rem 2rem',
        textAlign: 'center',
        color: '#fff',
        zIndex: 2,
        position: 'relative',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Slightly darker for distinction
        borderRadius: '15px',
        margin: '2rem auto',
        maxWidth: '900px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    },
    title: {
        fontSize: '2.8rem',
        marginBottom: '2rem',
        color: '#fff',
        textShadow: '0 0 10px rgba(0, 188, 212, 0.7)',
    },
    formContainer: {
        width: '100%',
        maxWidth: '500px',
        padding: '2rem',
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    },
    formGroup: {
        marginBottom: '1.5rem',
        textAlign: 'left',
    },
    label: {
        display: 'block',
        marginBottom: '0.5rem',
        fontSize: '1rem',
        color: '#e0f7fa',
    },
    input: {
        width: 'calc(100% - 20px)',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #00bcd4',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: '#fff',
        fontSize: '1rem',
        outline: 'none',
        boxSizing: 'border-box',
    },
    button: {
        padding: '12px 25px',
        backgroundColor: '#00bcd4',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '1.1rem',
        marginTop: '1.5rem',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
    // buttonHover will be handled by Tailwind
};

const EditProfile = () => {
    return (
        <section style={editProfileStyles.section}>
            <h1 style={editProfileStyles.title}>Edit Your Profile</h1>
            <div style={editProfileStyles.formContainer}>
                <form>
                    <div style={editProfileStyles.formGroup}>
                        <label htmlFor="name" style={editProfileStyles.label}>Full Name</label>
                        <input type="text" id="name" style={editProfileStyles.input} placeholder="John Doe" />
                    </div>
                    <div style={editProfileStyles.formGroup}>
                        <label htmlFor="email" style={editProfileStyles.label}>Email</label>
                        <input type="email" id="email" style={editProfileStyles.input} placeholder="john.doe@example.com" />
                    </div>
                    <div style={editProfileStyles.formGroup}>
                        <label htmlFor="college" style={editProfileStyles.label}>College</label>
                        <input type="text" id="college" style={editProfileStyles.input} placeholder="Your College Name" />
                    </div>
                    <div style={editProfileStyles.formGroup}>
                        <label htmlFor="phone" style={editProfileStyles.label}>Phone Number</label>
                        <input type="tel" id="phone" style={editProfileStyles.input} placeholder="+91 XXXXXXXXXX" />
                    </div>
                    <button type="submit" style={editProfileStyles.button}>Save Changes</button>
                </form>
            </div>
        </section>
    );
};

export default EditProfile;