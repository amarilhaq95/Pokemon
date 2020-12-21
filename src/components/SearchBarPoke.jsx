
import React from 'react';

const SearchBarPoke = ({ onInputChange, onSearchPoke, isButtonDisable }) =>
(
    <div className="form-group class-sm-3">
        <input type="name" className="form-control" name="Search" onChange={onInputChange} placeholder="Search pokemon name: bulbasaur, etc" />
        <button
            disabled={!isButtonDisable}
            className="btn btn-primary"
            style={{ "marginTop": "10px" }}
            type="submit"
            onClick={onSearchPoke} > Search </button>
    </div>
)

export default SearchBarPoke;