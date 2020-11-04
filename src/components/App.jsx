import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit = async (term) => {
    const data = await axios.get('https://api.unsplash.com/search/photos',{
      params: { query: term },
      headers: {
        Authorization: 'Client-ID IR3M-UUwDlFl0VvhNOLkKavIQpHoO2DJhAWeENEYhdM',
      }
    });
    console.log(data.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }} > 
        <SearchBar onSubmit={ this.onSearchSubmit } /> 
      </div>
    )
  }
}

export default App;