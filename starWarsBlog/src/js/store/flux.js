const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadSomePeople: data => {
				setStore({ people: data });
			},
			loadSomePlanets: data => {
				setStore({ planets: data });
			},

			loadSomeVehicles: data => {
				setStore({ vehicles: data });
			},
			loadSomeFavorites: (uno, dos, tres) => {
				setStore({ favorites: [{ uno, dos, tres }] });
			}
		}
	};
};

export default getState;
