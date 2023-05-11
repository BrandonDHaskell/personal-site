import React from 'react';
import ExperienceItem from '../components/ExperienceItem';

interface Experience {
    jobTitle: string;
    startStop: string;
    description: string[];
}

const experiences: Experience[] = [
    {
        jobTitle: 'Technical Program Manager - Amazon Care',
        startStop: 'Jul 2020 - May 2021',
        description: [
            "In this role I owned product security workstreams for Amazon's brand new telehealth service Amazon Care, ahead of its public launch in May 2021. As a TPM, my role was to bring together engineering, product, operations, legal, and compliance teams to accelerate integration of 3rd party services (e.g., medical staffing, records companies) to ensure data security including HIPAA compliance on the Amazon Care platform."
        ]
    },
    {
        jobTitle: 'System Adminstrator - Amazon',
        startStop: 'Jul 2016 - Jul 2020',
        description: [
            "In this role I drove Amazon.com expansions into new geographies, scaling of Amazon's multi-language and multi-country call routing across the globe. The effort allowed Amazon's sellers to list products across geographies under a single account and get support anywhere in the world. As part of this effort, Amazon seller support agents could now support sellers across the globe (versus only their home country), driving significant efficiency improvements.",
            "Over the course of four years, I deployed 82% of the new call routing system for Amazon Global Selling, starting with 12 existing locations in North America, Europe, and Eastern Asia; and expanding integrations into new marketplace/country launches in South America, Western Asia, Australia, and the Middle East.",
            "My scope included scaling, administering and troubleshooting systems used to automatically route contacts (voice, email, and chat) to Amazon call center associates across the globe, and also working with developer teams to drive automation of those systems. Day to day, I worked with Product and Program managers, Change Program Management (CPM), Software Development Engineers (SDEs), training teams, and data teams in deployments and user acceptance testing."
        ]
    },
    {
        jobTitle: 'Data Analyst - Amazon',
        startStop: 'Oct 2014 - Jul 2016',
        description: [
            "In this role I partnered with call center workforce teams to source and analyze data for real-time, daily, and weekly call center metrics. Among noteworthy deliverables was (1) aligning capacity and workload reporting across multiple call centers supporting all US incoming seller calls, (2) streamlining and validating source data on capacity and call volumes, delivering requirements to data engineering teams, and overseeing production of new reports."
        ]
    },
    {
        jobTitle: 'Workforce Analyst - Amazon',
        startStop: 'Sep 2012 - Oct 2014',
        description: [
            "Started as a scheduler while piloting a new program for the site to incorporate variable part-time employment schedules, and progressed into forecasting capacity needs for the Grand Forks site. Coordinated scheduling and capacity needs with a sister site in Costa Rica while also integrating schedules and contact data into a 3rd party Workforce Management (WFM) software suite. I became the subject matter expert (SME) for sourcing and integrating enterprise data with the WFM software. Drove updates and changes to source data for more refined data integration practices and more detailed reporting."
        ]
    },
    {
        jobTitle: 'Seller Support Lead - Amazon',
        startStop: 'May 2012 - Sep 2012',
        description: [
            "I lead and supported a team of 10 contact center associates who supported the Amazon Selling platform, and lead the center in the most associate requests answered. I also developed reporting around associate requests that allowed insights into overall Seller Support Lead performance across the site."
        ]
    },
    {
        jobTitle: 'Seller Support Associate - Amazon',
        startStop: 'Aug 2010 - May 2012',
        description: [
            "In the US based contact center for Amazon Sellers, I closely supported sellers using the Amazon platform. As my knowledge and support skills accrued, I progressed from supporting general sellers to exclusive support for top grossing sellers 10MM+.",
            "During my time as an associate I also automated several reports reducing turnaround time from 4+ hours to less than 30 minutes, and provided face-to-face support to Amazon sellers who attended the Seller's Conference (formerly the Seller's Conference for Online Entrepreneurs (SCOE))."
        ]
    },
    {
        jobTitle: 'Aircrew Egress Systems - United States Air Force',
        startStop: 'Aug 2001 - Jul 2004',
        description: [
            "In this role, I maintained and replaced explosives and equipment used in ejection systems for US fighter aircraft, and recorded maintenance actions taken as well as tracking of explosives throughout maintenance actions. I also tracked and recorded scheduled tool calibrations, disposal of broken tools, and changes/updates to maintenance manuals."
        ]
    },
];

const ExperienceList: React.FC = () => {
    return (
        <div>
            {experiences.map((experience, index) => (
                <ExperienceItem key={index} {...experience} />
            ))}
        </div>
    );
}

export default ExperienceList;