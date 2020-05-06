import React,{ Fragment, useState} from "react";
import D3Charts from "./learnD3/rootchart";
import GoogleCharts from "./googleCharts/rootchart";

const SwitchComponent : React.FC = () => {
    const [activeComponent, setActiveComponent] = useState('d3');

    const renderSwitchComponent = (activeComponent: string) => { 
        switch(activeComponent){
            case "d3":
                return <D3Charts/>
            case "google":
                return <GoogleCharts/>
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
                { label: "D3 Charts", value: "d3" },
                { label: "Google Charts", value: "google" }
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