import React from 'react';

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

const FortniteLeaderboard = () => {
    // Placeholder data - in a real app, this would be fetched from an API
    const leaderboardData = [
        { rank: 1, name: "PlayerOne", score: 12500, kills: 120 },
        { rank: 2, name: "NinjaPro", score: 11800, kills: 110 },
        { rank: 3, name: "GamingGuru", score: 10200, kills: 95 },
        { rank: 4, name: "EpicGamer", score: 9800, kills: 88 },
        { rank: 5, name: "VictoryRoyale", score: 9100, kills: 80 },
    ];

    return (
        <section style={leaderboardStyles.section}>
            <h1 style={leaderboardStyles.title}>Fortnite Leaderboard</h1>
            {leaderboardData.length > 0 ? (
                <div style={leaderboardStyles.tableContainer}>
                    <table style={leaderboardStyles.table}>
                        <thead>
                            <tr>
                                <th style={leaderboardStyles.th}>Rank</th>
                                <th style={leaderboardStyles.th}>Player Name</th>
                                <th style={leaderboardStyles.th}>Score</th>
                                <th style={leaderboardStyles.th}>Kills</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboardData.map((player, index) => (
                                <tr key={index}>
                                    <td style={{ ...leaderboardStyles.td, ...leaderboardStyles.rankCell }}>{player.rank}</td>
                                    <td style={leaderboardStyles.td}>{player.name}</td>
                                    <td style={leaderboardStyles.td}>{player.score}</td>
                                    <td style={leaderboardStyles.td}>{player.kills}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p style={leaderboardStyles.noData}>No Fortnite leaderboard data available yet.</p>
            )}
        </section>
    );
};

export default FortniteLeaderboard;