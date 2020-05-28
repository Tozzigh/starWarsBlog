import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
const CardsV = (name, model, vehicle_class, passenger) => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<img className="card-img-top" src="http://placehold.it/500x325" />
			<div className="card-body">
				<h4 className="card-title">{name}</h4>
				<p className="card-text">{"Model: " + model}</p>
				<p className="card-text">{"Vehicle_class: " + vehicle_class}</p>
				<p className="card-text">{"Passenger: " + passenger}</p>
			</div>
			<div className="card-footer">
				<Link to={{ pathname: "/single/" + name.replace(" ", "").toLowerCase(), state: { name: name } }}>
					<button className="btn btn-primary" onClick={() => actions.loadSingle({ name })}>
						Learn more!
					</button>
				</Link>
				<button
					className="fa fa-heart border-0"
					onClick={() =>
						actions.loadSomeFavorites({
							Name: name,
							Model: model,
							Vehicle_class: vehicle_class,
							Passenger: passenger
						})
					}
				/>
			</div>
		</>
	);
};
export default CardsV;
