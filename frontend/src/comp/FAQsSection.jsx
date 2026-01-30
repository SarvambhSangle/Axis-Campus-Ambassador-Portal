import React, { useState } from 'react';

// Styles for FAQs Section
const faqsStyles = {
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
        fontSize: '1.1rem',
        color: '#cfd8dc',
        marginBottom: '3rem',
    },
    faqContainer: {
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '15px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        overflow: 'hidden',
    },
    faqItem: {
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    faqQuestion: {
        width: '100%',
        background: 'none',
        border: 'none',
        color: '#e0f7fa',
        fontSize: '1.2rem',
        padding: '1.5rem',
        textAlign: 'left',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'background-color 0.3s ease',
    },
    // faqQuestionHover will be handled by Tailwind's hover classes
    arrow: {
        fontSize: '1rem',
        marginLeft: '1rem',
    },
    faqAnswer: {
        padding: '1rem 1.5rem 1.5rem',
        fontSize: '1rem',
        color: '#cfd8dc',
        textAlign: 'left',
        lineHeight: '1.6',
    },
};

// FAQs Section component
const FAQsSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What skills can be gained through this program?",
            answer: "This program helps you develop leadership, communication, event management, and marketing skills.",
        },
        {
            question: "Will all the participants receive a certificate?",
            answer: "Yes, all participants who successfully complete the program will receive a certificate from AXIS, VNIT Nagpur.",
        },
        {
            question: "How long can candidates apply after we start the application process?",
            answer: "The application window is typically open for two to three weeks from the start date, but please refer to the official notification for exact deadlines.",
        },
        {
            question: "What incentives will I get from the program?",
            answer: "Incentives include certificates, exclusive AXIS merchandise, access to workshops, and exciting prizes for top performers.",
        },
        {
            question: "How many students can apply from a single college?",
            answer: "There is no strict limit on the number of students who can apply from a single college. However, selection is based on individual merit and program requirements.",
        },
        {
            question: "How many CAs are you planning to onboard this year?",
            answer: "We aim to onboard approximately 500+ campus ambassadors this year to represent colleges across India.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" style={faqsStyles.section}>
            <h2 style={faqsStyles.title}>Frequently Asked Questions</h2>
            <p style={faqsStyles.subtitle}>
                Answered all frequently asked questions? Still confused? Feel free to contact us.
            </p>
            <div style={faqsStyles.faqContainer}>
                {faqs.map((faq, index) => (
                    <div key={index} style={faqsStyles.faqItem}>
                        <button
                            style={faqsStyles.faqQuestion}
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span style={faqsStyles.arrow}>{openIndex === index ? '▲' : '▼'}</span>
                        </button>
                        {openIndex === index && (
                            <p style={faqsStyles.faqAnswer}>{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQsSection;