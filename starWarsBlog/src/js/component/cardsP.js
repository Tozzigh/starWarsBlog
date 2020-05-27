import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
const CardsP = (name, population, terrain, gravity) => {
	//const { store, actions } = useContext(Context);

	return (
		<>
			<img className="card-img-top" src="http://placehold.it/500x325" />
			<div className="card-body">
				<h4 className="card-title">{name}</h4>
				<p className="card-text">{"Population: " + population}</p>
				<p className="card-text">{"Terrain: " + terrain}</p>
				<p className="card-text">{"Gravity: " + gravity}</p>
				<div className="detailsLike">
					<button className="btn btn-primary">Learn more!</button>
					<button className="fa fa-heart border-0 bg-white" />
				</div>
			</div>
		</>
	);
};
export default CardsP;
