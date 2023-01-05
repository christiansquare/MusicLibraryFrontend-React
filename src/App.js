import React, { useEffect, useState } from 'react'; 
import axios from "axios";
import AddSongEntryForm from './components/AddSongEntryForm';
import MusicTable from './components/musictable/MusicTable';
import './App.css';
import SearchBar from './components/Searchbar';

function App() {

async function AddNewSongEntryForm(entry) {
  
  let response = await axios.post("http://127.0.0.1:8000/api/songs/", entry);
  if(response.status === 201){
  await fetchAddMusic();
  }
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

function filterMusic(search) {
  debugger
    let filteredSongs = AddMusic.filter((song)=>{
      if(song.title.includes(search)) {
        return true;
      } else {
        return false;
      }
      });
      debugger
      setAddMusic(filteredSongs)
    }
  



    
    return(
    <div className='container-fluid App'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>MyJams</h3>
      <div className='col-md-6'>
        <div className='border-box'>
      <AddSongEntryForm childpropertyone={AddNewSongEntryForm}/>
      </div>
        <div className='col-6.col-md-4'>
          <div className = 'border-box'>
          
          <SearchBar filterMusic={filterMusic}/>
          
          <MusicTable ParentDrop={AddMusic}/>
          </div>
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
