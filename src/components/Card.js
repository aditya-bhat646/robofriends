import React from 'react';
import './Card.css';

export default function Card({ name, email, id }) {
    return (
        <div className='Card-body br3 ma2 bg-light-green pa2 grow shadow-2'>
            <img
                src={`https://robohash.org/${id}?size=200x200`}
                alt={`${name}`}
            ></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
