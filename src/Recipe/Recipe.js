import React from 'react';

import Title from './Components/Title';
import Images from './Components/images';
import Container from './Components/Description/container';



function Recipe({ recipe }) {
    return (
        <div>
            <Title title={recipe.title} />
            <Images images={recipe.image} />
            <Container recipe={recipe} />
        </div>
    );
}

export default Recipe;