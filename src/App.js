import React from 'react';
import './App.css';
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