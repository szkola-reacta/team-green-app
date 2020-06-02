import React from 'react';

import Title from './Components/Title';
import Images from './Components/images';
import Container from './Components/Description/container';



function Recipe() {
    return (
        <div>
            <Title title="Kluski śląskie" />
            <Images images="kluski" />
            <Container />
        </div>
    );
}

export default Recipe;