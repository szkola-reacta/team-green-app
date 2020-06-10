import React from 'react';

function Ingredients({ ingredients }) {
    return(
        <ul>
            {ingredients.map((ingredient, index) => (
                <li>{ingredient}</li>
            ))}
        </ul>
    );
}

export default Ingredients;