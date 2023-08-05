import React from "react";
const TuitSummaryItem = (
    {
      tuit = {
        "topic": "Space",
        "username": "SpaceX",
        "time": "2h",
        "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
        "image": "tesla.png"
      }
    }
) => {
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-10">
            <div>{tuit.username} . {tuit.time}</div>
            <div className="fw-bolder">{tuit.topic}</div>
            <div>{tuit.title}</div>
          </div>
          <div className="col-2">
            <img width={70} className="float-end rounded-circle" src={`/images/${tuit.image}`}/>
          </div>
        </div>
      </li>
  );
};
export default TuitSummaryItem;