import {useEffect, useState} from "react";
import {selectTitle, getTrackDataAsync, selectTracks} from './trackSlice'
import { useSelector, useDispatch } from 'react-redux';
import TrackRapportItem from "../../app/components/TrackRapportItem";

export const Track = () => {
    const title = useSelector(selectTitle);
    const tracks = useSelector(selectTracks);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getTrackDataAsync())

    }, [])

    return (<>
    <button >sdsadsa</button>
    <p> {title+2}</p>
    
    {tracks.length > 0 ? tracks.map( (item, index) => <TrackRapportItem key={index}  trackRapport = {item}/>) : []}
    </>)
}