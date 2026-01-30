import React, { useState, useEffect } from 'react';

const Profile = () => {
    // Vite uses 'import.meta.env' and usually requires variables to start with 'VITE_'
const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL || "http://localhost:5000";

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [signupData, setSignupData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        college: '',
        yearOfStudy: '',
        branch: ''
    });

    // Check if user is logged in on page load
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            // Simple check - in real app you'd verify the token
            setIsAuthenticated(true);
            // Mock user data - in real app you'd fetch from API
            setUser({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                phoneNumber: '+91 9876543210',
                college: 'Tech University',
                yearOfStudy: '3',
                branch: 'Computer Science',
                registeredEvents: ['Quiz Mania', 'Code-a-thon 2025'],
                achievements: ['Top CA Q1 2025', 'Event Coordinator - Robotics']
            });
        }
    }, []);

    const handleLogin = async () => {
        setError('');

        // Basic validation
        if (!loginData.email || !loginData.password) {
            setError('Please fill all fields');
            return;
        }

        try {
            const response = await fetch(`${BACKEND_BASE_URL}/api/auth/v1/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData),
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem('authToken', data.token);
                setIsAuthenticated(true);
                setUser(data.user || {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: loginData.email,
                    phoneNumber: '+91 9876543210',
                    college: 'Tech University',
                    yearOfStudy: '3',
                    branch: 'Computer Science',
                    registeredEvents: [],
                    achievements: []
                });
            } else {
                setError(data.responseMessage || 'Login failed');
            }
        } catch (err) {
            setError('Network error');
        }
    };

    const handleSignup = async () => {
        setError('');

        // Basic validation
        if (!signupData.firstName || !signupData.lastName || !signupData.email || !signupData.password) {
            setError('Please fill all required fields');
            return;
        }

        try {
            const response = await fetch(`${BACKEND_BASE_URL}/api/auth/v1/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(signupData),
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem('authToken', data.token);
                setIsAuthenticated(true);
                setUser(signupData);
            } else {
                setError(data.responseMessage || 'Signup failed');
            }
        } catch (err) {
            setError('Network error');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        setUser(null);
    };

    // Styles (same as original)
    const styles = {
        section: {
            padding: '4rem 2rem',
            textAlign: 'center',
            color: '#fff',
            position: 'relative',
            minHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '15px',
            margin: '2rem auto',
            maxWidth: '800px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        },
        title: {
            fontSize: '2.8rem',
            marginBottom: '2rem',
            color: '#fff',
            textShadow: '0 0 10px rgba(0, 188, 212, 0.7)',
        },
        card: {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '15px',
            padding: '2.5rem',
            maxWidth: '500px',
            width: '100%',
            boxSizing: 'border-box',
        },
        input: {
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: '#fff',
            fontSize: '1rem',
            outline: 'none',
            margin: '0.5rem 0',
            width: '100%',
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
            margin: '1rem 0.5rem',
        },
        error: {
            color: '#ff5722',
            backgroundColor: 'rgba(255, 87, 34, 0.1)',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '1rem',
        },
        profileImage: {
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            marginBottom: '1.5rem',
            border: '4px solid #00bcd4',
        },
        name: {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#e0f7fa',
            marginBottom: '0.8rem',
        },
        detail: {
            fontSize: '1.1rem',
            color: '#cfd8dc',
            marginBottom: '0.6rem',
        },
    };

    // Show profile if authenticated
    if (isAuthenticated && user) {
        return (
            <section style={styles.section}>
                <h1 style={styles.title}>My Profile</h1>
                <div style={styles.card}>
                    <img
                        src="https://placehold.co/120x120/323232/cfd8dc?text=User"
                        alt={user.firstName}
                        style={styles.profileImage}
                    />
                    <h2 style={styles.name}>{user.firstName} {user.lastName}</h2>
                    <p style={styles.detail}>Email: {user.email}</p>
                    <p style={styles.detail}>College: {user.college}</p>
                    <p style={styles.detail}>Phone: {user.phoneNumber}</p>
                    <p style={styles.detail}>Year: {user.yearOfStudy}</p>
                    <p style={styles.detail}>Branch: {user.branch}</p>

                    <button onClick={handleLogout} style={styles.button}>
                        Logout
                    </button>
                </div>

                <h3 style={{ color: '#fff', marginTop: '2rem' }}>Registered Events</h3>
                <div style={styles.card}>
                    {user.registeredEvents?.length > 0 ? (
                        user.registeredEvents.map((event, index) => (
                            <p key={index} style={styles.detail}>{event}</p>
                        ))
                    ) : (
                        <p style={styles.detail}>No registered events.</p>
                    )}
                </div>

                <h3 style={{ color: '#fff', marginTop: '2rem' }}>Achievements</h3>
                <div style={styles.card}>
                    {user.achievements?.length > 0 ? (
                        user.achievements.map((achievement, index) => (
                            <p key={index} style={styles.detail}>{achievement}</p>
                        ))
                    ) : (
                        <p style={styles.detail}>No achievements yet.</p>
                    )}
                </div>
            </section>
        );
    }

    // Show login/signup forms
    return (
        <section style={styles.section}>
            <h1 style={styles.title}>{showLogin ? 'Login' : 'Sign Up'}</h1>
            <div style={styles.card}>
                {error && <div style={styles.error}>{error}</div>}

                {showLogin ? (
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={loginData.email}
                            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                            style={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={loginData.password}
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                            style={styles.input}
                        />
                        <button onClick={handleLogin} style={styles.button}>
                            Login
                        </button>
                        <button onClick={() => setShowLogin(false)} style={styles.button}>
                            Sign Up Instead
                        </button>
                    </div>
                ) : (
                    <div>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={signupData.firstName}
                            onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
                            style={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={signupData.lastName}
                            onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })}
                            style={styles.input}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={signupData.email}
                            onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                            style={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={signupData.password}
                            onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                            style={styles.input}
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={signupData.phoneNumber}
                            onChange={(e) => setSignupData({ ...signupData, phoneNumber: e.target.value })}
                            style={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="College"
                            value={signupData.college}
                            onChange={(e) => setSignupData({ ...signupData, college: e.target.value })}
                            style={styles.input}
                        />
                        <select
                            value={signupData.yearOfStudy}
                            onChange={(e) => setSignupData({ ...signupData, yearOfStudy: e.target.value })}
                            style={styles.input}
                        >
                            <option value="">Select Year</option>
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="3">3rd Year</option>
                            <option value="4">4th Year</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Branch"
                            value={signupData.branch}
                            onChange={(e) => setSignupData({ ...signupData, branch: e.target.value })}
                            style={styles.input}
                        />
                        <button onClick={handleSignup} style={styles.button}>
                            Sign Up
                        </button>
                        <button onClick={() => setShowLogin(true)} style={styles.button}>
                            Login Instead
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Profile;