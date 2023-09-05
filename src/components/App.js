import React from 'react';
import NavBar from './NavBar';
import GifListContainer from './GifListContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <GifListContainer />
      </div>
    );
  }
}

export default App;

