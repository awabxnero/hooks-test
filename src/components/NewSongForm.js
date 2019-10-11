import React, { useState } from "react";

const NewSongForm = Props => {
  const [title, setTitle] = useState("");
  const handleChange = e => {
    setTitle(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    Props.addSong(title);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Song name</label>
        <input type="text" required onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewSongForm;
