import React from "react"

export default function Sidebar(props) {

    const noteElements = props.notes.map((note, index) => {
       
        const noteBody = props.notes[index].body;
        const noteBodyArray = noteBody.split("\n");

        return (
            <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{noteBodyArray[0]}</h4>
                <button 
                    className="delete-btn"
                    // Your onClick event handler here
                    onClick={event => props.deleteNote(event, note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
        )
    })

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}