const TrackRapportItem = ({trackRapport}) => {
//Company, Date, Dest, Location, TrainDetails, TrainName, TrainReportNr
const {Company, Date, Dest, Location, TrainDetails, TrainName, TrainReportNr} = trackRapport;

return (<>
<p>{Company} </p>

</>);

}



export default TrackRapportItem;