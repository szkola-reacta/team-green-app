import React from 'react';
import './App.css';

import Header from './Header';
import Home from './Home/Home';
import Footer from './Footer';
import Container from '@material-ui/core/Container';

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Container maxWidth="lg">
          <Header />
          <Home />
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
