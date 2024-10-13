import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createNotes(noteItems) {
  return (<Note title={noteItems.title} content={noteItems.content}/>)
}

function App() {
  return (
    <div>
      <Header />
    
      {notes.map(createNotes)}

      <Footer />
    </div>
  );
}

export default App;
