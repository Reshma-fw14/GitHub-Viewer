import React from 'react';
import Card from '../Card/Card';
import "./Home.css";
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Home() {
    const [userData, setuserData] = useState([])

    useEffect(()=>{
        getAll()
    },[])

   function getAll(){
       axios.get("http://localhost:5000/user").then(({data})=>{
        //    console.log(data.data)
        setuserData(data.data)
       })
   }
//    console.log(userData)


  return (
    <div className='container'>
        <div className='top-container'>
        <div className='logo-title'>
            <div className='github-logo'><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" /></div>
            <p className='app-title'>GitHub Profile Viewer</p>
        </div>
        <nav className="navbar navbar-primary  bg-primary user_search_bar_container  ">
            <div className="container-fluid user_search_bar">
                <form className="d-flex">
                    <button className="btn btn-outline" type="submit">
                      <i  className="fa-solid fa-magnifying-glass icon_user_search"></i>
                    </button>
                   <input className=" bg-primary text-white input_user_search" placeholder='Search User' style={{color:"white"}}/>
                   <button className="btn btn-outline">
                   <i  className="fa-solid fa-xmark icon_user_search"></i>
                    </button>
                </form>
            </div>
        </nav>
        </div>

        <div className='all-user-details' style={{}}>
           {userData.map((ele,i)=><Card key={ele._id} single={ele}/>)}
        </div>
    </div>
  )
}
