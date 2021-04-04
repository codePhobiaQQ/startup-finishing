import React from 'react';
import {useDispatch} from "react-redux";
import {toggleMenu} from "../../redux/actions/HeaderActions";

const Burger = props => {

	const dispatch = useDispatch()

	return (
		<div className="burger" onClick={() => dispatch(toggleMenu())}>
			<span></span>
		</div>
	);
};

export default Burger;