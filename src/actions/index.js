import axios from 'axios';

export const addContact = () => {
	return {
		type: "ADD_CONTACT",

	}
}

export const handleInputChange = (name, value) => {
	return {

		type: "HANDLE_INPUT_CHANGE",
		payload: { [name]: value }
	}
}

export const toggleContactForm = () => {
	return {
		type: "TOGGLE_CONTACT_FORM",
	}
}


export const requestContacts = () => {
	return {
		type: "REQUEST_CONTACTS",
		payload: true
	}
}

export const receiveContacts = (json) => {
	return {
		type: "RECEIVE_CONTACTS",
		payload: json.contacts
	}
}

export const receiveContactsError = (err) => {
	return {
		type: "RECEIVE_CONTACTS",
		payload: err
	}
}

export const fetchContacts = () => {
	return (dispatch) => {
		dispatch(requestContacts());
		return axios
			.get('https://demo1443058.mockable.io/codeproject_tutorial/api/contacts')
			.then(response => {
				dispatch(receiveContacts(response.data))
			})
			.catch(err => {
				dispatch(receiveContactsError(err))
			})
	}
}

// pokeee

export const handleInputCompare = (name, value) => {
	return {

		type: "HANDLE_INPUT_COMPARE",
		payload: { [name]: value }
	}
}

export const handleInputPoke = (value) => {
	return {

		type: "HANDLE_INPUT_POKE",
		payload: value
	}
}

export const requestPoke = () => {
	return {
		type: "REQUEST_POKE",
		payload: true
	}
}

export const requestPokeById = () => {
	return {
		type: "REQUEST_POKE_ID",
		payload: true
	}
}

export const receivePoke = (json) => {
	return {
		type: "RECEIVE_POKE",
		payload: json.results
	}
}

export const receivePokeById = (json) => {
	return {
		type: "RECEIVE_POKE_ID",
		payload: json
	}
}

export const receivePokeCompare = (json) => {
	return {
		type: "RECEIVE_POKE_COMPARE",
		payload: json
	}
}

export const receivePokeError = (err) => {
	return {
		type: "RECEIVE_POKE",
		payload: err
	}
}

export const togglePokeList = () => {
	return {
		type: "TOGGLE_POKE",
	}
}

export const receiveTypePoke = (json) => {
	return {
		type: "RECEIVE_TYPE_POKE",
		payload: json
	}
}

export const togglePokeDetail = (param = null) => {
	return {
		type: "TOGGLE_POKE_DETAIL",
		payload: param

	}
}

export const togglePokeCompare = (param = null) => {
	return {
		type: "TOGGLE_POKE_COMPARE",
		payload: param

	}
}


export const fetchPoke = () => {
	return (dispatch) => {
		dispatch(requestPoke());
		return axios
			.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118')
			.then(response => {
				dispatch(receivePoke(response.data))
			})
			.catch(err => {
				dispatch(receivePokeError({ results: [] }))
			})
	}
}

export const fetchPokeById = (param) => {
	return (dispatch) => {
		dispatch(requestPokeById());
		return axios
			.get(`https://pokeapi.co/api/v2/pokemon/${param.toLocaleLowerCase()}`)
			.then(response => {
				dispatch(receivePokeById(response.data))
			})
			.catch(err => {
				dispatch(receivePokeError({
					pokeDetail: {
						name: '-',
						height: 'none',
						weight: 'none',
						abilities: 'none',
						moves: 'none',
						types: 'none',
					}
				}))
			})
	}
}

export const fetchComparePoke = (param) => {
	return (dispatch) => {
		dispatch(requestPokeById());
		return axios
			.get(`https://pokeapi.co/api/v2/pokemon/${param.poke1.toLocaleLowerCase()}`)
			.then(responsePoke1 => {
				axios.get(`https://pokeapi.co/api/v2/pokemon/${param.poke2.toLocaleLowerCase()}`)
					.then(responsePoke2 => {
						dispatch(receivePokeCompare({ poke1: responsePoke1.data, poke2: responsePoke2.data }))
					}).catch(err => {
						dispatch(receivePokeCompare({ poke1: {}, poke2: {} }))
					})
			})
			.catch(err => {
				dispatch(receivePokeCompare({ poke1: {}, poke2: {} }))
			})
	}
}

export const fetchTypePoke = () => {
	return (dispatch) => {
		dispatch(requestPoke());
		return axios
			.get('https://pokeapi.co/api/v2/type')
			.then(response => {
				dispatch(receivePoke(response.data))
			})
			.catch(err => {
				dispatch(receivePoke({ results: [] }))
			})
	}
}

export const fetchByTypePoke = (param) => {
	return (dispatch) => {
		dispatch(requestPoke());
		return axios
			.get(`https://pokeapi.co/api/v2/type/${param.toLocaleLowerCase()}`)
			.then(response => {
				var result = []
				if (response && response.data && response.data.pokemon) {
					const dataResults = response.data.pokemon
					dataResults.map((dataPoke) => {
						result.push({ url: dataPoke.pokemon.url, name: dataPoke.pokemon.name })
					})
				}
				dispatch(receivePoke({ results: result }))
			})
			.catch(err => {
				dispatch(receivePoke({ results: [] }))
			})
	}
}

export const fetchSearchPoke = (param) => {
	return (dispatch) => {
		dispatch(requestPoke());
		return axios
			.get(`https://pokeapi.co/api/v2/pokemon/${param.toLocaleLowerCase()}`)
			.then(response => {
				if (response.data && response.data.forms) {
					dispatch(receivePoke({ results: response.data.forms }))
				}
				dispatch(togglePokeDetail(true))
			})
			.catch(err => {
				dispatch(receivePokeError([]))
				dispatch(togglePokeDetail(true))
			})
	}
}

export const searchContacts = (searchText) => {
	return (dispatch) => {
		dispatch(handleSearchInput(searchText));
		return {
			type: "SEARCH_CONTACTS"
		}
	}
}

export const handleSearchInput = (searchText) => {
	return {
		type: "HANDLE_SEARCH_INPUT",
		payload: searchText
	};
}


