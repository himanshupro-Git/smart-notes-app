import './App.css'
import NoteInput from './components/NoteInput'
import NoteList from './components/NoteList'
import { useState } from 'react'

function App() {

const [notes, setNote] = useState([]);

function addNote(text){
  setNote([...notes, text]);
}

function deleteNote(index){
  setNote(notes.filter((note,i)=>i!==index));
}

  return (
    <div>
      <h1>Smart Notes</h1>
      <NoteInput addNote={addNote}/>
      <NoteList notes={notes} deleteNote={deleteNote}/>
    </div>
  )
}

export default App
