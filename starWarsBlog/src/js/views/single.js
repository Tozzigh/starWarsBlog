import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/index.scss";

const Single = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="single">
			<div className="card text-center text-danger col-lg-8 col-md-6 mb-4 border border-secondary p-0 m-3">
				<div className="card-body">
					<p className="card-text">
						{Object.keys(actions.loadSingleView())[0].toUpperCase() + ":  "}
						{Object.values(actions.loadSingleView())[0]}
					</p>
					<p className="card-text">
						{Object.keys(actions.loadSingleView())[1].toUpperCase() + ":  "}
						{Object.values(actions.loadSingleView())[1]}
					</p>
					<p className="card-text">
						{Object.keys(actions.loadSingleView())[2].toUpperCase() + ":  "}
						{Object.values(actions.loadSingleView())[2]}
					</p>
					<p className="card-text">
						{Object.keys(actions.loadSingleView())[3].toUpperCase() + ":  "}
						{Object.values(actions.loadSingleView())[3]}
					</p>
					<p className="card-text">
						{Object.keys(actions.loadSingleView())[4].toUpperCase() + ":  "}
						{Object.values(actions.loadSingleView())[4]}
					</p>
					<p className="card-text">
						{Object.keys(actions.loadSingleView())[5].toUpperCase() + ":  "}
						{Object.values(actions.loadSingleView())[5]}
					</p>
					<p className="card-text">
						{Object.keys(actions.loadSingleView())[6].toUpperCase() + ":  "}
						{Object.values(actions.loadSingleView())[6]}
					</p>
					<p className="card-text">
						{Object.keys(actions.loadSingleView())[7].toUpperCase() + ":  "}
						{Object.values(actions.loadSingleView())[7]}
					</p>
					<p className="card-text">
						{Object.keys(actions.loadSingleView())[8].toUpperCase() + ":  "}
						{Object.values(actions.loadSingleView())[8]}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Single;
