import React, { useEffect, useState } from 'react';
import axios from "axios";
import AddSongEntryForm from './components/AddSongEntryForm';

function App() {

function AddNewSongEntryForm(entry) {
  
  let tempsong = [...AddMusic, entry];

  setAddMusic(tempsong);
}

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
      <AddSongEntryForm childpropertyone={AddNewSongEntryForm}/>
      {AddMusic.map((el)=>{
        return<h1>{el.title} {el.artist} {el.album} {el.release_date}{el.genre} </h1>
      })}
    </div>
  );
}

export default App;
