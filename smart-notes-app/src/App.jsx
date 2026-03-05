import './App.css'
import NoteInput from './components/NoteInput'
import NoteList from './components/NoteList'

function App() {

  return (
    <div>
      <h1>Smart Notes</h1>
      <NoteInput/>
      <NoteList/>
    </div>
  )
}

export default App
