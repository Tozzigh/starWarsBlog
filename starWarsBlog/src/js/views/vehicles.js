import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Cards from "../../js/component/cardsV.js";
import "../../styles/index.scss";

const Vehicles = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<h1 className="text-center mt-4">Vehicles</h1>
			<div className="views mt-5">
				{store.vehicles.map((item, index) => {
					return (
						<div
							className="card bg-dark col-lg-2 col-md-6 mb-4 border border-secondary p-0 m-3"
							key={index}>
							{Cards(item)}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Vehicles;
