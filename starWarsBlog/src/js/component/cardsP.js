import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
const CardsP = (name, population, terrain, gravity) => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<img className="card-img-top" src="http://placehold.it/500x325" />
			<div className="card-body">
				<h4 className="card-title">{name}</h4>
				<p className="card-text">{"Population: " + population}</p>
				<p className="card-text">{"Terrain: " + terrain}</p>
				<p className="card-text">{"Gravity: " + gravity}</p>
			</div>
			<div className="card-footer">
				<Link to={{ pathname: "/single/" + name.replace(" ", "").toLowerCase(), state: { name: { name } } }}>
					<button className="btn btn-primary">Learn more!</button>
				</Link>
				<button
					className="fa fa-heart border-0"
					onClick={() =>
						actions.loadSomeFavorites({
							Name: name,
							Population: population,
							Terrain: terrain,
							Gravity: gravity
						})
					}
				/>
			</div>
		</>
	);
};
export default CardsP;
