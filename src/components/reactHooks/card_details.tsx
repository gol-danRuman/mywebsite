import React, { Fragment, useState } from "react";
import StateComponent from "./hook_types/state";
import EffectComponent from "./hook_types/effect";
import ContextComponent from "./hook_types/context";

const ReactHooksDetailsPage = (details: any, component: any) => {

    const renderSwitchComponent = (component: string) => { 
        switch(component){
            case "useState":
                return <StateComponent/>
            case "useEffect":
                return <EffectComponent/>
            case "useContext":
                return <ContextComponent/>
            default:
                return <></>
        }
    }
    return(
        <Fragment>
            <label>Use State Example:</label>
            {renderSwitchComponent(component)}
            
            <label>Source Code: </label>

            {details && details.map((data: any) => {
                return(
                    <div>
                        {data}
                    </div>
                )
            })}
            
        </Fragment>
    )
}


export default ReactHooksDetailsPage;