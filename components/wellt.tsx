import React from 'react';

function Landing() {
    const technologies = [
        "Python - Pandas & Numpy",
        "SQL",
        "Machine Learning - R",
        "Excel - VBA",
        "React.js",
        "Next.js",
        "Html & CSS",
        "Java",
        "Agile Methodologies",
        "UX (Figma & Axure)"
    ];

    return (
        <div>
            <h2 className='text-xl text-bold'>For Your Personal Wellt</h2>
            <ul>
                {technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        </div>
    );
}

export default Landing;
