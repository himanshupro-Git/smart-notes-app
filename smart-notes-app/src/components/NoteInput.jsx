import { useState } from "react";
export default function NoteInput(){

const [text, setText] = useState("")
    return(
        <div>
            <input type="text" 
            value={text}
            placeholder="Write something here..."
            onChange={e=>setText(e.target.value)}
            />
            <button>Add</button>
        </div>
    );
}
