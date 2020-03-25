import React from "react";
import './svgSplash.scss';

const SVGSplash: React.FC = () => {
    return (
        <svg viewBox="0 0 340 333">
            <path className="path" d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black" stroke-linecap="round" stroke-dasharray="0,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0" fill="white" />
        </svg>
    )
}

export default SVGSplash;