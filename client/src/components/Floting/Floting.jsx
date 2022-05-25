import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../state/store/ActionCreators";


export default function Floting({data}) {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const action = bindActionCreators(ActionCreators, dispatch);
    function handelClick(ele){
        localStorage.setItem("single", JSON.stringify(ele));
        action.UserAction(ele);
        nav("/user-detail")
    }
  return (
    <div id='floatin_div'>
        <table>
           {data.map((ele)=><tr onClick={()=>{handelClick(ele)}} style={{cursor:"pointer"}}><td>{ele.userName}</td></tr>)}
        </table>
    </div>
  )
}
