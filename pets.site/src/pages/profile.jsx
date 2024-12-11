import React, { useEffect, useState } from "react";
import Dannie from "../components/dannie";
import Obyav from "../components/obyav";
import '../components/styles/profile.css';

const Profile =  () => {
  let [user, setUser]=useState([]);
  useEffect(()=>load(),[])
  function load(){
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer CCKnpodnMd7ylx0b6jQmdmgZ1msvgVhWr3AHH5hP8CffeLp0AAIIMF35uDFAjdmkCHJVljmXhyCM69Iq");


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
      <Obyav/>
    </div>
   );
}

export default Profile;