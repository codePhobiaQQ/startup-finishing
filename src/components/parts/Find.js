import React, {useState} from 'react';
import man from "../../static/img/man.svg";
import {useDispatch, useSelector} from "react-redux";
import {find} from "../../redux/actions/UserActions";
import {urlBack} from "../../config/config";

const Find = props => {

	const findText = useSelector(state => state.AdminReducers.textsList["InputText"])
	const Bg = useSelector(state => state.AdminReducers.textsList["ImgMainSectionBg"])

	const [inputText, setInputText] = useState("")
	const dispatch = useDispatch()

	const onChangeHandler = (el) => {
		setInputText(el.target.value)
	}
	const clickHandler = async el => {
		try {
			el.preventDefault()
			const response = await dispatch(find(inputText))
			if (response) {
				props.setModalFind(true)
			}
		} catch (e) {

		}

	}

	return (
		<div className="header_form"
			style={{
				backgroundImage: `url('${urlBack + '/' + Bg}')`,
			}}
		>
			<div className="form_wrapper">
				<div className="container">
					<div className="form_container">
						<div className="form_title">
							{findText}
						</div>
						<form className="form_id">
							<div className="input_id">
								<input value={inputText} onChange={(el) => onChangeHandler(el)} type="text" name="idNumber" id="idNumber" placeholder="Номер ID"/>
								<img className="placeholder" src={man} alt="" />
								<button onClick={(el) => clickHandler(el)} className="btn_form_id">Поиск</button>
							</div>
						</form>
					</div>
				</div>
				<div className="social_links">
					<div className="vk">
						<a href="#">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0)">
									<path
										d="M16.5958 10.8566C16.2725 10.4483 16.365 10.2666 16.5958 9.90163C16.6 9.89746 19.2692 6.20913 19.5442 4.95829L19.5458 4.95746C19.6825 4.50163 19.5458 4.16663 18.885 4.16663H16.6983C16.1417 4.16663 15.885 4.45413 15.7475 4.77579C15.7475 4.77579 14.6342 7.44079 13.0592 9.16829C12.5508 9.66746 12.3158 9.82746 12.0383 9.82746C11.9017 9.82746 11.6892 9.66746 11.6892 9.21163V4.95746C11.6892 4.41079 11.5333 4.16663 11.0725 4.16663H7.63417C7.285 4.16663 7.0775 4.42163 7.0775 4.65913C7.0775 5.17746 7.865 5.29663 7.94667 6.75496V9.91913C7.94667 10.6125 7.82083 10.74 7.54167 10.74C6.79833 10.74 4.99417 8.06413 3.925 5.00163C3.70917 4.40746 3.49833 4.16746 2.9375 4.16746H0.75C0.125833 4.16746 0 4.45496 0 4.77663C0 5.34496 0.743333 8.17079 3.45667 11.9041C5.265 14.4525 7.81167 15.8333 10.1283 15.8333C11.5208 15.8333 11.6908 15.5266 11.6908 14.9991C11.6908 12.5641 11.565 12.3341 12.2625 12.3341C12.5858 12.3341 13.1425 12.4941 14.4425 13.7233C15.9283 15.1808 16.1725 15.8333 17.0042 15.8333H19.1908C19.8142 15.8333 20.13 15.5266 19.9483 14.9216C19.5325 13.6491 16.7225 11.0316 16.5958 10.8566Z"
										fill="white" fill-opacity="0.9"/>
								</g>
								<defs>
									<clipPath id="clip0">
										<rect width="20" height="20" fill="white"/>
									</clipPath>
								</defs>
							</svg>
						</a>
					</div>
					<div className="inst">
						<a href="#">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0)">
									<path
										d="M10.0034 4.86499C7.16754 4.86499 4.8717 7.16332 4.8717 9.99666C4.8717 12.8325 7.17004 15.1283 10.0034 15.1283C12.8392 15.1283 15.135 12.83 15.135 9.99666C15.135 7.16082 12.8367 4.86499 10.0034 4.86499ZM10.0034 13.3275C8.16254 13.3275 6.67254 11.8367 6.67254 9.99666C6.67254 8.15666 8.16337 6.66582 10.0034 6.66582C11.8434 6.66582 13.3342 8.15666 13.3342 9.99666C13.335 11.8367 11.8442 13.3275 10.0034 13.3275Z"
										fill="white" fill-opacity="0.9"/>
									<path
										d="M14.1233 0.0636157C12.2833 -0.0222177 7.72578 -0.018051 5.88411 0.0636157C4.26578 0.139449 2.83828 0.530282 1.68745 1.68112C-0.235888 3.60445 0.00994525 6.19612 0.00994525 9.99695C0.00994525 13.8869 -0.206721 16.4186 1.68745 18.3128C3.61828 20.2428 6.24745 19.9903 10.0033 19.9903C13.8566 19.9903 15.1866 19.9928 16.5491 19.4653C18.4016 18.7461 19.7999 17.0903 19.9366 14.1161C20.0233 12.2753 20.0183 7.71862 19.9366 5.87695C19.7716 2.36612 17.8874 0.236949 14.1233 0.0636157ZM17.0358 17.0403C15.7749 18.3011 14.0258 18.1886 9.97911 18.1886C5.81245 18.1886 4.14161 18.2503 2.92245 17.0278C1.51828 15.6303 1.77245 13.3861 1.77245 9.98361C1.77245 5.37945 1.29995 2.06362 5.92078 1.82695C6.98245 1.78945 7.29495 1.77695 9.96745 1.77695L10.0049 1.80195C14.4458 1.80195 17.9299 1.33695 18.1391 5.95695C18.1866 7.01112 18.1974 7.32778 18.1974 9.99612C18.1966 14.1144 18.2749 15.7953 17.0358 17.0403Z"
										fill="white" fill-opacity="0.9"/>
									<path
										d="M15.3383 5.86165C16.0006 5.86165 16.5375 5.32477 16.5375 4.66248C16.5375 4.0002 16.0006 3.46332 15.3383 3.46332C14.676 3.46332 14.1392 4.0002 14.1392 4.66248C14.1392 5.32477 14.676 5.86165 15.3383 5.86165Z"
										fill="white" fill-opacity="0.9"/>
								</g>
								<defs>
									<clipPath id="clip0">
										<rect width="20" height="20" fill="white"/>
									</clipPath>
								</defs>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Find;