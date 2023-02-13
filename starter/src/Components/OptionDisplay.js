import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";

const OptionDisplay = () => {
	let currentPotientals = useSelector(selectPotentials);
	console.log(currentPotientals);
	const dispatch = useDispatch();
	return (
		<div className="stack">
			{currentPotientals.map((e, i) => {
				return (
					<h2
						key={e.name.offical}
						className="country-option"
						onClick={() => {
							dispatch(setDisplayCountry(currentPotientals[i]));
						}}
					>
						{e.name.common}
					</h2>
				);
			})}
		</div>
	);
};

export default OptionDisplay;
