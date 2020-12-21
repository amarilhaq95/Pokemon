import React from 'react';
import '../Contacts.css';
const PokeDetail = ({ data }) => {
    const isCompare = !!data.pokeCompareData
    const iscompareData = data.name || (data.pokeCompareData && !!data.pokeCompareData.poke1.name)
    var dataDetail = []

    if (isCompare) {
        dataDetail = [data.pokeCompareData.poke1, data.pokeCompareData.poke2]
    } else {
        dataDetail = [data]
    }

    return (
        <div>
            {iscompareData ?
                <table id='students' style={{ width: "100%", border: '3px', borderCollapse: 'collapse' }}>
                    <tr>
                        {dataDetail.map(
                            (dataPoke, id) => {
                                return (
                                    <td style={{ boxSizing: 'unset' }}>
                                        < div>
                                            < div className="col-xs-4 col-sm-3">
                                                <img src="img/profile_img.png" alt={dataPoke.name} className="img-fluid rounded-circle" />
                                            </div>
                                            <div className="col-xs-8 col-sm-9">
                                                <span className="name">{dataPoke.name}</span><br />

                                                <span className="visible-xs"> Abilities:
                                        {dataPoke.abilities && dataPoke.abilities !== 'none' ? dataPoke.abilities.map(
                                                    (ability, id) => {
                                                        return (
                                                            <span className="text-muted">{id === (dataPoke.abilities.length - 1) ? `${ability.ability.name}. ` : `${ability.ability.name}, `}</span>
                                                        )
                                                    }
                                                ) : null}
                                                    <br /></span>

                                                <span className="visible-xs"> Types:
                                        {dataPoke.types && dataPoke.types !== 'none' ? dataPoke.types.map(
                                                    (type, id) => {
                                                        return (
                                                            <span className="text-muted">{id === (dataPoke.types.length - 1) ? `${type.type.name}. ` : `${type.type.name}, `}</span>
                                                        )
                                                    }
                                                ) : null}
                                                    <br /></span>

                                                <span className="visible-xs"> Types:
                                        {dataPoke.moves && dataPoke.moves !== 'none' ? dataPoke.moves.slice(1, 3).map(
                                                    (move, id) => {
                                                        return (
                                                            <span className="text-muted">{id === (dataPoke.moves.slice(1, 3).length - 1) ? `${move.move.name}. ` : `${move.move.name}, `}</span>
                                                        )
                                                    }
                                                ) : null}
                                                    <br /></span>

                                                <span className="visible-xs"> Weight: <span className="text-muted">{`${dataPoke.weight} lb`}</span><br /></span>
                                                <span className="visible-xs"> Height: <span className="text-muted">{`${dataPoke.height} ft`}</span><br /></span>

                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </td>
                                )
                            })}
                    </tr>
                </table>
                : 
                // <span>Pokemon name is invalid, please input name pokemon.</span>
                null
                }
        </div >

    )
}

export default PokeDetail;