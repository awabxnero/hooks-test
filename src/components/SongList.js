import React, { useState, useEffect } from "react";
import uuid from "uuid";
import NewSongForm from "./NewSongForm";
const SongList = () => {
  const [song, setSongs] = useState([
    { title: "indigo", id: uuid() },
    { title: "heart break on a full moon", id: uuid() }
  ]);
  const addSong = title => {
    setSongs([...song, { title: title, id: uuid() }]);
  };
  useEffect(() => {
    console.log("hey");
  }, [song]);
  return (
    <div className="song-list">
      <ul>
        {song.map(song => {
          return <li id={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
