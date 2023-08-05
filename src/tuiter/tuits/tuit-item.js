import React from "react";
import { useDispatch } from "react-redux";
// import { deleteTuit } from "./tuits-reducer";
import {deleteTuitThunk} from "../services/tuits-thunks";
import TuitStats from "./tuit-stats";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TuitItem = (
    {
      tuit = {
        "topic": "Space",
        "userName": "SpaceX",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "time": "2h",
        "image": "spacex.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }
    }
) => {
  const dispatch = useDispatch();
  // const handleDelete = () => {
  //   dispatch(deleteTuit(tuit._id));
  // };
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }

  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img className="rounded-circle" width={48} height={48} src={`/images/${tuit.image}`}/>
          </div>
          <div className="col-9">
            <div>
              <span className="fw-bold">{tuit.userName}</span>
              <img width={15} height={15} src='/images/bookmarks-img/account-varify.jpg' className="m-2"/>
              <span className="small text-muted">{tuit.handle}•{tuit.time}</span>
            </div>
            <div>
              {tuit.tuit}
            </div>
            <TuitStats tuit={tuit} />
          </div>
          <div className="col-1">
            {/*<FontAwesomeIcon icon={faTimes} onClick={handleDelete} color="gray" size="md" />*/}
            <FontAwesomeIcon icon={faTimes} onClick={() => deleteTuitHandler(tuit._id)} color="gray" size="md" />
          </div>
        </div>
      </li>
  )
};
export default TuitItem;