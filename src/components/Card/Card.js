import React from 'react';


const todoTitle = "call family";
const todoDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aut!";
const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();


const Card = () => {
    return (
        <>
            <h1 className='headingStyle'>Todo App</h1>
            <div className="card">
                <h3 className='card-title'>{todoTitle}</h3>
                <p className='card-desc'>{todoDesc}</p>
                <p className='card-footer'>{currentDate + "/" + currentMonth + "/" + currentYear}</p>
            </div>
        </>
    )
}

export default Card;