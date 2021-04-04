import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {hideLogIn} from "../../redux/actions/HeaderActions";
import { v4 as uuidv4 } from 'uuid';
import {registration} from "../../redux/actions/UserActions";

const RegisterPopup = props => {

	const dispatch = useDispatch()
	const isOpened = useSelector(state => state.HeaderReducers.isLogInOpen)

	const clickCloseHandler = () => {
		dispatch(hideLogIn())
		document.querySelector('body').style.overflow = 'visible'
	}

	const [name, changeName] = useState('')
	const [soclink, changeLink] = useState('')
	const [tel, changeTel] = useState('')
	const [email, changeEmail] = useState('')
	const [sex, changeSex] = useState('')
	const [age, changeAge] = useState('')
	const [password, changePassw] = useState('')
	const [PasswConf, changePasswConf] = useState('')
	const [address, changeAddress] = useState('')
	const ID = uuidv4()

	const registerHandler = (event) => {
		event.preventDefault()
		registration([name, soclink, tel, email, sex, age, password, address, ID])
	}
	return (
		<div className={isOpened ? "modal active modal_show" : "modal modal_hide"}>
			<div className="modal_wrapper">

				<div
					className="modal_close"
					onClick={clickCloseHandler}
				></div>

				<div className="modal_title">Регистрация</div>
				<div className="modal_container">
					<form>
						<input value={name} onChange={event =>  changeName(event.target.value)} type="text" name="full-name" id="full-name" placeholder="ФИО"/>
						<input value={soclink} onChange={event =>  changeLink(event.target.value)} type="text" name="socila-page" id="social-page" placeholder="Ссылка на соцсеть" />
						<input value={tel} onChange={event =>  changeTel(event.target.value)} type="tel" name="phone_modal" id="phone_modal" placeholder="Номер телефона (видно только Вам)"/>
						<div className="email">
							<input value={email} onChange={event =>  changeEmail(event.target.value)} type="email" name="email" id="email" placeholder="Email"/>
						</div>
						<div className="email">
							<input value={password} onChange={event =>  changePassw(event.target.value)} type="password" name="password" placeholder="Пароль"/>
							<input value={PasswConf} onChange={event =>  changePasswConf(event.target.value)} type="password" name="passwordConf" placeholder="Подтверждение"/>
						</div>
						<div className="age">
							<input value={sex} onChange={event =>  changeSex(event.target.value)} type="text" name="sex" id="sex" placeholder="Пол" />
							<input value={age} onChange={event =>  changeAge(event.target.value)} type="text" name="age" id="age" placeholder="Возраст" />
						</div>
						<input value={address} onChange={event =>  changeAddress(event.target.value)} type="text" name="location" id="location" placeholder="Место жительства (Населенный пункт)"/>
						<div className="check_age">
							<input className="radio-btn" type="radio" name="age16" id="age16" required="true"/>
							<label htmlFor="age16">Вы действительно старше 16 лет</label>
						</div>
						<button onClick={(event) => registerHandler(event)} className="modal_submit">Зарегистрироваться</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterPopup;