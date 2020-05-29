import React, { Fragment, useState } from "react";
import StateComponent from "../hook_types/state";
import EffectComponent from "../hook_types/effect";
import ContextComponent from "../hook_types/context";
import { useClipboard } from 'use-clipboard-copy';
import {successToast, errorToast} from '../../toast/toast';

import "./card_details.scss";
import RefComponent from "../hook_types/ref";
import ReducerComponent from "../hook_types/Reducer";
import MemoComponent from "../hook_types/memo";
import CallbackComponent from "../hook_types/callback";
import LayoutEffectComponent from "../hook_types/layout_effect";

const ReactHooksDetailsPage = (props: any) => {

    // const clipboard = useClipboard();
    const clipboard = useClipboard({
        onSuccess() {
          successToast('Text was copied successfully!');
        },
        onError() {
          errorToast('Failed to copy text!');
        }
      });

    const renderSwitchComponent = (component: string) => {
        switch (component) {
            case "useState":
                return <StateComponent />
            case "useEffect":
                return <EffectComponent />
            case "useRef":
                return <RefComponent/>
            case "useReducer":
                return <ReducerComponent />
            case "useMemo":
                return <MemoComponent />
            case "useCallback":
                return <CallbackComponent />
            case "useLayoutEffect":
                return <LayoutEffectComponent />
            default:
                return <></>
        }
    }
    const handleClick = React.useCallback(
        () => {
            clipboard.copy(props.details.join(" ")); // programmatically copying a value
        },
        [clipboard.copy]
    );
    return (
        <Fragment >
            <div className="card_details">
                <div className="example">
                    <div className="example_text">Example:</div>
                    <div className="example_component">
                        {renderSwitchComponent(props.components)}
                    </div>
                </div>
                
                <div className="code">
                    <div className="code_text">
                        Source Code:
                        <button className="code_copy_btn" onClick={handleClick}>
                            <i className="far fa-copy"></i>
                        </button>
                        
                    </div>
                    <div className="code_component" >
                        {props.details && props.details.map((data: any, index: any) => {
                            return (
                                <div key={index} >
                                    {data}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </Fragment>
    )
}


export default ReactHooksDetailsPage;



