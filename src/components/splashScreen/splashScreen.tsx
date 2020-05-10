import React, {useState} from "react";
import './splashScreen.scss';
import NameSplash from "./splash/nameSplash/nameSplash";
import SwitchComponent from "../switchComponent";
import MiniDrawer from '../../components/navComponent/sideNav';

const SplashScreen: React.FC = () => {

    const [isSplashing, setSplashing] = useState(true);

    setTimeout(function () {
        setSplashing(false);
    }, 1000);

    return <>{isSplashing ? <NameSplash/> : <> <MiniDrawer/> </>}</>
}

export default SplashScreen;