const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadSomePeople: data => {
				setStore({ people: data });
			},
			loadSomePlanets: data => {
				setStore({ planets: data });
			},

			mappa: () => {
				const store = getStore();
				return store.people;
			}
		}
	};
};

export default getState;
