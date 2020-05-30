const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			pullPeople: async () => {
				var store = getStore();
				var holder = [];
				var url = "https://swapi.dev/api/people/";
				let response = await fetch(url);
				let data = await response.json();
				if (response.ok) {
					data.results.map(dataN => {
						holder.push(dataN);
					});
					for (let pageNumber = 2; pageNumber < 100; pageNumber++) {
						let nextResponse = await fetch("https://swapi.dev/api/people/?page=" + pageNumber.toString());
						let nextData = await nextResponse.json();
						if (nextResponse.ok) {
							nextData.results.map(dataN => {
								holder.push(dataN);
							});
						} else {
							console.log(response.statusText);
							break;
						}
						if (nextData.next === null) {
							break;
						}
					}
					setStore({ people: holder });
				} else {
					console.log(response.statusText);
				}

				// while (url !== null) {
				// 	fetch(url)
				// 		.then(response => response.json())
				// 		.then(data => {
				// 			data.results.map(charNext => {
				// 				holder.push(charNext);
				// 			});
				// 			url = data.next !== null ? data.next.replace(":", "s:") : null;
				// 		});
				// }
				// setStore({ people: holder });
			},
			pullPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(response => response.json())
					.then(data => getActions().loadSomePlanets(data.results));
			},
			loadSomePlanets: data => {
				setStore({ planets: data });
			},
			pullVehicles: () => {
				fetch("https://swapi.dev/api/vehicles/")
					.then(response => response.json())
					.then(data => getActions().loadSomeVehicles(data.results));
			},
			loadSomeVehicles: data => {
				setStore({ vehicles: data });
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
