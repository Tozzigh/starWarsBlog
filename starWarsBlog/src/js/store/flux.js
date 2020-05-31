const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			pullPeople: async (urlBase, arrayBase) => {
				var holder = [];
				var url = urlBase;
				for (let page = 0; page < 100; page++) {
					let response = await fetch(url);
					let data = await response.json();
					if (response.ok) {
						data.results.map(dataN => {
							holder.push(dataN);
						});
						url = data.next !== null ? data.next.replace(":", "s:") : null;
					} else {
						console.log(response.statusText);
						break;
					}
					if (data.next === null) {
						break;
					}
					if (arrayBase === "people") {
						setStore({ people: holder });
					} else if (arrayBase === "planets") {
						setStore({ planets: holder });
					} else if (arrayBase === "vehicles") {
						setStore({ vehicles: holder });
					}
				}
			},

			loadSingle: data => {
				setStore({ single: data });
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
			},
			valArray: item => {
				const valArray = [];
				Object.keys(item).map(key => {
					if (!Array.isArray(item[key]) && item[key].slice(0, 4) !== "http") {
						valArray.push(item[key]);
					}
				});
				return valArray;
			},
			keyArray: item => {
				const keyArray = [];
				Object.keys(item).map(key => {
					if (!Array.isArray(item[key]) && item[key].slice(0, 4) !== "http") {
						keyArray.push(getActions().toUpp(key));
					}
				});
				return keyArray;
			},
			toUpp: item => {
				return item.charAt(0).toUpperCase() + item.slice(1);
			}
		}
	};
};

export default getState;
