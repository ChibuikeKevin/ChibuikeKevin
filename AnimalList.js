import React from 'react';
import './style/AnimalList.css';

const AnimalList = () => {
    const animals = [
        "Dog",
        "Cat",
        "Bird",
        "Fish",
        "Rabbit"
    ];

    return (
        <div className="animal-list">
            <h1 className="animal-list-title">Animals</h1>
            <ol>
                {animals.map((animal, index) => (
                    <li className="animal-item" key={animal}>{animal}</li>
                ))}
            </ol>
        </div>
    );
};
export default AnimalList;