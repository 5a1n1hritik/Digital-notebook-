import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const noteInitial = []
  const [notes, setNotes] = useState(noteInitial);

  const getNotes = async() => {
    // TODO: Api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkODdkMDFkOGVlZjJlM2M0Yzc3NTY5In0sImlhdCI6MTcwODY4ODM4OH0.eFkUW_iNUsUv2HGbv3FiOzikVmHhD4RkRt2C7N3oHZI"
      }
    });
    const json = await response.json()
    console.log(json);
    setNotes(json)
  };

  const addNote = async(title, description, tag) => {
    // TODO: Api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkODdkMDFkOGVlZjJlM2M0Yzc3NTY5In0sImlhdCI6MTcwODY4ODM4OH0.eFkUW_iNUsUv2HGbv3FiOzikVmHhD4RkRt2C7N3oHZI"
      },
      body: JSON.stringify({title, description, tag}),
    });
    const note = {
      _id: "65d898b50bae2edea41f0e2d8",
      user: "65d87d01d8eef2e3c4c77569",
      title: title,
      description: description,
      tag: tag,
      date: "2024-02-23T13:08:05.439Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  const deleteNote = async (id) => {
    // TODO: Api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkODdkMDFkOGVlZjJlM2M0Yzc3NTY5In0sImlhdCI6MTcwODY4ODM4OH0.eFkUW_iNUsUv2HGbv3FiOzikVmHhD4RkRt2C7N3oHZI"
      }
    });
    const json = response.json()
    console.log(json);

    // console.log("delete note is id: " + id );
    // const newNote = notes.filter((note)=>{return note._id!== id})
    // setNotes(newNote);
  };

  const editNote = async (id, title, description, tag) => {
    // TODO: Api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkODdkMDFkOGVlZjJlM2M0Yzc3NTY5In0sImlhdCI6MTcwODY4ODM4OH0.eFkUW_iNUsUv2HGbv3FiOzikVmHhD4RkRt2C7N3oHZI"
      },
      body: JSON.stringify({title, description, tag}),
    });
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
    setNotes();
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
