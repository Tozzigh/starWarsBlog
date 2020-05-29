import React from "react";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			pullPeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(response => response.json())
					.then(data => getActions().loadSomePeople(data.results));
			},
			loadSomePeople: data => {
				setStore({ people: data });
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
			ciao: item => {
				const char = {};
				Object.keys(item).map((key, index) => {
					char[key] = item[key];
				});
				return char;
			}
		}
	};
};

export default getState;
