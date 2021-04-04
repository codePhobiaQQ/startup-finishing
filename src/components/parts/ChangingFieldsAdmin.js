import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllTextsHome, setImgHome} from "../../redux/actions/AdminActions";
import {AdminReducers} from "../../redux/reducers/adminReducer";
import {setWhatOpen} from "../../redux/actions/UserActions";
import {avatarUser} from "../../redux/actions/ChangeFieldAction";

const ChangingFieldsAdmin = props => {

	const dispatch = useDispatch()
	const allTextFields = useSelector(state => state.AdminReducers.textsList)

	const clickHandler = (el) => {
		dispatch(setWhatOpen("changeHomePageText"))
		props.changeUserPopup(el)
	}

	useEffect( async () => {
		const allTexts = await dispatch(fetchAllTextsHome())
	}, [])

	const photoClickHandler = async data => {
		const file = data.file.target.files[0]
		await dispatch(setImgHome({file, name: data.name}))
		// await dispatch(avatarUser(file))
	}

	return (
		<>
			<div className="homeFieldWrapper">
				{Object.keys(allTextFields).map((el, index) => {
					return (
						el.substr(0,3) != "Img"
							? <div className="homeField" key={index}>
									<span>{el}:</span>
									<span>{allTextFields[el]}</span>
									<button onClick={() => clickHandler(el)}>Изменить</button>
								</div>
							: <div className="homeField" key={index}>
									<span>{el}:</span>
									<span>{allTextFields[el]}</span>
									<input
										onChange={(file) => photoClickHandler({file, name: el})}
										type="file"
										accept="image/*"
									/>
								</div>
					)
				})}
			</div>

		</>
	);
};

export default ChangingFieldsAdmin;