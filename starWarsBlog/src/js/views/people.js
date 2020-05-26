import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

const People = () => {
	return (
		<div className="text-center mt-5">
			<h1>PEOPLE!</h1>
			<p>
				<img src={rigoImage} />
			</p>
		</div>
	);
};

export default People;
