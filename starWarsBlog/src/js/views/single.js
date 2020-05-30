import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/index.scss";

const Single = () => {
	const { store, actions } = useContext(Context);
	const view = actions.loadSingleView();
	const viewValue = actions.valArray(view);
	const viewKey = actions.keyArray(view);
	return (
		<div className="single">
			<div className="card text-center text-danger col-lg-8 col-md-6 mb-4 border border-secondary p-0 m-3">
				<div className="card-body">
					{viewKey.map((item, index) => {
						return (
							<div className="singleView" key={index}>
								<h4 className="singleKey">{actions.toUpp(item) + ": "}</h4>
								<h4 className="singleValue">{viewValue[index]}</h4>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Single;
