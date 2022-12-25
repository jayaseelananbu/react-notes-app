import { useState } from "react";

const AddNote = () => {
  const [noteText, setNoteText] = useState("");
  const handleChange = (event) => {
    setNoteText(event.target.value);
  };
  return (
    <div className="note new">
      <textarea
        onChange={handleChange}
        rows="8"
        cols="10"
        placeholder="Type to add note..."
      ></textarea>
      <div className="note-footer">
        <small>Remaining 200</small>
        <button className="save">Save</button>
      </div>
    </div>
  );
};

export default AddNote;
