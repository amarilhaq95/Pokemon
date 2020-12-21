import initialState from './initialState';

export default function pokeReducer(state = initialState.poke, action) {
    switch (action.type) {
        case "REQUEST_POKE":
        case "REQUEST_POKE_ID":
            return {
                ...state, isFetching: true
            }

        case "RECEIVE_POKE":
            return {
                ...state, pokeList: action.payload
            }

        case "RECEIVE_POKE_COMPARE":
            return {
                ...state, pokeDetail: {
                    pokeCompareData: {
                        poke1: action.payload.poke1,
                        poke2: action.payload.poke2
                    },
                    
                }
            }

        case "RECEIVE_POKE_ID":
            return {
                ...state, pokeDetail: action.payload
            }

        case "HANDLE_INPUT_POKE":
            return {
                ...state, isFetching: false, pokeSearchText: action.payload
            }

        case "RECEIVE_TYPE_POKE":
            return {
                ...state, isFetching: false, pokeTypeList: action.payload
            }

        case "HANDLE_INPUT_COMPARE":
            return {
                ...state, comparePoke: {
                    ...state.comparePoke, ...action.payload
                }
            }

        default: return state;
    }
}