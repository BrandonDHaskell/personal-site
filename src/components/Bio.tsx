import React from 'react';
import ExperienceList from './ExperienceList';

const Bio: React.FC = () => {
    return (
        <section>
            <h2 className="mb-8 mt-8 text-4xl font-bold md:text-5xl lg:text-6xl dark:text-sky-500">About</h2>
            <div className="flex items-center justify-center">
                <div className="relative rounded-full overflow-hidden border-8 border-sky-600 mx-8">
                    <img src={`personal-site/images/profile_pic_2_medium.jpg`} alt="Profile pic" />
                </div>
            </div>
            <div>
                <p className="text-left text-sky-500 px-10 py-3">
                    As a Full Stack Web Developer with a strong background in Technical Program Management, I am excited to contribute my diverse skill set to the world of software development. My journey includes an extensive tenure at Amazon, obtaining a Commercial Pilot license and IFR rating as part of my Bachelor's degree, and a memorable time in the US Air Force stationed in Europe. I am driven by innovation and strive for continuous professional growth.
                </p>
                <p className="text-left text-sky-500 px-10 py-3">
                    During my ten years at Amazon, I embraced roles with increasing responsibility such as Data Analyst, Systems Administrator, and as a Technical Program Manager for Amazon Care. In these positions, I closely collaborated with engineering, change program management, compliance, and operations teams. My technical training includes Full Stack development using the MERN stack (MongoDB, Express, React, Node) and programming experience in JavaScript, HTML, CSS, Java, Python, C++, C, SQL, VBA, and TypeScript. I specialize in Web Development, Technical Program Management, and Systems Administration.
                </p>
            </div>
            <h2 className="mb-8 mt-8 text-4xl font-bold md:text-5xl lg:text-6xl dark:text-sky-500">Experience</h2>
            <ExperienceList />
        </section>
    );
};

export default Bio;