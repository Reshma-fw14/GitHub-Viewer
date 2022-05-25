import React from "react";
import Card from "../Card/Card";
import "./Home.css";
import { useEffect, useState,useRef } from "react";
import axios from "axios";
import Floting from "../Floting/Floting";

export default function Home() {
  const [userData, setuserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const page=useRef(1);
 

  // document.getElementById('floatin_div').style.display='none';

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get(`http://localhost:5000/user?page=1`).then(({ data }) => {
        setuserData(data.data);
    });
  }

  const handleChange = (e) => {
    const searchWord = e.target.value;
    // setWordEntered(searchWord);
    const newArr = userData.filter((e) => {
      return e.userName.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
     
      setFilteredData(newArr);
    }
  };

 
  const handleScroll=(e)=>{
     let element=e.target;
     if((element.scrollHeight-element.scrollTop)<=element.clientHeight){
       axios.get(`http://localhost:5000/user?page=${++page.current}`).then(({ data }) => {
        // console.log(element.scrollHeight-element.scrollTop, element.clientHeight)
        setuserData([...userData, ...data.data]);
    });
    }
  }
 

  return (
    <div className="container">
      <div className="top-container">
        <div className="logo-title">
          <div className="github-logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="github"
            />
          </div>
          <p className="app-title">GitHub Profile Viewer</p>
        </div>
        <nav className="navbar navbar-primary  bg-primary user_search_bar_container  ">
          <div className="container-fluid user_search_bar">
            <form className="d-flex">
              <button className="btn btn-outline" type="submit">
                <i className="fa-solid fa-magnifying-glass icon_user_search"></i>
              </button>
              <input
                className=" bg-primary text-white input_user_search"
                placeholder="Search User"
                style={{ color: "white" }}
                onChange={(e) =>{ handleChange(e)}}
              />
              <button className="btn btn-outline">
                <i className="fa-solid fa-xmark icon_user_search"></i>
              </button>
            </form>
          </div>
        </nav>
       {filteredData.length>0?<Floting data={filteredData}/>:""}
        
      </div>

      <div className="all-user-details" onScroll={(e)=>{handleScroll(e)}}>
        {userData.map((ele, i) => (
          <Card key={ele._id} single={ele} />
        ))}
      </div>
    </div>
  );
}
