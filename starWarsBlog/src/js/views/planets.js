import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Cards from "../../js/component/cards.js";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
const Planets = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<h1 className="text-center mt-4">Planets</h1>
			<div className="views mt-5">
				{store.planets.map((item, index) => {
					const name = Object.values(item)[0];
					return (
						<div
							className="card bg-dark col-lg-2 col-md-6 mb-4 border border-secondary p-0 m-3"
							key={index}>
							{Cards(item)}
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
								<button
									className="fa fa-heart border-0"
									onClick={() => actions.loadSomeFavorites(item)}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Planets;
