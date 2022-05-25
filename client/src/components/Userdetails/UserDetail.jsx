// import React from 'react'
import { useSelector } from 'react-redux'
import axios from "axios";
import "./UserDetails.css"
import { useEffect, useState } from 'react';

export const UserDetail=()=> {
  const [userprofile, setUserProfile]=useState({data:[],status:false,totalRepos:0});

  useEffect(()=>{
    getUser()
  },[])

  const profile= useSelector((state)=>state.UserReducer)
  // console.log(profile)

 const getUser=()=>{
  axios.get(`http://localhost:5000/repository/${profile._id}`).then(({data})=>{
    // console.log("pined repos : ", data)
    setUserProfile(data)
  })
 }
  console.log("userprofile : ",userprofile)
  
  return (
    <div className='profile_page_container'>
       <div className='user-profile-image-container'>
          <div className='user-profile-image'>
            <img src={profile.profile_img} alt="img" />
          </div>
          <div className='user-profile-detail'>
            <p>{profile.userName}</p>
            <p>@{profile.userHandle}</p>
          </div>
       </div>

       <div className='user_allDetails'>
           <div className='user-bio-details'>
              <p>Bio</p>
              <p>{profile.bio}</p>
           </div>
           <div className='company-details'>
             <p>Works at</p>
             <p>{profile.company}</p>
           </div>
           <div className='repository-followers'>
             <div>
               <p>Repositories</p>
               <p>{userprofile.totalRepos}</p>
             </div>
             <div>
               <p>Followers</p>
               <p>{profile.followers}</p>
             </div>
           </div>

           <div className='repo-details'>
             <p>Pinned Repositories</p>
           <div className='pined_repos'>
           {userprofile.data.map((e)=>{
               return (
                  <div className='profile-card'>
                  <div>
                    <img src={profile.profile_img} alt="" />
                  </div>
                  <div>
                    <p>{`${profile.userName}/${e.repository}`}</p>
                    <p>{e.description}</p>
                  </div>
                </div>
               )
             })}
           </div>
           </div>
       </div>
    </div>
  )
}