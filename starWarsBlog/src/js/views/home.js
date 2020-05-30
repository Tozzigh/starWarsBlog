import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/index.scss";

import Cards from "../../js/component/cards.js";
import { Link } from "react-router-dom";
const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid home m-0 h-100">
			<div className="row ml-1">
				<h1>Favorites</h1>
				<hr />
				{store.favorites.map((item, index) => {
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
							</div>
						</div>
					);
				})}
			</div>
			<div className="row ml-1">
				<h1>Peoples</h1>
				<hr />
				{store.people.map((item, index) => {
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
			<div className="row ml-1">
				<h1>Planets</h1>
				<hr />
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
			<div className="row ml-1">
				<h1>Vehicles</h1>
				<hr />
				{store.vehicles.map((item, index) => {
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
		</div>
	);
};

export default Home;
