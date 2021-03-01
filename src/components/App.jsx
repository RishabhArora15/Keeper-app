import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//import notes from "../notes";
import CreateArea from "./CreateArea";


function App(){
    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        })
    }    

    function deleteNode(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }

    // function createNotes(note, index){
    //     return (
    //     <Note
    //         key = {index}
    //         id = {index}
    //         onDelete={deleteNode}
    //         title = {note.title}
    //         content = {note.content}
    //     />
    //     );
    // }

    return (
    <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {/* {notes.map(createNotes)} */}
        {notes.map((noteItem,index) => (
            <Note
                key = {index}
                id = {index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNode}
            />
        ))}
        <Footer />
    </div>
    );
};

export default App;