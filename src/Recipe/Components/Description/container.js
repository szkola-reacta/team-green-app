import React from 'react';

import TitleTab from './TitleTab';
import Description from './description';
import Ingredients from './ingredients';
import Recipe from './recipe';
import Allergen from './allergen';

function Container(){
    return(
        <div>
            <TitleTab title="OPIS" />
            <Description desc="rodzaj klusek ziemniaczanych przygotowanych z gotowanych ziemniaków i mąki, formowane w mocno spłaszczone kulki z wgłębieniem, gotowane w osolonym wrzątku. Kluski śląskie wpisane są na Listę produktów tradycyjnych województwa opolskiego oraz osobno śląskiego." />
            <TitleTab title="SKŁADNIKI" />
            <Ingredients />
            <TitleTab title="Przygotowanie" />
            <Recipe />
            <TitleTab title="Alergeny" />
            <Allergen allergen="gluten, soja, seler, mleko" />
        </div>
    );
}

export default Container;
