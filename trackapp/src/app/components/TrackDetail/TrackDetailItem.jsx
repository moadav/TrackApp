import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './TrackDetail.css'
const TrackDetailItem = () => {
  const [data, setData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      navigate("/tracks");
    } else setData(location.state.TrackItem);
  }, []);
  const {
    Lon,
    Lat,
    Status,
    TrackDeviation,
    CriticalLevel,
    PastTrackDeviations,
  } = data;
  console.log(data);
  return (
    <>
      <h1>Details</h1>
      <div className="googleMaps">
      <a href={"https://www.google.com/maps/place/" + Lat + "," + Lon}>
        Location of the signal
      </a>

      </div>
      <p><b>Track deviation: </b> {TrackDeviation}mm</p>
      <p> <b>Status: </b>{Status}</p>
      <p> <b>Critical Level: </b>{CriticalLevel}</p>

      <div>
        <h2> Past Track deviations recorded:</h2>

        <ul>
          {PastTrackDeviations && PastTrackDeviations.length > 0 ? (
            PastTrackDeviations.map((item, index) => (
              <li key={index}>
                {String(item.TrackDeviation.toString())}mm - {String(item.Date)}
              </li>
            ))
          ) : (
            <p>No past Deviations found</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default TrackDetailItem;
