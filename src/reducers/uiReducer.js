import initialState from './initialState';

/* A reducer explicitly for the UI. */
export default function uiReducer(state = initialState.ui, action) {
	switch (action.type) {
		case "TOGGLE_CONTACT_FORM": {
			return {
				...state, isAddContactFormHidden: !state.isAddContactFormHidden
			}

		}

		case "TOGGLE_POKE_DETAIL": {
			return {
				...state, isPokeDetailHidden: typeof action.payload === 'boolean' ? action.payload : !state.isPokeDetailHidden
			}

		}

		case "TOGGLE_POKE_COMPARE": {
			return {
				...state, isPokeCompareHidden: action.payload ? action.payload : !state.isPokeCompareHidden
			}

		}

		default: return state;
	}
}
