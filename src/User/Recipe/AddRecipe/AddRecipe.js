import React from 'react';
import './AddRecipe.css';

class AddRecipe extends React.Component{
    state = {
        dishName: '',
        keywords: '',
        time: 'halfHour',
        recipe: 'Wpisz przepis'
    }
    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    handleSelectChange = (event) => {
        this.setState({time: event.target.value});
    }
    handleTextareaChange = (event) => {
        this.setState({recipe: event.target.value});
    }
    handleCheckboxChange = (event) => {
        this.setState({sure: event.target.checked});
    }
    render(){
        return(
            <div>
                <form className="form">
                    <h2>Wprowadzasz potrawę pod nazwą {this.state.dishName}</h2>
                    <label>Podaj nazwę potrawy
                        <input type="text" name="dishName" value={this.state.dishName} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>Wybierz ile czasu trwa przygotowanie potrawy
                        <select onChange={this.handleSelectChange}>
                            <option value="halfHour">Do pół godziny</option>
                            <option value="anHour">Do godziny</option>
                            <option value="longer">Powyżej godziny</option>
                        </select>
                    </label>
                    <br />
                    <label>Wypisz słowa klucze
                        <input type="text" name="keywords" value={this.state.keyword} onChange={this.handleInputChange} />
                        <input type="submit" value="dodaj" />
                    </label>
                    <br />
                    <label className="recipe">Wpisz przepis
                        <textarea onChange={this.handleTextareaChange} value={this.state.recipe}/>
                    </label>
                    <br />
                    <label>Czy to koniec?
                        <input type="checkbox" onChange={this.handleCheckboxChange} checked={this.state.sure} />
                    </label>
                    <br />
                    <input type="submit" value="Zapisz" className="btn" />
                </form>
            </div>
        );
    }
}


export default AddRecipe;