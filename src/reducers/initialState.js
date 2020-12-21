const initialState = {
	contacts: {
		contactList: [],
		newContact: {
			name: '',
			surname: '',
			email: '',
			address: '',
			phone: ''
		},
		searchText: 'a'
	},

	poke: {
		pokeList: [],
		pokeSearchText: '',
		pokeTypeList: [],
		pokeDetail: {
			pokeCompareData: {
				poke1: {},
				poke2: {}
			},
			name: '-',
			height: 'none',
			weight: 'none',
			abilities: 'none',
			moves: 'none',
			types: 'none',
		},
		comparePoke: {
			poke1: '',
			poke2: '',

		}
	},

	ui: {
		isAddContactFormHidden: true,
		isPokeDetailHidden: true,
		isPokeCompareHidden: true,
	}
}

export default initialState;