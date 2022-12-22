import { useEffect } from "react";
import { getTrackDataAsync, selectTracks } from "./trackSlice";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "./track.css"

export const Track = () => {
  const tracks = useSelector(selectTracks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrackDataAsync());
  }, []);

  return (
    <>
        <h1>Reports</h1>

      
      <div className="a">
      <ul>
        {tracks.length > 0
          ? tracks.map((item, index) => (
              <li key={index}>
                <NavLink
                  key={index}
                  to={"/rapport/" + item.TrainReportNr}
                  state={{ TrackRapport: item }}
                >
                  {" "}
                  Report: {item.TrainReportNr}
                </NavLink>
              </li>
            ))
          : ""}
      </ul>
      </div>
    </>
  );
};
