import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./TrackRapportItem.css";
import {
  totalMedium,
  totalHigh,
  totalLow,
  slightlydmged,
  dmged,
  highdmged,
} from "../../../hooks/TrainInfoHooks";

const TrackRapportItem = () => {
  const [data, setData] = useState({});

  //Company, Date, Dest, Location, TrainDetails, TrainName, TrainReportNr
  //const {Company, Date, Dest, Location, TrainDetails, TrainName, TrainReportNr} = useLocation();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      navigate("/tracks");
    } else setData(location.state.TrackRapport);
  }, []);

  const {
    Company,
    Date,
    Dest,
    Location,
    TrainName,
    TrainReportNr,
    Track,
    TrainDetails,
    TrackArrival,
  } = data;

  const medium = totalMedium(TrainDetails ?? []);
  const high = totalHigh(TrainDetails ?? []);
  const low = totalLow(TrainDetails ?? []);
  const sldmg = slightlydmged(TrainDetails ?? []);
  const dmg = dmged(TrainDetails ?? []);
  const hidmg = highdmged(TrainDetails ?? []);

  return (
    <>
      <div className="rapportBorder">
        <h1>Report Number: {TrainReportNr}</h1>
        <div>
          <div className="reportInfo">
            <p>Company: {Company}</p>
            <p>TrainName: {TrainName}</p>
            <p>Date: {Date}</p>
            <p>Track: {Track}</p>
            <p>Track Arrival: {TrackArrival}</p>
            <p>
              Trip location {Location} - {Dest}
            </p>
          </div>
          <h2>Train Trip Information Details:</h2>
          <div className="totals">
            <div className="critical">
              <h3>Critical levels:</h3>
              <p> Total low: {low}</p>
              <p> Total medium: {medium}</p>
              <p> Total High {high}</p>
            </div>
            <div className="status">
              <h3>Status:</h3>
              <p> Slightly damanged: {sldmg}</p>
              <p> Damanged: {dmg}</p>
              <p> Maintenance required {hidmg}</p>
            </div>
          </div>

          <div className="trackItems">
            {TrainDetails && TrainDetails.length > 0 ? (
              TrainDetails.map((item, index) => (
                <NavLink
                  key={index}
                  to={"/rapport/" + TrainReportNr + "/" + index}
                  state={{ TrackItem: item }}
                >
                  {"Signal: " + index}
                </NavLink>
              ))
            ) : (
              <p> Could not find any Details</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackRapportItem;
