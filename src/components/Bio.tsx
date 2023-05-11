import React from 'react';

const Bio: React.FC = () => {
    return (
        <section>
            <h2 className="mb-8 mt-8 text-4xl font-bold md:text-5xl lg:text-6xl dark:text-sky-500">About</h2>
            <div className="flex items-center justify-center">
                <div className="relative rounded-full overflow-hidden border-8 border-sky-600 mx-8">
                    <img src={`images/profile_pic_2_medium.jpg`} alt="Profile pic" />
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
            <div className="timeline-card">
                <div className="job-info flex items-center justify-left px-10">
                    <div className=" text-lg mb-2 font-bold md:text-lg lg:text-xl dark:text-sky-500 pr-4">Technical Program Manager - Amazon Care</div>
                    <div className="start-stop mb-2 text-lg md:text-lg lg:text-xl italic dark:text-sky-500">Jul 2020 - May 2021</div>
                </div>
                <div className="job-desc">
                    <p className="text-left text-sky-500 px-10">In this role I owned product security workstreams for Amazon's brand new telehealth service Amazon Care, ahead of its public launch in May 2021. As a TPM, my role was to bring together engineering, product, operations, legal, and compliance teams to accelerate integration of 3rd party services {'('}e.g., medical staffing, records companies{')'} to ensure data security including HIPAA compliance on the Amazon Care platform.</p>
                </div>
            </div>

        </section>
    );
};

export default Bio;