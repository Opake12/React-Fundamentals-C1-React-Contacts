import React from "react";
import { useState } from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";


const App = () => {
  const removeContact = (contact) => {
    setContacts(contacts.filter(c => c.id !== contact.id))
  }

  const [contacts, setContacts] = useState([
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "@tylermcginnis",
      avatarURL: "http://localhost:3001/tyler.jpg",
    },
    {
      id: "karen",
      name: "Karen Isgrigg",
      handle: "@karen_isgrigg",
      avatarURL: "http://localhost:3001/karen.jpg",
    },
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "@thehoff",
      avatarURL: "http://localhost:3001/hoff.jpg",
    },
    {
      id: "foo",
      name: "foochard Kalehoff",
      handle: "@thefoo",
      avatarURL: "http://localhost:3001/foo.jpg",
    },
  ]);
    
  return (
    <div>
      <ListContacts contacts={ contacts } onDeleteContact={removeContact} />
    </div>
  );
};


export default App;