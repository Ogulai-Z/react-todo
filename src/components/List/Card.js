import React from 'react';

function Card(props) {
    
    return (
        <li className={`task ${props.status ? 'completed' : ''}`}>
            <div>Title: {props.title}</div>
            <button onClick={props.onDelete}>Delete</button>
            <button onClick={props.onChange}>Change status</button>

           
        </li>
    );
};

export default Card;