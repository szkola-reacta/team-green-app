import React from 'react';

import Recipe from '../Recipe';

function Content({ recipes }) {
    return(
        <div className="content">
            {recipes.map((recipe, index) => (
                <div key={index}>
                    <Recipe recipe={recipe} />
                </div>
            ))}
        </div>
    );
}

export default Content;