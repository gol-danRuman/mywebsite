import React, {useState} from "react";
import './splashScreen.scss';
import NameSplash from "./splash/nameSplash/nameSplash";
import SwitchComponent from "../switchComponent";

const SplashScreen: React.FC = () => {

    const [isSplashing, setSplashing] = useState(true);

    setTimeout(function () {
        setSplashing(false);
    }, 1000);

    return <>{isSplashing ? <NameSplash/> : <> <SwitchComponent/> </>}</>
}

export default SplashScreen;