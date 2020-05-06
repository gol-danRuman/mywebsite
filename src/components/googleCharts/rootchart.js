import React, {Fragment, useState  } from "react";
import Chart from "react-google-charts";
import GoogleLineChart from "./visualizations/linechart";
import GoogleColumnChart from "./visualizations/columnchart";


const GoogleCharts = () => {

    const [activeGoogleChart, setActiveGoogleChart] = useState('linechart');

    const renderSwitchGoogleChart = (activeGoogleChart) => { 
        switch(activeGoogleChart){
            case "linechart":
                return <GoogleLineChart/>
            case "columnchart":
                return <GoogleColumnChart/>
            default:
                return <></>
        }
    }

    const renderSelectComponent = () => {
        return(
            <Fragment>
                <select 
                    name="googlecharts"
                    onChange={e => setActiveGoogleChart(e.currentTarget.value)}
                >
                {[
                { label: "Line Chart", value: "linechart" },
                { label: "Column Chart", value: "columnchart" }
                ].map(option => {
                return (
                    <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
                );
                })}
                </select>
                
                {renderSwitchGoogleChart(activeGoogleChart)}
            </Fragment>

        )
    }

    return(
        <Fragment>
           {renderSelectComponent()}
        </Fragment>
    )
}

export default GoogleCharts;