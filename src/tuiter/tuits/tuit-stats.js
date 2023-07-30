import React from "react";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"

const TuitStats = ( { tuit } ) => {
  const[liked, setLiked] = useState(false);
  const[likes, setLikes] = useState(tuit.likes);

  const handleLikeClick = () => {
    if(liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return(
      <div className="tuit-stats row">
        <div className="tuit-stat col-3">
          <i className="bi bi-chat-square"></i>
          <span className="ms-2">
            {tuit.replies}
          </span>
        </div>
        <div className="tuit-stat col-3">
          <i className="bi bi-arrow-repeat ms-2"></i>
          <span className="ms-2">
            {tuit.retuits}
          </span>
        </div>
        <div className={`tuit-stat col-3`} onClick={handleLikeClick}>
          <i className={`bi bi-heart${liked ? "-fill" : ""} ms-2`} style={{ color: liked ? "red" : "" }} ></i>
          <span className="ms-2">
            {likes}
          </span>
        </div>
        <div className="tuit-stat col-3">
          <i className="bi bi-share ms-2"></i>
        </div>
      </div>
  );
};

export default TuitStats;