import React, { useEffect, useState } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../state/store/ActionCreators";
export default function Card({ single }) {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const action = bindActionCreators(ActionCreators, dispatch);

  // console.log(action)
  return (
    <div
      className="card-container"
      onClick={() => {
        localStorage.setItem("single", JSON.stringify(single));
        action.UserAction(single);
        nav("/user-detail")
      }}
    >
      <div className="card-img">
        <img src={single.profile_img} alt="img" />
      </div>
      <div className="card-details">
        <div>
          <p className="_username">{single.userName}</p>
        </div>
        <div className="user-details handle company">
          <p>
            {" "}
            @{single.userHandle}
            <span>
              {", "}
              {single.company}
            </span>
          </p>
        </div>
        {/* <div> <p>{single.company}</p></div> */}
        <div>
          {" "}
          <p className="user-bio">{single.bio}</p>
        </div>
      </div>
    </div>
  );
}
