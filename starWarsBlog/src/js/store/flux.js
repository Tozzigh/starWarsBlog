const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			single: ""
		},
		actions: {
			loadSingle: data => {
				setStore({ single: data });
			},
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
					const checkDuplicate = store.favorites.map(item => {
						return Object.values(item)[0];
					});
					if (!checkDuplicate.includes(Object.values(card)[0])) {
						setStore({ favorites: [...store.favorites, card] });
					}
				}
			},
			loadSingleView: () => {
				const store = getStore();
				const single = store.single.name;
				const people = store.people;
				const planets = store.planets;
				const vehicles = store.vehicles;
				for (let x = 0; x < people.length; x++) {
					if (Object.values(people[x])[0] === single) {
						return people[x];
					}
				}
				for (let x = 0; x < planets.length; x++) {
					if (Object.values(planets[x])[0] === single) {
						return planets[x];
					}
				}
				for (let x = 0; x < vehicles.length; x++) {
					if (Object.values(vehicles[x])[0] === single) {
						return vehicles[x];
					}
				}
			}
		}
	};
};

export default getState;
