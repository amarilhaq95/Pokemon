import React from 'react';
import PokeCard from './PokeCard';


const PokeList = (props, uriParam) => {
    return (<ul className="list-group" id="contact-list">
        {
            props.pokeList.map(
                (poke) =>
                    <li key={poke.name} className="list-group-item" onClick={props.toDetails}>
                        <PokeCard
                            pokemon={poke} toDetail={props.toDetails}
                            uriParamType={poke.url.split('type/')[1] ? poke.url.split('type/')[1] : ''}
                            uriParamId={poke.url.split('pokemon/')[1] ? poke.url.split('pokemon/')[1] : ''}
                        />
                    </li>
            )
        }
    </ul>)
}

export default PokeList;