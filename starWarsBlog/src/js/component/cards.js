import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
const Cards = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="cards col-lg-2 col-md-6 mb-4 border border-secondary p-0">
			<img className="card-img-top" src="http://placehold.it/500x325" />
			<div className="card-body">
				<h4 className="card-title">John Doe</h4>
				<p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
				<div className="detailsLike">
					<button className="btn btn-primary">Learn more!</button>
					<button
						className="fa fa-heart border-0 bg-white"
						onClick={() => {
							console.log(actions.mappa());
						}}
					/>
				</div>
			</div>
		</div>
	);
};
export default Cards;
