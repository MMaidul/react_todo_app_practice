import React from 'react';
import ReactDOM from 'react-dom/client';


const todoTitle = "call family";
const todoDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aut!";
const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
   <h1>Todo App</h1>
   <h3>{todoTitle}</h3>
   <p>{todoDesc}</p>
   <p>{currentDate+ "/" + currentMonth +"/"+ currentYear}</p>
 </div>,
);

