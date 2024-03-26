// Tech.jsx
import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
    const iconSize = 80; // Adjust this value to your desired size

    return (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
                <div className='w-28 h-28' key={technology.name}>
                    <BallCanvas icon={technology.icon} style={{ width: iconSize, height: iconSize }} />
                    <p className="text-center">{technology.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Tech;
