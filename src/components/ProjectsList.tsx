import React from 'react';
import ProjectItem from '../components/ProjectItem';

interface Project {
    name: string;
    summary: string;
    imgUrl: string;
    liveSiteUrl: string;
    sourceCodeUrl: string;
    techList: string[];
}

const projects: Project[] = [
    {
        name: "Password Generator",
        summary: "Generate a random password with to meet your criteria",
        imgUrl: "images/pswd-generator.png",
        liveSiteUrl: "https://BrandonDHaskell.github.io/pswd-generator/",
        sourceCodeUrl: "https://github.com/BrandonDHaskell/pswd-generator/",
        techList: ["HTML5", "JavaScript", "CSS"]
    },
    {
        name: "Know Your Government",
        summary: "Get to know your government representation based on your location",
        imgUrl: "images/know-your-government.png",
        liveSiteUrl: "https://BrandonDHaskell.github.io/know-your-government/",
        sourceCodeUrl: "https://github.com/BrandonDHaskell/know-your-government/",
        techList: ["HTML5", "JavaScript", "CSS", "D3.js", "Bulma", "Axios"]
    },
    {
        name: "Daily Scheduler",
        summary: "Enter in your daily schedule for the current day and track your progress",
        imgUrl: "images/day-scheduler.png",
        liveSiteUrl: "https://BrandonDHaskell.github.io/day-scheduler/",
        sourceCodeUrl: "https://github.com/BrandonDHaskell/day-scheduler/",
        techList: ["HTML5", "JavaScript", "CSS", "JQuery", "DayJS"]
    },
    {
        name: "Quiz Time",
        summary: "Select a category, take your quiz, and track your scores",
        imgUrl: "images/quiz-time.png",
        liveSiteUrl: "https://BrandonDHaskell.github.io/quiz-time/",
        sourceCodeUrl: "https://github.com/BrandonDHaskell/quiz-time/",
        techList: ["HTML5", "JavaScript", "CSS", "JQuery"]
    },
    {
        name: "Weather Planner",
        summary: " Enter in a city name and select the country then click search. See the weather all around the world if you want to!",
        imgUrl: "images/weather-planner.png",
        liveSiteUrl: "https://BrandonDHaskell.github.io/weather-planner/",
        sourceCodeUrl: "https://github.com/BrandonDHaskell/weather-planner/",
        techList: ["HTML5", "JavaScript", "CSS", "JQuery", "DayJS", "APIs"]
    }
]

const ProjectsList: React.FC = () => {
    return (
        <div className="project-list flex flex-wrap justify-center m-9">
            {projects.map((project, index) => (
                <ProjectItem key={index} {...project} />
            ))}
        </div>
    );
}

export default ProjectsList;