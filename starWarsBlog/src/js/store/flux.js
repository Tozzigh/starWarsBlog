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
			loadSomeFavorites: card => {
				const store = getStore();
				if (store.favorites.length < 1) {
					setStore({ favorites: [...store.favorites, card] });
				} else {
					for (let obj in store.favorites) {
						if (Object.values(card)[0] !== Object.values(store.favorites[obj][0])) {
							setStore({ favorites: [...store.favorites, card] });
							console.log(card, store.favorites, Object.values(store.favorites[obj])[0]);
						}
					}
				}
			}
		}
	};
};

export default getState;
