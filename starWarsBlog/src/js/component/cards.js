import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
const Cards = item => {
	const { store, actions } = useContext(Context);
	const valArray = actions.valArray(item);
	const keyArray = actions.keyArray(item);
	const name = Object.values(item)[0];
	return (
		<>
			<img className="card-img-top" src="http://placehold.it/500x325" />
			<div className="card-body">
				{valArray.slice(0, 5).map((item, index) => {
					return (
						<div key={index} className="p-text">
							<p className="title">{keyArray[index] + ": "}</p>
							<p className="value">{item}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};
export default Cards;
