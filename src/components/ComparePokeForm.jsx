
import React from 'react';

const ComparePokeForm = ({ onInputChange, onCompareSubmit, inputValue }) =>
(
    <form style={{ marginBottom: '1rem' }}>
        <div className="form-group">
            <input type="email" className="form-control" name="poke1" onChange={onInputChange} placeholder="name pokemon: pikachu, etc" />
        </div>
        <div style={{ textAlign: 'center' }}>
            <label htmlFor="fullName">With</label>
        </div>
        <div className="form-group class-sm-3">
            <input type="name" className="form-control" name="poke2" onChange={onInputChange} placeholder="name pokemon: raichu, etc" />
        </div>

        <button className="btn btn-primary" type="submit" onClick={onCompareSubmit} disabled={!(!!inputValue.poke2 && !!inputValue.poke1)}> Submit </button>
    </form>
)

export default ComparePokeForm;