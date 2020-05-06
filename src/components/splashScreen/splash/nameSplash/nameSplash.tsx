import React, { useState } from "react";
import "./nameSplash.scss";

const NameSplash: React.FC = () => {

    
    return (
        <>
            {/* <svg viewBox="0 0 150 350" width="500" height="400">
                <path className="path" d="M 150 255 Q 150 210 150 180 Q 217.5 157.5 225 210 Q 210 255 150 255 Q 195 270 210 345 Q 195 270 150 255 L 150 345 Z" 
                    stroke="black" 
                    stroke-dasharray="0,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0" 
                    fill="white">
                </path>
            </svg> */}
            <svg viewBox="0 0 1000 350" width="100%" height="400">
                <path className="path" d="M 75 105 C 75 105 165 105 165 105 C 417.5 105 467.5 105 735 105 L 180 105 Q 210 510 285 105 L 300 105 L 345 105 L 405 105 L 450 105 L 480 105 L 585 105 C 585 435 585 345 585 105 L 645 105 C 645 105 585 615 645 105 C 645 195 765 615 735 105 L 585 105 L 390 405 L 555 150 L 510 225 L 585 195 L 585 105 L 450 105 L 435 300 L 450 105 L 390 195 L 345 105 L 240 405 L 345 105 L 75 105 L 75 375 L 75 225 L 210 360 L 75 225 C 165 210 180 135 120 105 " 
                    stroke="black" 
                    strokeDasharray="0,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0" 
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