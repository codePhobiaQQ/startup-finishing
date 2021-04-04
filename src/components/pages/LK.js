import React, {useEffect, useState} from 'react'
import './LK.css'
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import avatar from '../../static/img/avatarLk.png'
import {changeField} from "../../redux/actions/ChangeFieldAction";
import {aplyRequest, fetchUsers, setTextsHome} from "../../redux/actions/AdminActions";
import AdminAllUsers from "../parts/AdminAllUsers";
import LkMainPart from "../parts/LKMainPart";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import 'bootstrap/dist/css/bootstrap.min.css';
import ChangingFieldsAdmin from "../parts/ChangingFieldsAdmin";
import RequestsId from "../parts/RequestsId";

const Lk = props => {

	const history = useHistory()
	const isAuth = useSelector(state => state.UserReducer)
	const dispatch = useDispatch()

	const [inputHandler, setInputHandler] = useState('')
	const [isPopupVisible, setPopupVisible] = useState(false)
	const [changingTitle, changingTitleHandler] = useState('')
	const [idForChange, setСhangeId] = useState('')

	const [key, setKey] = useState('home');

	useEffect(async () => {
		if (!isAuth.isAuth) history.push('/')
		console.log(isAuth.whatOpen)
	}, [])


	//Defautlt Popup Usage     //
	const changeUserPopup = (el) => {
		setPopupVisible(true)
		changingTitleHandler(el)
	}
	const changeHandler = (event) => {
		setInputHandler(event.target.value)
	}
	const closeHandler = () => {
		setInputHandler('')
		setPopupVisible(false)
	}
	//----------------------------

	const clickChangeHandler = () => {
		setInputHandler('')
		const data = {name: changingTitle, value: inputHandler}
		const whatOpened = isAuth.whatOpen


		if (whatOpened == "userFields") {
			const response = dispatch(changeField(data))
		}
		else if (whatOpened == "changeHomePageText") {
		  const response = dispatch(setTextsHome(data))
		}
		else if (whatOpened == "changeReqId") {
			const response = dispatch(aplyRequest({"value": inputHandler, "ID": idForChange}))
		}
		closeHandler()
	}


	return (
		<div className="lk">

			{isPopupVisible &&
			<div className="changeInput">
				<div
					className="modal_close"
					onClick={() => closeHandler()}
				></div>
				<h4 className='changingTitle'>{changingTitle}</h4>
				<input value={inputHandler} onChange={event => changeHandler(event)} type="text"/>
				<button onClick={() => clickChangeHandler()}>Изменить</button>
			</div>
			}

			<LkMainPart
				isAuth={isAuth}
				changeUserPopup={changeUserPopup}
			/>


			{isAuth.currentUser.role == 'admin'
				? <>
					<h2 className="adminPanelTitle">Админ Панель</h2>
					<Tabs
						id="controlled-tab-example"
						activeKey={key}
						onSelect={(k) => setKey(k)}
					>
						<Tab eventKey="home" title="Пользователи">
							<AdminAllUsers isAuth={isAuth}/>
						</Tab>
						<Tab eventKey="profile" title="Редактирование текстов главной страницы">
							<ChangingFieldsAdmin
								isAuth={isAuth}
								changeUserPopup={changeUserPopup}
							/>
						</Tab>
						<Tab eventKey="contact" title="Запросы ID">
							<RequestsId
								isAuth={isAuth}
								changeUserPopup={changeUserPopup}
								setСhangeId={setСhangeId}
							/>
						</Tab>
					</Tabs>
				</>
				: null
			}

		</div>
	);
};

export default Lk;