export default function NoteList({notes, deleteNote}){
return(
    <div>
        <h2>This is the list of all notes</h2>

        {notes.map((note,index)=>(
            <p key={index}>{note}
            <button onClick={()=>deleteNote(index)}>Delete</button>
            </p>
        ))}

    </div>
)

}