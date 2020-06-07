import React from 'react';

import TitleTab from './TitleTab';
import Description from './description';
import Ingredients from './ingredients';
import Recipe from './recipe';
import Allergen from './allergen';

function Container({ recipe }) {
    return(
        <div>
            <TitleTab title="OPIS" />
            <Description desc={recipe.description} />
            <TitleTab title="SKŁADNIKI" />
            <Ingredients ingredients={recipe.ingredients} />
            <TitleTab title="Przygotowanie" />
            <Recipe recipe={recipe.recipe} />
            <TitleTab title="Alergeny" />
            <Allergen allergen={recipe.allergen} />
        </div>
    );
}

export default Container;
