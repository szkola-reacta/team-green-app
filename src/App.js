import React from 'react';
import './App.css';
import Dashboard from './User/Dashboard/Dashboard';

import AddRecipe from './Components/AddRecipe';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AddRecipe />
    </div>
  );
}

export default App;


import Footer from './Footer';
import Content from './Content';

class App extends React.Component {

  state = {
    recipes: []
  }

  componentDidMount() {
      fetch('./database.json')
      .then(response => response.json())
      .then(data => this.setState({ recipes: data }));
  }

  render() {
    const { recipes } = this.state;
    return (
      <div className="App">
        <Content recipes={recipes} />
        <Footer />
      </div>
    );
  }
}

export default App;
