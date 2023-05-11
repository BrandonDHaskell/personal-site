import React from 'react';

const Projects: React.FC = () => {
    return (
        <div className="projects">
            <h2 className="mb-8 mt-8 text-4xl font-bold md:text-5xl lg:text-6xl dark:text-sky-500">Projects</h2>
            <div className="project-list flex justify-center m-9">
                <div className="project-card rounded bg-rose-900/75 p-8 max-w-xs ring-2 ring-offset-2 ring-stone-900 shadow-2xl shadow-gray-400/75 hover:shadow-sky-500">
                    <a href="https://BrandonDHaskell.github.io/pswd-generator/">
                        <div className="project-info rounded">
                            <h3 className="project-title job-title">Password Generator</h3>
                            <p className="job-desc text-sm">Generate a random password with to meet your criteria</p>
                            <img className="rounded border-2 border-stone-900" src="images/pswd-generator.png" alt="password generator"></img>
                            <div className="flex justify-center">
                                <div>
                                    <span className="box-decoration-clone bg-gradient-to-r from-yellow-600 to-sky-200 text-sky-700 px-2 mx-2 rounded-lg">JavaScript</span>
                                </div>
                                <div><span className="box-decoration-clone bg-gradient-to-r from-yellow-600 to-sky-200 text-sky-700 px-2 mx-2 rounded-lg">HTML5</span></div>
                                <div><span className="box-decoration-clone bg-gradient-to-r from-yellow-600 to-sky-200 text-sky-700 px-2 mx-2 rounded-lg">CSS</span></div>
                            </div>
                        </div>
                    </a>
                    <div className="flex justify-center text-sky-400">
                        <a href="https://github.com/BrandonDHaskell/pswd-generator">Source code</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;