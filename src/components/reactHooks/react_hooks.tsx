import React, { Fragment, useState, useEffect } from "react";
import ImgMediaCard from "./cardview";
import ReactHooksDetailsPage from "./card_details";
import "./react_hooks.scss";

const ReactHooks = () => {
    const [details, setDetails] = useState('');
    const [components, setComponents] = useState('');
    const [datas, setDatas] = useState(null);

    useEffect(
        () => {
            const data = Promise.all([
                fetch(`${process.env.PUBLIC_URL || ""}/data/hooks.json`
                , {
                  headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   }}),                
              ])
                .then(responses => Promise.all(responses.map(resp => resp.json())))
                .then(([datas]) => {
                  setDatas(datas);
                });
        }, []
    )

    const renderHookList = (datas : any) =>{
        return (
            <Fragment>
                <div className="hooks-list">
                { datas && datas.map((data: any, index: any)=>{
                    return(
                        <div id={data.id} key={index} className="list-items" >
                            <ImgMediaCard
                            img={`${process.env.PUBLIC_URL || ""}${data.imageUrl}`}
                            title={data.title}
                            description = {data.description}
                            details= {data.details}
                            component={data.component}
                            ondetail={setDetails}
                            oncomponent={setComponents}
                            
                            />
                    </div>

                    )
                    
                } )}
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            {
                details
                ? 
                    ReactHooksDetailsPage(details, components)
                :
                    renderHookList(datas)
            }
            
        </Fragment>
    )
}

export default ReactHooks;