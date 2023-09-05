import React from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends React.Component {
  state = {
    gifs: [],
  };

  componentDidMount() {
  }

  handleSearch = (query) => {
    const apiKey = 'H4McNQxPgjnmAnCveiQlerWzOH6jl8h5';

        const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;


    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        
        const firstThreeGifs = data.data.slice(0, 3);
        this.setState({ gifs: firstThreeGifs });
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  render() {
    return (
      <div>
        <GifSearch onSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
