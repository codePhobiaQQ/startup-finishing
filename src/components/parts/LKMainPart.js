import React from 'react';
import avatarDefault from "../../static/img/avatarDefault.jpg";
import {useDispatch, useSelector} from "react-redux";
import {UserReducer} from "../../redux/reducers/UserReducer";
import {setWhatOpen} from "../../redux/actions/UserActions";
import {avatarUser, changeId, deleteAvatar} from "../../redux/actions/ChangeFieldAction";
import {urlBack} from "../../config/config"

const LkMainPart = props => {
	const avatar = !!props.isAuth.currentUser.photo ? `${urlBack + "/" + props.isAuth.currentUser.photo}` : avatarDefault

	// const whatOpen = useSelector(state => state.UserReducer.whatOpen)
	const dispatch = useDispatch()

	const clickHandler = (el) => {
		dispatch(setWhatOpen("userFields"))
		props.changeUserPopup(el)
	}

	const photoClickHandler = async (el) => {
		const file = el.target.files[0]
		await dispatch(avatarUser(file))
	}

	const reqId = () => {
		dispatch(changeId())
	}

	return (
		<>
			<h2 className='lkTitle'>Личный кабинет</h2>
			<div className="lkContainer">
				<img src={avatar} alt="avatar"/>
				<div className="infoTable">
					<h3>Персональные данные</h3>

					<div className="d-flex info-input info-input-photo">
						<>
							<div>
								<span>photo:</span>
								<span className="photoSpan">{props.isAuth.currentUser.photo}</span>
							</div>

							<input
								onChange={(el) => photoClickHandler(el)}
								type="file"
								accept="image/*"
							/>

							{props.isAuth.currentUser.photo != null
								? <button onClick={() => dispatch(deleteAvatar())}>Удалить</button>
								: null
							}
						</>
					</div>
					{Object.keys(props.isAuth.currentUser).map((el, key) => {
						return (
							<>
								{ el == 'role'
									? null
									: <> {el != "password" && el != "photo" && el != "__v" && el != "_id" ?
									    <div key={key} className="d-flex info-input">
												<>
													<span>{el}:</span>
													<span>{props.isAuth.currentUser[el]}</span>
													{el != 'ID' &&
													<button
														onClick={() => clickHandler(el)}
													>
														Изменить
													</button>}
												</>
											</div>
										: null}
										</>
								}
							</>
						)
					})}
				</div>
			</div>
			<div className="ButtonsWrapper">
				<button onClick={() => reqId()}>Запросить изменение ID</button>
				<button>Купить</button>
			</div>
		</>
	);
};

export default LkMainPart;