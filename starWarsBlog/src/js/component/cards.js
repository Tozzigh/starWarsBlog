import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.scss"; //{name:"Sky", gender:"male", age:"30"}
const Cards = item => {
	const { store, actions } = useContext(Context);

	const char = actions.ciao(item);

	return (
		<>
			<img className="card-img-top" src="http://placehold.it/500x325" />
			<div className="card-body">{Object.keys(item).map((key, index) => {})}</div>
		</>
	);

	/*return (
		<>
			<img className="card-img-top" src="http://placehold.it/500x325" />
			<div className="card-body">
				<h4 className="card-title">{name}</h4>
				<p className="card-text">{"Gender: " + gender}</p>
				<p className="card-text">{"Birth_year: " + birth}</p>
				<p className="card-text">{"Height: " + height}</p>
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
	);*/
};
export default Cards;
