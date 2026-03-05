export default function NoteList({notes}){
return(
    <div>
        <h2>This is the list of all notes</h2>

        {notes.map((note,index)=>(
            <p key={index}> {note} </p>
        ))}

    </div>
)

}