// import React from 'react'
import { useSelector } from 'react-redux'
import axios from "axios"

export const UserDetail=()=> {
  const data= useSelector((state)=>state.UserReducer)
  console.log(data)
  axios.get(`http://localhost:5000/repository/${data._id}`).then(({data})=>{console.log(data)})
  return (
    <div>
      <h1>detail page</h1>
    </div>
  )
}
