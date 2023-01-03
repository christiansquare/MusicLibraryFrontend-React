import React, { useState } from 'react';



const AddSongEntryForm= (props) => {
const[title, setTitle] = useState("");
const[artist, setArtist] = useState("");
const[album, setAlbum] =useState("");
const[release_date, setRelease_Date] =useState("");
const[genre, setGenre] = useState("");

function handleSubmit(event){
   event.preventDefault();
   let newsong ={
      title: title,
      artist: artist,
      album: album,
      release_date: release_date,
      genre: genre
   };
   console.log(newsong)
   props.childpropertyone(newsong)
}


    return (
         <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type={""} value={title} onChange={(event)=>setTitle(event.target.value)}/>
            <label>Artist</label>
            <input type={[""]} value={artist} onChange={(event)=>setArtist(event.target.value)}/>
            <label>Album</label>
            <input type={[""]} value={album} onChange={(event)=>setAlbum(event.target.value)}/>
            <label>Release_Date</label>
            <input type="date" value={release_date} onChange={(event)=>setRelease_Date(event.target.value)}/>
            <label>Genre</label>
            <input type={[""]} value={genre} onChange={(event)=>setGenre(event.target.value)}/>
            <button type='submit'>Add Song</button>
         </form>
      );
}
 
export default AddSongEntryForm;