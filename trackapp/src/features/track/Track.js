import React from "react";
import {selectTitle} from './trackSlice'
import { useSelector, useDispatch } from 'react-redux';

export function Track () {

    const title = useSelector(selectTitle);


    return (<>
    <p> {title+2}</p>
    </>)
}