import { useEffect, useState } from "react";
import axios from "axios";
import Note from "./components/Note";
import Formulario from "./components/Formulario";
import Search from "./components/Search";
import "./App.css";

function App() {

  const [notes, setNotes] = useState([]); 

  const loadData = () => {
    axios
      .get("http://localhost:8000/api/notes/")
      .then((res) => setNotes(res.data));
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="App">
      <div className="appbar">
        <img src="/Genius-logo.png" className="logo" />
      </div>
      <main className="container">
        <Search/>
        <Formulario onSubmitFormulario={loadData}/>
        <div className="card-container">
          {notes.map((note) => (
            <Note key={`note__${note.id}`} title={note.title}>
              {note.content}
            </Note>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;