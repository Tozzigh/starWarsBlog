import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Cards from "../../js/component/cards.js";
const Home = () => (
	<div className="container-fluid m-0 h-100">
		<div className="row ml-1">
			<h1>Favorites</h1>
			<hr />
			{Cards()}
		</div>
		<div className="row ml-1">
			<h1>Peoples</h1>
			<hr />
			{Cards()}
		</div>
		<div className="row ml-1">
			<h1>Planets</h1>
			<hr />
			{Cards()}
		</div>
		<div className="row ml-1">
			<h1>Vehicles</h1>
			<hr />
			{Cards()}
		</div>
	</div>
);

export default Home;
