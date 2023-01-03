import React, { useEffect, useState } from 'react';
import axios from "axios";


function App() {

const[AddMusic, setAddMusic]= useState([]);
useEffect(()=>{
  fetchAddMusic();
},[]);


async function fetchAddMusic(){
  let response = await axios.get("http://127.0.0.1:8000/api/songs/");
  console.log(response.data);
  debugger;
  setAddMusic(response.data);
}
    
    
    return (
    <div>
      {AddMusic.map((el)=>{
        return<h1>{el.title}</h1>
      })}
    </div>
  );
}

export default App;
