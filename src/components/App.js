import React from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";



const App = () => {
  const contacts = [
    {
      id: "karen",
      name: "Karen Isgrigg",
      handle: "karen_isgrigg",
      avatarURL: "http://localhost:3000/karen.jpg",
    },
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "richardkalehoff",
      avatarURL: "http://localhost:3000/richard.jpg",
    },
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "tylermcginnis",
      avatarURL: "http://localhost:3000/tyler.jpg",
    },
  ];
  return (
    <div>
      <ListContacts contacts={ contacts }/>
    </div>
  )
};


export default App;