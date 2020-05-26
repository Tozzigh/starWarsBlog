import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

const Planets = () => {
	return (
		<div className="text-center mt-5">
			<h1>PLANETS!</h1>
			<p>
				<img src={rigoImage} />
			</p>
		</div>
	);
};

export default Planets;
