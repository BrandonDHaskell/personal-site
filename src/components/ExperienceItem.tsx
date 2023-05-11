import React from 'react';

interface ExperienceItemProps {
    jobTitle: string;
    startStop: string;
    description: string[];
}


const ExperienceItem: React.FC<ExperienceItemProps> = ({ jobTitle, startStop, description }) => {
    return (
        <div className="experience-item">
            <div className="timeline-card">
                <div className="job-info">
                    <div className="job-title">{jobTitle}</div>
                    <div className="start-stop">{startStop}</div>
                </div>
                <div className="job-desc pb-6">
                    {description.map((desc, index) => (
                        <p key={index} className="job-desc">{desc}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExperienceItem;