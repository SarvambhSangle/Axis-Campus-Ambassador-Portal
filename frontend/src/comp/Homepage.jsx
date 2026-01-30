import React from 'react';
import HeroSection from './HeroSection';
import ResponsibilitiesSection from './ResponsibilitiesSection';
import TeamSection from './TeamSection'; // Renamed from PeopleSection
import FAQsSection from './FAQsSection';
import TestimonialsSection from './TestimonialsSection'; // New component
import CampusAmbassador from './CampusAmbassador';
import ContactUsSection from './ContactUsSection'; // <--- NEW: Import ContactUsSection

const Homepage = () => {
    return (
        <div>
            {/* Campus Ambassador Section */}
            <CampusAmbassador />

            {/* The individual sections can be commented out or reordered as needed */}
            <HeroSection />
            <ResponsibilitiesSection />
            <TeamSection />
            <TestimonialsSection /> {/* New Testimonials Section */}
            <FAQsSection />
            
            {/* NEW: Contact Us Section, placed after FAQsSection */}
            <ContactUsSection /> 
            
            {/* Other sections like About, Contact Us, etc., can be added here or as separate routes */}
        </div>
    );
};

export default Homepage;