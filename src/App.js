import React, { useEffect, useState } from 'react';
import axios from "axios";
import AddSongEntryForm from './components/AddSongEntryForm';
import MusicTable from './components/musictable/MusicTable';
import './App.css';
import SearchBar from './components/Searchbar';

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
    
    
    return(
    <div className='container-fluid'>
      <div className='row'>
      <div className='col-md-6'>
      <AddSongEntryForm childpropertyone={AddNewSongEntryForm}/>
      </div>
        <div className='col-md-6'>
          <SearchBar/>
          <MusicTable ParentDrop={AddMusic}/>
          </div>
          <div className='col-md-6'>
            <div className='border-box'>
            {AddMusic.map((el)=>{
          return<h1>{}</h1>
         })}
      </div>
    </div>
   </div>
  </div>
  );
}

export default App;
