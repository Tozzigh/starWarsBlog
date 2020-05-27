import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);
		useEffect(() => {
			fetch("https://swapi.dev/api/people/", {
				method: "GET",
				headers: {}
			})
				.then(response => {
					return response.json();
				})
				.then(data => state.actions.loadSomePeople(data.results));
		}, []);

		useEffect(() => {
			fetch("https://swapi.dev/api/planets/", {
				method: "GET",
				headers: {}
			})
				.then(response => {
					return response.json();
				})
				.then(data => state.actions.loadSomePlanets(data.results));
		}, []);

		useEffect(() => {
			fetch("https://swapi.dev/api/vehicles/")
				.then(response => response.json())
				.then(data => state.actions.loadSomeVehicles(data.results));
		}, []);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
