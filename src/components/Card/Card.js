import React from 'react';


const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();


const Card = ({todoList}) => {
    const {title,desc} = todoList;
    return (
        <>
            <div className="card">
                <h1>{title}</h1>
                <h4>{desc}</h4>
                <p className='card-footer'>{currentDate + "/" + currentMonth + "/" + currentYear}</p>
            </div>
        </>
    )
}

export default Card;