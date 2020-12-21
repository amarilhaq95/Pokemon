import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBarPoke from '../components/SearchBarPoke';
import { fetchSearchPoke, handleInputPoke } from '../actions';


class SearchPokemon extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    componentDidMount() { }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;

        const { onInputChange } = this.props
        onInputChange(value)
    }

    handleSubmit(e) {
        e.preventDefault();
        const { fetchSearchTypePoke } = this.props
        fetchSearchTypePoke(this.props.pokeSearchText)
    }

    render() {
        return (
            <div>
                <SearchBarPoke onSearchPoke={this.handleSubmit} onInputChange={this.handleInputChange} isButtonDisable={!!this.props.pokeSearchText} />
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        pokeSearchText: state.poke.pokeSearchText
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSearchTypePoke: (param) => dispatch(fetchSearchPoke(param)),
        onInputChange: (value) => {
            dispatch(handleInputPoke(value));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPokemon)

