import React from 'react';

const Bio: React.FC = () => {
    console.log(process.env.PUBLIC_URL);
    return (
        <div>
            <h2>My Bio</h2>
            <img src={`images/profile_pic_2_medium.jpg`} alt="Profile pic" />
            <p>
                A new Full Stack Web Developer with a background in Technical Program Management and experience in scaling multi-language call routing systems at Amazon, I bring a wealth of technical expertise and a diverse skill set to the field of software development. Focused on contributing to innovative projects and promoting professional growth, my experiences encompass a an extensive tenure at Amazon, obtaining a Commercial Pilot license and IFR rating as part of my Bachaelor's degree, and a tenure in the US Air Force stationed in Europe.
            </p>
            <p>
                During my ten-year tenure at Amazon, I have taken on roles with increasing responsibilities, including Technical Program Manager for Amazon Care, where I collaborated closely with engineering, change program management, compliance, and operations teams. My technical training includes Full Stack development in MERN (MongoDB, Express, React, Node) and experience programming in JavaScript, HTML, CSS, Java, Python, C++, C, SQL, VBA, and TypeScript. My key areas of expertise encompass Web Development, Technical Program Management, and Systems Administration.
            </p>
        </div>
    );
};

export default Bio;