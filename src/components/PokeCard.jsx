import React from 'react';
import '../Contacts.css';


const PokeCard = ({ pokemon, uriParamType, uriParamId }) => {

	return (
		<div className="listDataPoke" name = {pokemon.name} urlType={uriParamType} urlId={uriParamId}>
			<div className="col-xs-4 col-sm-3"> {
				<img src="img/profile_img.png" alt={pokemon.name} className="img-fluid rounded-circle" />
			}
			</div>
			<div className="col-xs-8 col-sm-9">
				<span className="name">{pokemon.name}</span><br />
			</div>
			<div className="clearfix"></div>
		</div>

	)
}

export default PokeCard;