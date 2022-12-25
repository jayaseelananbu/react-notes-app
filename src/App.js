import { useState } from "react";
import NoteList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Sample note one",
      date: "26/12/2022 01:02:51",
    },
    {
      id: nanoid(),
      text: "Sample note two",
      date: "25/12/2022 01:02:52",
    },
    {
      id: nanoid(),
      text: "Sample note three",
      date: "24/12/2022 01:02:53",
    },
    {
      id: nanoid(),
      text: "Sample note four",
      date: "23/12/2022 01:02:54",
    },
  ]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleString(),
    };

    const newNotesList = [...notes, newNote];
    setNotes(newNotesList);
  };

  const deleteNote = (id) => {
    const newNoteList = notes.filter((note) => note.id !== id);
    setNotes(newNoteList);
  };

  return (
    <div className={`${darkMode && "dark-mode"} `}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
