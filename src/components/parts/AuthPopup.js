import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {hideAuth} from "../../redux/actions/HeaderActions";
import {auth} from "../../redux/actions/UserActions";
import {useHistory} from "react-router-dom";

const AuthPopup = props => {

	const dispatch = useDispatch()
	const history = useHistory()
	const isOpened = useSelector(state => state.HeaderReducers.isAuthOpen)

	const clickCloseHandler = () => {
		dispatch(hideAuth())
		document.querySelector('body').style.overflow = 'visible'
	}

	const [email, changeEmail] = useState('')
	const [password, changePassw] = useState('')

	const authHandler = (event) => {
		event.preventDefault()
		dispatch(auth([email, password])).then((res) => {
			if (res !== 0) history.push('/lk')
		})
	}
	return (
		<div className={isOpened ? "modal active modal_show" : "modal modal_hide"}>
			<div className="modal_wrapper">

				<div
					className="modal_close"
					onClick={clickCloseHandler}
				></div>

				<div className="modal_title">Авторизация</div>
				<div className="modal_container">
					<form>
						<input value={email} onChange={event =>  changeEmail(event.target.value)} type="email" name="email" id="email" placeholder="Email"/>
						<input value={password} onChange={event =>  changePassw(event.target.value)} type="password" name="password" placeholder="Пароль"/>
						<button onClick={(event) => authHandler(event)} className="modal_submit">Войти</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AuthPopup;