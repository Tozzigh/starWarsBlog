import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/index.scss";

import Cards from "../../js/component/cards.js";
import CardsP from "../../js/component/cardsP.js";
import CardsV from "../../js/component/cardsV.js";

const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid m-0 h-100">
			<div className="row ml-1">
				<h1>Favorites</h1>
				<hr />
				{}
			</div>
			<div className="row ml-1">
				<h1>Peoples</h1>
				<hr />
				{store.people.map((item, index) => {
					return (
						<div className="card col-lg-2 col-md-6 mb-4 border border-secondary p-0 m-3" key={index}>
							{Cards(item.name, item.gender, item.birth_year, item.height, index)}
						</div>
					);
				})}
			</div>
			<div className="row ml-1">
				<h1>Planets</h1>
				<hr />
				{store.planets.map((item, index) => {
					return (
						<div className="card col-lg-2 col-md-6 mb-4 border border-secondary p-0 m-3" key={index}>
							{CardsP(item.name, item.population, item.terrain, item.gravity, index)}
						</div>
					);
				})}
			</div>
			<div className="row ml-1">
				<h1>Vehicles</h1>
				<hr />
				{store.vehicles.map((item, index) => {
					return (
						<div className="card col-lg-2 col-md-6 mb-4 border border-secondary p-0 m-3" key={index}>
							{CardsV(item.name, item.model, item.vehicle_class, item.passengers, index)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
