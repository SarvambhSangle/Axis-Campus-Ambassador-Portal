import React from 'react';

// Styles for Testimonials Section
const testimonialsStyles = {
    section: {
        padding: '4rem 2rem',
        textAlign: 'center',
        color: '#fff',
        zIndex: 2,
        position: 'relative',
    },
    title: {
        fontSize: '2.8rem',
        marginBottom: '0.5rem',
        color: '#fff',
        textShadow: '0 0 10px rgba(0, 188, 212, 0.7)',
    },
    subtitle: {
        fontSize: '1.1rem',
        color: '#cfd8dc',
        marginBottom: '3rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Allows cards to be responsive
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        justifyContent: 'center', // Center items if they don't fill the row
    },
    testimonialCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '15px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        textAlign: 'center',
    },
    quote: {
        fontSize: '1rem',
        fontStyle: 'italic',
        color: '#e0f7fa',
        marginBottom: '1.5rem',
        lineHeight: '1.6',
    },
    avatar: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '1rem',
        border: '3px solid #00bcd4',
        boxShadow: '0 0 8px rgba(0, 188, 212, 0.5)',
    },
    authorName: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        color: '#00bcd4',
        marginBottom: '0.25rem',
    },
    authorInfo: {
        fontSize: '0.9rem',
        color: '#cfd8dc',
    },
};

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "Participating in AXIS as a CA was an unforgettable experience. The networking opportunities were immense, and the team provided excellent guidance. Highly recommend!",
            author: "Priya Sharma",
            info: "IIT Bombay, 2024",
            avatar: "https://placehold.co/80x80/323232/cfd8dc?text=PS" // Placeholder for Priya Sharma
        },
        {
            quote: "The practical skills I gained in event promotion and coordination are invaluable. AXIS truly empowers students.",
            author: "Rahul Gupta",
            info: "VIT Vellore, 2024",
            avatar: "https://placehold.co/80x80/323232/cfd8dc?text=RG" // Placeholder for Rahul Gupta
        },
        {
            quote: "The personalized mentorship was a game-changer. It helped me understand real-world marketing challenges.",
            author: "Sneha Reddy",
            info: "BITS Pilani, 2024",
            avatar: "https://placehold.co/80x80/323232/cfd8dc?text=SR" // Placeholder for Sneha Reddy
        },
        {
            quote: "Meeting CAs from across the country broadened my perspective. AXIS is more than just a fest; it's a community.",
            author: "Amit Kumar",
            info: "NIT Warangal, 2024",
            avatar: "https://placehold.co/80x80/323232/cfd8dc?text=AK" // Placeholder for Amit Kumar
        },
        // --- NEW TESTIMONIALS ADDED BELOW FOR SYMMETRY ---
        {
            quote: "The events were meticulously planned, and the support from the AXIS team was exceptional. I learned so much about large-scale event management.",
            author: "Divya Singh",
            info: "Delhi University, 2025",
            avatar: "https://placehold.co/80x80/323232/cfd8dc?text=DS" // Placeholder for Divya Singh
        },
        {
            quote: "Being a Campus Ambassador significantly boosted my leadership and communication skills. It's an experience every student should consider!",
            author: "Kartik Mehta",
            info: "IIT Delhi, 2024",
            avatar: "https://placehold.co/80x80/323232/cfd8dc?text=KM" // Placeholder for Kartik Mehta
        },
    ];

    return (
        <section id="testimonials" style={testimonialsStyles.section}>
            <h2 style={testimonialsStyles.title}>What our Campus Ambassadors say</h2>
            <p style={testimonialsStyles.subtitle}>Hear from students who were part of the AXIS family last year.</p>
            <div style={testimonialsStyles.grid}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} style={testimonialsStyles.testimonialCard}>
                        <p style={testimonialsStyles.quote}>"{testimonial.quote}"</p>
                        <img
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            style={testimonialsStyles.avatar}
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/323232/cfd8dc?text=User" }} // Fallback image
                        />
                        <h3 style={testimonialsStyles.authorName}>{testimonial.author}</h3>
                        <p style={testimonialsStyles.authorInfo}>{testimonial.info}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;