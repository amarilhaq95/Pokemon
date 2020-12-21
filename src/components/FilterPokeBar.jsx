
import React from 'react';

const FilterPokeBar = ({ onAllPoke, onFilterPoke, onComparePoke }) =>
(
    <div className="form-group class-sm-3">
        <button
            className="btn btn-primary"
            style={{ "marginTop": "10px", marginRight: '10px' }}
            type="submit"
            onClick={onAllPoke} > Show All </button>
        <button
            className="btn btn-primary"
            style={{ "marginTop": "10px", marginRight: '10px' }}
            type="submit"
            onClick={onFilterPoke} > Filter by type </button>
        <button
            className="btn btn-primary"
            style={{ "marginTop": "10px" }}
            type="submit"
            onClick={onComparePoke} > compare </button>
    </div>
)

export default FilterPokeBar;