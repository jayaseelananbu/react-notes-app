import { useState } from "react";
import NoteList from "./components/NotesList";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "26/12/2022",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "25/12/2022",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "24/12/2022",
    },
    {
      id: nanoid(),
      text: "This is my new note",
      date: "23/12/2022",
    },
  ]);
  return (
    <div className="container">
      <NoteList notes={notes} />
    </div>
  );
};

export default App;
