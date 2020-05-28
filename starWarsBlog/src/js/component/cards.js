import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
const Cards = (name, gender, birth, height) => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<img className="card-img-top" src="http://placehold.it/500x325" />
			<div className="card-body">
				<h4 className="card-title">{name}</h4>
				<p className="card-text">{"Gender: " + gender}</p>
				<p className="card-text">{"Birth_year: " + birth}</p>
				<p className="card-text">{"Height: " + height}</p>
			</div>
			<div className="card-footer">
				<button className="btn btn-primary" onClick={() => console.log(store)}>
					Learn more!
				</button>
				<button
					className="fa fa-heart border-0"
					onClick={() =>
						actions.loadSomeFavorites({
							Name: name,
							Gender: gender,
							Birth_yeat: birth,
							Height: height
						})
					}
				/>
			</div>
		</>
	);
};
export default Cards;
