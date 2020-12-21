import React, { Component } from 'react';
import '../Contacts.css';
import PokeDetail from '../components/PokeDetail';
import { connect } from 'react-redux';

class PokemonDetail extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <PokeDetail data={this.props.pokeDetails}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pokeDetails: state.poke.pokeDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);

