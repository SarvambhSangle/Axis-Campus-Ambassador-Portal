import React from 'react';

// Reusing general leaderboard styles for consistency
const leaderboardStyles = {
    section: {
        padding: '4rem 2rem',
        textAlign: 'center',
        color: '#fff',
        zIndex: 2,
        position: 'relative',
        minHeight: '70vh',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '15px',
        margin: '2rem auto',
        maxWidth: '1000px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: '2.8rem',
        marginBottom: '2rem',
        color: '#fff',
        textShadow: '0 0 10px rgba(0, 188, 212, 0.7)',
    },
    tableContainer: {
        width: '90%',
        overflowX: 'auto',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        margin: '2rem 0',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '10px',
        overflow: 'hidden',
    },
    th: {
        backgroundColor: 'rgba(0, 188, 212, 0.2)',
        padding: '1rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        textAlign: 'left',
        fontSize: '1.1rem',
        color: '#e0f7fa',
    },
    td: {
        padding: '1rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'left',
        color: '#cfd8dc',
    },
    rankCell: {
        fontWeight: 'bold',
        color: '#00bcd4',
    },
    noData: {
        fontSize: '1.2rem',
        color: '#cfd8dc',
        marginTop: '3rem',
    }
};

const Leaderboard = () => {
    // Placeholder data for a general leaderboard
    const generalLeaderboardData = [
        { rank: 1, name: "Alice Johnson", points: 5000, college: "IIT Delhi" },
        { rank: 2, name: "Bob Williams", points: 4800, college: "VNIT Nagpur" },
        { rank: 3, name: "Charlie Brown", points: 4500, college: "BITS Pilani" },
        { rank: 4, name: "Diana Prince", points: 4200, college: "VIT Vellore" },
        { rank: 5, name: "Eve Davis", points: 4000, college: "IIT Madras" },
    ];

    return (
        <section style={leaderboardStyles.section}>
            <h1 style={leaderboardStyles.title}>Overall Event Leaderboard</h1>
            {generalLeaderboardData.length > 0 ? (
                <div style={leaderboardStyles.tableContainer}>
                    <table style={leaderboardStyles.table}>
                        <thead>
                            <tr>
                                <th style={leaderboardStyles.th}>Rank</th>
                                <th style={leaderboardStyles.th}>Participant Name</th>
                                <th style={leaderboardStyles.th}>Points</th>
                                <th style={leaderboardStyles.th}>College</th>
                            </tr>
                        </thead>
                        <tbody>
                            {generalLeaderboardData.map((participant, index) => (
                                <tr key={index}>
                                    <td style={{ ...leaderboardStyles.td, ...leaderboardStyles.rankCell }}>{participant.rank}</td>
                                    <td style={leaderboardStyles.td}>{participant.name}</td>
                                    <td style={leaderboardStyles.td}>{participant.points}</td>
                                    <td style={leaderboardStyles.td}>{participant.college}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p style={leaderboardStyles.noData}>No general leaderboard data available yet.</p>
            )}
        </section>
    );
};

export default Leaderboard;