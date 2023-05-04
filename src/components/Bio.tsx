import React from 'react';

const Bio: React.FC = () => {
    return (
        <div>
            <h2>My Bio</h2>
            <img src={`images/profile_pic_2_medium.jpg`} alt="Profile pic" />
            <p>
                As a Full Stack Web Developer with a strong background in Technical Program Management, I am excited to contribute my diverse skill set to the world of software development. My journey includes an extensive tenure at Amazon, obtaining a Commercial Pilot license and IFR rating as part of my Bachelor's degree, and a memorable time in the US Air Force stationed in Europe. I am driven by innovation and strive for continuous professional growth.
            </p>
            <p>
                During my ten years at Amazon, I embraced roles with increasing responsibility such as Data Analyst, Systems Administrator, and as a Technical Program Manager for Amazon Care. In these positions, I closely collaborated with engineering, change program management, compliance, and operations teams. My technical training includes Full Stack development using the MERN stack (MongoDB, Express, React, Node) and programming experience in JavaScript, HTML, CSS, Java, Python, C++, C, SQL, VBA, and TypeScript. I specialize in Web Development, Technical Program Management, and Systems Administration.
            </p>
        </div>
    );
};

export default Bio;