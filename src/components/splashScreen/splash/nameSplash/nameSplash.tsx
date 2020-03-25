import React, { useState } from "react";
import "./nameSplash.scss";

const NameSplash: React.FC = () => {
    return (
        <>
            <svg viewBox="0 0 150 350" width="500" height="400">
                <path className="path" d="M 150 255 Q 150 210 150 180 Q 217.5 157.5 225 210 Q 210 255 150 255 Q 195 270 210 345 Q 195 270 150 255 L 150 345 Z" 
                    stroke="black" 
                    stroke-dasharray="0,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0" 
                    fill="white">
                </path>
            </svg>
            {/* <svg viewBox="100 50 800 100" width="90" height="200"
                ><path className="path" d="M 150 100 C 150 500 550 500 550 100 " 
                    stroke="black" 
                    stroke-dasharray="0" 
                    fill="white">
                </path>
            </svg> */}
            
        </>
    )
}

export default NameSplash;