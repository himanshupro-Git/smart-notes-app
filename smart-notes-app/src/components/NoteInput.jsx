import { useState } from "react";
export default function NoteInput({addNote}){

const [text, setText] = useState("")
function handleAdd(){
    addNote(text);
    setText="";
}
    return(
        <div>
            <input type="text" 
            value={text}
            placeholder="Write something here..."
            onChange={(e)=>setText(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}
