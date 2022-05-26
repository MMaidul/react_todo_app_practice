import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';



const App = () => {
    const [todoLists,setTodoLists] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>{
           setTodoLists(data)
        })
    },[])
    console.log(todoLists);

    return (

        <div className='todoList-container'>
            <h1 className='headingStyle'>Todo App</h1>
          {
              todoLists.map(todoList=><Card
                  todoList={todoList}
              />)
          }
        </div>
    );
};

export default App;