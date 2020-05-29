import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.scss"; //{name:"Sky", gender:"male", age:"30"}
const Cards = item => {
	const { store, actions } = useContext(Context);
	const valArray = actions.valArray(item);
	const keyArray = actions.keyArray(item);
	const name = Object.values(item)[0];
	return (
		<>
			<img className="card-img-top" src="http://placehold.it/500x325" />
			<div className="card-body">
				<ul>
					{valArray.map((val, index) => {
						return (
							<li key={index}>
								<h5>{keyArray[index] + ":  "}</h5>
								<p className="value">{val}</p>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="card-footer">
				<Link
					to={{
						pathname: "/single/" + name.replace(" ", "").toLowerCase(),
						state: { name: name }
					}}>
					<button className="btn btn-primary" onClick={() => actions.loadSingle({ name })}>
						Learn more!
					</button>
				</Link>
				<button className="fa fa-heart border-0" onClick={() => actions.loadSomeFavorites(item)} />
			</div>
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
