import React from 'react';

function Add(){

    let recipeName = React.createRef();
    let recipeDescription = React.createRef();
    let recipeTag = React.createRef();
    let allergenTag = React.createRef();

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Nazwa:
                <input name="recipeName" id="recipeName" ref={(value) => {recipeName = value}} type="text" placeholder="Nazwa przepisu"/><br />
            </label>
            <label>
                Opis:
                <textarea name="recipeDescription" id="recipeDescription" ref={(value) => {recipeDescription = value}}  placeholder="Opis"></textarea><br />
            </label>
            <label>
                Alergeny:
                <input name="recipeAllergen" id="recipeAllergen" ref={(value) => {allergenTag = value}} placeholder="Alergeny" /><br />
            </label>
            <label>
                Tagi:
                <input name="recipeTag" id="recipeTag" ref={(value) => {recipeTag = value}} placeholder="Tagi" /><br />
            </label>
            <button type="submit">Dodaj</button>
        </form>
    );
}

export default Add;