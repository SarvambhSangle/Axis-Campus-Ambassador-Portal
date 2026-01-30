import React from 'react';

// Styles for Team Section
const teamStyles = {
    section: {
        padding: '4rem 0',
        textAlign: 'center',
        color: '#fff',
        zIndex: 2,
        position: 'relative',
        overflowX: 'hidden', // Ensures no horizontal scrollbar from the section itself
    },
    scrollContainer: {
        display: 'flex',
        overflowX: 'auto', // Allows horizontal scrolling
        padding: '1rem', // Padding inside the scrollable area
        gap: '2rem', // Space between cards
        justifyContent: 'flex-start', // Align cards to the start
        scrollSnapType: 'x mandatory', // For smooth snapping to cards
        WebkitOverflowScrolling: 'touch', // For smoother scrolling on iOS devices
        // Styles for the scrollbar (customize as needed)
        '::-webkit-scrollbar': {
            height: '8px',
        },
        '::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '10px',
        },
        '::-webkit-scrollbar-track': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
    },
    personCard: {
        flex: '0 0 auto', // Prevents cards from shrinking, ensures they take their defined width
        width: '180px', // Fixed width for each card
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '15px',
        padding: '1.5rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        scrollSnapAlign: 'start', // Ensures cards snap to the start when scrolling
    },
    personImage: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '1rem',
        border: '3px solid #00bcd4',
        boxShadow: '0 0 10px rgba(0, 188, 212, 0.5)',
    },
    personName: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        color: '#e0f7fa',
        textAlign: 'center',
        marginBottom: '0.5rem',
    },
    personTitle: {
        fontSize: '0.9rem',
        color: '#cfd8dc',
        textAlign: 'center',
    },
};

// Team Section component
const TeamSection = () => {
    const people = [
        { name: "Abhinav Singh", title: "IAS Officer", imageUrl: "https://static.gujaratsamachar.com/content_image/content_image_0206e094-1511-4e9e-9486-67811b14d9ad.jpeg" },
        { name: "Anthony Leggett", title: "Theoretical Physicist", imageUrl: "https://cdn.britannica.com/23/155723-050-6D0A240C/Anthony-J-Leggett.jpg" },
        { name: "Abdul Rane", title: "CEO & MD Brahma Aerospace", imageUrl: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202112/vv_1.jpg?size=690:388" },
        { name: "Dinesh Keskar", title: "Senior VP, Boeing", imageUrl: "https://mediaindia.eu/wp-content/uploads/2018/05/Dr_Dinesh_A_Keskar-1200x900.jpg" },
        { name: "H.C. Verma", title: "Indian Physicist", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmE0gx_wfRxPjezLq7ADibXIrIoRMl-a6pg&s" },
        { name: "John Mathen", title: "Astrophysical and Cosmologist", imageUrl: "https://www.pantai.com.my/images/default-source/doctor-image/k-john-mathen.jpg?sfvrsn=6292aea7_0" },
        { name: "Nitin Gadkari", title: "Cabinet Minister", imageUrl: "https://nitingadkari.org.in/wp-content/uploads/2022/11/Nitin_Sir_Picture.webp" },
        { name: "Sandeep Jain", title: "Founder & CEO, GFG", imageUrl: "https://pbs.twimg.com/profile_images/1383660243587002368/DJQEGX2o_400x400.jpg" },
        { name: "Smita Williams", title: "Researcher", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sunita_Williams_in_2018.jpg/1200px-Sunita_Williams_in_2018.jpg" },
        // --- NEW GUEST ENTRIES ADDED BELOW TO MAKE THE ROW FULLER ---
        { name: "Vijay Bhattar", title: "Architect of PARAM CyberComputer", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Vijay_Bhatkar_Portrait_Photo.jpg" },
        { name: "Vijendra Chauhan", title: "Interview Head , Drishti IAS", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrsT2hYyCP7VK4YP5aKJdJ-f8EF2I18tzdQ&s" },
        { name: "Tanu Jain", title: "Ex - civil servant", imageUrl: "https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-2023-07-12t134132.380.jpg" },
        { name: "Dr APJ Abdul Kalam", title: "Former President of India", imageUrl: "https://cdn.britannica.com/56/148856-004-2F59E2D9/APJ-2008.jpg" },
        { name: "AK Kiran Kumar", title: "Former Chairman of ISRO", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/Askiran.jpg" },
        { name: "Abhi and Nihu", title: "Youtube content creater", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvCRm9qa8z0_5Q2s87pmnwa3YT9lS8Il6uA&s" },
        { name: "Saakshar Duggal", title: "AI Law Expert", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRam1qWB5YbliNt1lY_Knjf-d84NinUAP2SZg&s" },
        { name: "Manas Patnaik", title: "Best Content Creator in Education", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDQy7g85RGqi_hOcB3faLnsoPJggoZ0oRT1Q&s" },
        { name: "Harsh Priyam", title: "Content Creator in Education", imageUrl: "https://pbs.twimg.com/profile_images/1353005208230477826/kBS-C4wP_400x400.jpg" },
    ];

    return (
        <section style={teamStyles.section}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '3rem', color: '#fff', textShadow: '0 0 10px rgba(0, 188, 212, 0.7)' }}>Our Esteemed Guests / Team</h2>
            <div style={teamStyles.scrollContainer}>
                {people.map((person, index) => (
                    <div key={index} style={teamStyles.personCard}>
                        <img
                            src={person.imageUrl}
                            alt={person.name}
                            style={teamStyles.personImage}
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/323232/cfd8dc?text=User" }}
                        />
                        <p style={teamStyles.personName}>{person.name}</p>
                        <p style={teamStyles.personTitle}>{person.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;