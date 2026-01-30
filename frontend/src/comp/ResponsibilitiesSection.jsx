import React from 'react';
import Card from './Card'; // Import the Card component

// Styles for Responsibilities Section
const responsibilitiesStyles = {
    section: {
        padding: '4rem 2rem',
        textAlign: 'center',
        color: '#fff',
        zIndex: 2,
        position: 'relative',
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

// Responsibilities Section component
const ResponsibilitiesSection = () => {
    return (
        <section id="responsibilities" style={responsibilitiesStyles.section}>
            <h2 style={responsibilitiesStyles.title}>Responsibilities of CA</h2>
            <div style={responsibilitiesStyles.cardsContainer}>
                <Card
                    icon="📢"
                    title="Promotion"
                    description="As a campus ambassador, your primary duty is to ignite excitement for AXIS events."
                />
                <Card
                    icon="🧑‍🤝‍🧑"
                    title="Recruitment"
                    description="Your role involves motivating fellow students to actively participate and register for AXIS."
                />
                <Card
                    icon="🗓️"
                    title="Event Coordination"
                    description="To ensure the fest runs seamlessly, you will play a crucial role in coordinating on-ground activities."
                />
                <Card
                    icon="✍️"
                    title="Content Creation"
                    description="Crafting engaging content is fundamental to building anticipation and spreading awareness."
                />
                <Card
                    icon="📦"
                    title="Logistics and Support"
                    description="In addition to your promotional and recruitment efforts, you will also provide logistical support."
                />
                <Card
                    icon="✅"
                    title="Task Completion and Incentives"
                    description="When you successfully complete your assigned tasks within the specified deadlines, you will earn incentives."
                />
            </div>
        </section>
    );
};

export default ResponsibilitiesSection;