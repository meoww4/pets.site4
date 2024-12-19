import React, { useEffect, useState } from "react";
import Dannie from "../components/dannie";
import MyAds from "../components/myads";
import '../components/styles/profile.css';

const Profile =  () => {
  let [user, setUser]=useState([]);
  useEffect(()=>load(),[])
  function load(){
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.token}`);


const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://pets.сделай.site/api/users", requestOptions)
  .then((response) => response.json())
  .then((result) => {console.log(result);
   setUser(result);
  });
  }
  return ( 
    <div>
      <Dannie data={user}/>
      <MyAds/>
    </div>
   );
}

export default Profile;