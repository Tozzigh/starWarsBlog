import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardsV from "../../js/component/cardsV.js";
import "../../styles/index.scss";

const Vehicles = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<h1 className="text-center mt-4">Vehicles</h1>
			<div className="views mt-5">
				{store.vehicles.map((item, index) => {
					return (
						<div className="card col-lg-2 col-md-6 mb-4 border border-secondary p-0 m-3" key={index}>
							{CardsV(item.name, item.model, item.vehicle_class, item.passengers)}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Vehicles;
