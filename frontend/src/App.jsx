import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import components from the 'comp' folder (public-facing sections)
import Navbar from './comp/Navbar';
import Homepage from './comp/Homepage';
import HeroSection from './comp/HeroSection';
import ResponsibilitiesSection from './comp/ResponsibilitiesSection';
import TeamSection from './comp/TeamSection';
import FAQsSection from './comp/FAQsSection';
import TestimonialsSection from './comp/TestimonialsSection';
import ContactUsSection from './comp/ContactUsSection';
import CampusAmbassador from './comp/CampusAmbassador';
import Footer from './comp/Footer';

// Import components from the 'comp2' folder (user-specific/dynamic sections)
import Leaderboard from './comp2/Leaderboard';
import FortniteLeaderboard from './comp2/FortniteLeaderboard';
import Profile from './comp2/Profile';
import EditProfile from './comp2/EditProfile';


// Main App component
const App = () => {
    // Array of image URLs for the background
    const backgroundImages = [
        "https://vnit.ac.in/pcems2023/wp-content/uploads/2023/01/Main_Bldg_Final_1.jpg",
        "https://i0.wp.com/institutementor.com/wp-content/uploads/2022/11/IMG_5956-1024x768.jpg?resize=1024%2C768&ssl=1",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPuag56rjeqM1itTpJI77xpXdBP5SSSYFqA&s",
        "https://www.researchgate.net/profile/Utkarsh-Bhautmage/publication/276297736/figure/fig1/AS:294509188534277@1447227870770/Plan-of-the-VNIT-Nagpur-Campus_Q320.jpg"
    ];

    // State to manage the current background image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // useEffect hook to handle background image rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % backgroundImages.length
            );
        }, 5000); // Change image every 5 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    // **UPDATED STYLE: Style for the main container that holds everything**
    const appContainerStyle = {
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // This ensures the background image itself is fixed and covers the whole viewport
        transition: 'background-image 1s ease-in-out',
        minHeight: '100vh', // Ensure it covers at least the full viewport height
        width: '100vw', // Ensure it covers the full viewport width
        overflowX: 'hidden', // Prevent horizontal scroll
        display: 'flex', // Make it a flex container
        flexDirection: 'column', // To stack children (overlay) vertically
        position: 'relative', // Keep this for z-indexing or future positioned children if needed
        zIndex: 0, // Base z-index
    };

    // **UPDATED STYLE: Styling for the overlay that covers the entire content area**
    const overlayStyle = {
        // Removed position: 'absolute', top, left, width, height: '100%'.
        // It will now naturally flow as a child of appContainerStyle and expand with content.
        minHeight: '100vh', // Ensures it covers at least the full viewport if content is short
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // The semi-transparent black layer
        zIndex: 1, // To ensure it's above the fixed background image
        display: 'flex', // Make it a flex container for its own children (Navbar, main, Footer)
        flexDirection: 'column', // Stack children vertically
        flexGrow: 1, // Allow it to grow and fill available space within its parent
    };

    return (
        <Router>
            {/* Apply the background and overall structure to this outer div */}
            <div style={appContainerStyle}>
                {/* Apply the semi-transparent overlay to this div, which now contains all UI elements */}
                <div style={overlayStyle}>
                    <Navbar />
                    {/* Main content area based on routes */}
                    <main style={{ flexGrow: 1 }}> {/* This ensures main content pushes the footer down */}
                        <Routes>
                            {/* Routes for 'comp' folder components */}
                            <Route path="/" element={<Homepage />} />
                            <Route path="/campus-ambassador" element={<CampusAmbassador />} />
                            <Route path="/whats-in-it" element={<HeroSection />} />
                            <Route path="/responsibilities" element={<ResponsibilitiesSection />} />
                            <Route path="/team" element={<TeamSection />} />
                            <Route path="/faqs" element={<FAQsSection />} />
                            <Route path="/testimonials" element={<TestimonialsSection />} />
                            <Route path="/contact-us" element={<ContactUsSection />} />

                            {/* Routes for 'comp2' folder components (user-specific/dynamic) */}
                            <Route path="/leaderboard" element={<Leaderboard />} />
                            <Route path="/fortnite-leaderboard" element={<FortniteLeaderboard />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/profile/edit" element={<EditProfile />} />

                            {/* Catch-all route for 404 Not Found pages */}
                            <Route path="*" element={
                                <div style={{ padding: '4rem', textAlign: 'center', color: '#fff', fontSize: '2rem', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <h2>404 - Page Not Found</h2>
                                    <p>The page you are looking for does not exist.</p>
                                    <Link to="/" style={{ color: '#00bcd4', textDecoration: 'underline', marginTop: '1rem' }}>Go to Homepage</Link>
                                </div>
                            } />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </div>
        </Router>
    );
};

export default App;