import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import { Gallery } from './Gallery';

class App extends Component {
  state = {
    query: '',
    giphys: []
  }

  search() {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=qvqW8flkTkgULqTSB3ay2tLJ3w3yTEjF&q=${this.state.query}&limit=50&offset=0&rating=G&lang=en`)
    .then(response => response.json())
    .then(json => {
      const { data } = json;
      this.setState({giphys: data, query: ''});
    })
  } 
  
  render() {
    return (
      <div className="App">
        <div className="App-title">Explore GIFs</div>
        <FormGroup>
          <InputGroup bsSize="large">
            <FormControl
              type="text"
              placeholder="Search for the giphys"
              bsClass="giphy-input"
              value={this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search()
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="music"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div>
          <Gallery giphys={this.state.giphys} />
        </div>
        </div>
    );
  }
}

export default App;
