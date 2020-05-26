import React from "react";
import "../../styles/home.scss";
const Cards = () => {
	return (
		<div className="card">
			<img className="card-img-top" />
			<div className="card-body">
				<h4 className="card-title">John Doe</h4>
				<p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
				<a href="#" className="btn btn-primary">
					See Profile
				</a>
			</div>
		</div>
	);
};
export default Cards;
