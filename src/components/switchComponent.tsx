import React,{ Fragment, useState} from "react";
import D3Charts from "./learnD3/rootchart";
import GoogleCharts from "./googleCharts/rootchart";
import ReactHooks from "./reactHooks/react_hooks";
import { NavLink } from "react-router-dom";

const SwitchComponent : React.FC = () => {
    const [activeComponent, setActiveComponent] = useState('hooks');

    const renderSwitchComponent = (activeComponent: string) => { 
        switch(activeComponent){
            case "d3":
                return  <div><NavLink  to={`/d3`} key="d3"/></div> 
            case "google":
                return <GoogleCharts/>
            case "hooks":
                return <ReactHooks/>
            default:
                return <></>
        }
    }

    const renderSelectComponent = () => {
        return(
            <Fragment>
                <select 
                    name="charts"
                    onChange={e => setActiveComponent(e.currentTarget.value)}
                >
                {[
                    { label: "React Hooks", value: "hooks" },
                    { label: "D3 Charts", value: "d3" },
                    { label: "Google Charts", value: "google" },
                
                ].map(option => {
                return (
                    <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
                );
                })}
                </select>

                {renderSwitchComponent(activeComponent)}
            </Fragment>
        )
    }

    return(
        <Fragment>
            {renderSelectComponent()}
        </Fragment>
    )
}

export default SwitchComponent;