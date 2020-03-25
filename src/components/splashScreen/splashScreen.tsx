import React, {useState} from "react";
import './splashScreen.scss';
import SVGSplash from "./splash/svgSplash/svgNameAnimateSplash";
import SplashPage from "./splash/splashPage/splashPage";
import NameSplash from "./splash/nameSplash/nameSplash";

const SplashScreen: React.FC = () => {

    const [isSplashing, setSplashing] = useState(true);

    // setTimeout(function () {
    //     setSplashing(false);
    // }, 8000);

    return <>{isSplashing ? <NameSplash/> : <> <SplashPage/> </>}</>
        
    
}





export default SplashScreen;