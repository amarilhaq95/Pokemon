import React, { Component } from 'react';
import '../Contacts.css';
import PokeList from '../components/PokeList';
import PokemonDetail from '../containers/PokemonDetail';
import { connect } from 'react-redux';
import { fetchPoke, fetchByTypePoke, togglePokeDetail, fetchPokeById } from '../actions';

class Pokemon extends Component {

  constructor(props) {
    super(props);
    this.returnPokeList = this.returnPokeList.bind(this);
    this.onClickCard = this.onClickCard.bind(this)
  }

  componentDidMount() {
    const { fetchAllPoke } = this.props
    fetchAllPoke();
  }

  returnPokeList() {
    return this.props.pokeList;
  }

  onClickCard(e) {
    e.preventDefault();
    const element = e.currentTarget.getElementsByClassName('listDataPoke')[0]
    const urlType = element.getAttribute('urlType')
    const urlId = element.getAttribute('urlId')
    const name = element.getAttribute('name')
    const { fetchPokeByType, onToggle, fetchPokeDetail } = this.props

    if (urlType) {
      fetchPokeByType(urlType)
    } else {
      onToggle()
      fetchPokeDetail(urlId || name)
    }
  }

  render() {
    const returnPokeList = this.returnPokeList()
    const iscompareData = !!returnPokeList.length
    return (
      <div>
        {
          returnPokeList && returnPokeList.length && this.props.isPokeDetailHide ?
            <PokeList pokeList={returnPokeList} toDetails={this.onClickCard} /> : null
        }
        {!this.props.isPokeDetailHide ? <PokemonDetail /> : null}

        {/* {iscompareData ? null : <span>Pokemon name is invalid, please input name pokemon.</span>} */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pokeList: state.poke.pokeList,
    isPokeDetailHide: state.ui.isPokeDetailHidden,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllPoke: () => dispatch(fetchPoke()),
    fetchPokeByType: (param) => dispatch(fetchByTypePoke(param)),
    fetchPokeDetail: (param) => dispatch(fetchPokeById(param)),
    onToggle: () => {
      dispatch(togglePokeDetail());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);

