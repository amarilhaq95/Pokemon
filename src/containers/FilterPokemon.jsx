import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterPokeBar from '../components/FilterPokeBar';
import ComparePokeForm from '../components/ComparePokeForm';
import { fetchTypePoke, fetchPoke, togglePokeDetail, togglePokeCompare, handleInputCompare, fetchComparePoke } from '../actions';


class FilterPokemon extends Component {
    constructor(props) {
        super(props);

        this.handleSubmitType = this.handleSubmitType.bind(this)
        this.handleSubmitAll = this.handleSubmitAll.bind(this)
        this.handleToggleCompare = this.handleToggleCompare.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmitCompare = this.handleSubmitCompare.bind(this)
    }

    componentDidMount() { }

    handleSubmitType(e) {
        e.preventDefault();

        const { fetchAllTypePoke, onToggle } = this.props
        fetchAllTypePoke();
        onToggle(true)
    }

    handleSubmitAll(e) {
        e.preventDefault();

        const { fetchAllPoke, onToggle } = this.props
        fetchAllPoke();
        onToggle(true)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        const { onInputChange } = this.props
        onInputChange(name, value)
    }

    handleToggleCompare(e) {
        e.preventDefault();

        const { onToggleCompare } = this.props
        onToggleCompare()
    }

    handleSubmitCompare(e) {
        e.preventDefault();

        const { fetchComparePokes, onToggle } = this.props
        fetchComparePokes(this.props.comparePoke)
        onToggle(false)
    }

    render() {
        return (
            <div>
                <FilterPokeBar onAllPoke={this.handleSubmitAll} onFilterPoke={this.handleSubmitType} onComparePoke={this.handleToggleCompare} />
                {!this.props.isPokeCompare ?
                    <ComparePokeForm
                        onInputChange={this.handleInputChange}
                        onCompareSubmit={this.handleSubmitCompare}
                        inputValue={this.props.comparePoke} /> :
                    null
                }
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        pokeList: state.poke.pokeList,
        pokeCompareData: state.poke.pokeDetail.pokeCompareData,
        isPokeCompare: state.ui.isPokeCompareHidden,
        comparePoke: state.poke.comparePoke,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchAllPoke: () => dispatch(fetchPoke()),
        fetchAllTypePoke: () => dispatch(fetchTypePoke()),
        fetchComparePokes: (param) => dispatch(fetchComparePoke(param)),
        onToggle: (param) => {
            dispatch(togglePokeDetail(param))
        },
        onToggleCompare: (param) => {
            dispatch(togglePokeCompare(param))
        },
        onInputChange: (name, value) => {
            dispatch(handleInputCompare(name, value));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPokemon)

