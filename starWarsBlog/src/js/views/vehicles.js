import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.scss";

const Vehicles = () => {
	return (
		<div className="text-center mt-5">
			<h1>VEHICLES!</h1>
			<p>
				<img src={rigoImage} />
			</p>
		</div>
	);
};

export default Vehicles;
