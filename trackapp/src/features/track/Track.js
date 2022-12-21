import React from "react";
import {selectTitle} from './trackSlice'
import { useSelector, useDispatch } from 'react-redux';

export const Track = () => {

    const title = useSelector(selectTitle);


    return (<>
    <p> {title+2}</p>
    </>)
}