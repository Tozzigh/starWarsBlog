const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: []
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
			}
		}
	};
};

export default getState;
