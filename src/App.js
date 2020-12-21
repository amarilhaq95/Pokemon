import React, { Component } from 'react';

import Pokemon from './containers/Pokemon.jsx'
import SearchPokemon from './containers/SearchPokemon.jsx'
import FilterPokemon from './containers/FilterPokemon.jsx'

/*App component starts here */
class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-7 offset-sm-2">
            <div style={{ textAlign: "center", marginBottom: '50px' }}>
              <span className="title">Pokemon</span>
            </div>
            <SearchPokemon />
            <div style={{ textAlign: "right" }}>
              <FilterPokemon />
            </div>
            <Pokemon />
          </div>
        </div>
      </div>



    );
  }
}

export default App;
