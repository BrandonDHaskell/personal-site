import React from 'react';

const Bio: React.FC = () => {
    console.log(process.env.PUBLIC_URL);
    return (
        <div>
            <h2>My Bio</h2>
            <img src={`images/profile_pic_2_medium.jpg`} alt="Profile pic" />
        </div>
    );
};

export default Bio;