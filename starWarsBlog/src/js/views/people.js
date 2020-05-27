import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Cards from "../../js/component/cards.js";
import "../../styles/index.scss";

const People = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="views mt-5">
			{store.people.map((item, index) => {
				return (
					<div className="card col-lg-2 col-md-6 mb-4 border border-secondary p-0 m-3" key={index}>
						{Cards(item.name, item.gender, item.birth_year, item.height)}
					</div>
				);
			})}
		</div>
	);
};

export default People;
