import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardsP from "../../js/component/cardsP.js";
import "../../styles/index.scss";

const Planets = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<h1 className="text-center mt-4">Planets</h1>
			<div className="views mt-5">
				{store.planets.map((item, index) => {
					return (
						<div
							className="card bg-dark col-lg-2 col-md-6 mb-4 border border-secondary p-0 m-3"
							key={index}>
							{CardsP(item.name, item.population, item.terrain, item.gravity)}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Planets;
