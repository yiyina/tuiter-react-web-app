import React from "react";
import TuitSummaryItem from "./tuit-summary-item";
import {useSelector} from "react-redux";

const TuitSummaryList = () => {
  const { tuits } = useSelector(state => state.tuits)
  return(
      <ul className="list-group">
        <h1>Tuits</h1>
        {
          tuits.map(tuit =>
              <TuitSummaryItem
                  key={tuit._id}
                  tuit={tuit}
              />
          )
        }
      </ul>
  );
};
export default TuitSummaryList;