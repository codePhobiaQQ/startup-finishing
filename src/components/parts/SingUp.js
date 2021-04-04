import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {shawLogIn} from "../../redux/actions/HeaderActions";
import {urlBack} from "../../config/config";

const SingUp = props => {

	const dispatch = useDispatch()
	const title = useSelector(state => state.AdminReducers.textsList["RegisterText"])
	const Bg = useSelector(state => state.AdminReducers.textsList["ImgRegisterBg"])


	return (
		<div className="signup"
				 style={{
					 backgroundImage: `url('${urlBack + '/' + Bg}')`,
				 }}
		>
			<div className="signup_wrapper">
				<div className="signup_title">
					{title}
				</div>
				<div
					className="signup_btn"
					onClick={() => dispatch(shawLogIn())}
				>
					Зарегистрироваться
				</div>
			</div>
		</div>
	);
};

// <div className="modal">
//   <div className="modal_wrapper">
//     <div className="modal_close"></div>
//     <div className="modal_title">Регистрация</div>
//     <div className="modal_container">
//       <form action="#">
//         <input type="text" name="full-name" id="full-name" placeholder="ФИО" />
//         <input type="text" name="socila-page" id="social-page" placeholder="" />
//         <input type="tel" name="phone_modal" id="phone_modal"
//                placeholder="Номер телефона (видно только Вам)" />
//         <div className="email">
//           <input type="email" name="email" id="email" placeholder="Email" />
//           <input type="email" name="email-confirm" id="email-confirm" placeholder="Подтвердить Email" />
//         </div>
//         <div className="age">
//           <input type="text" name="sex" id="sex" placeholder="Пол" />
//           <input type="text" name="age" id="age" placeholder="Возраст" />
//         </div>
//         <input type="text" name="location" id="location"
//                placeholder="Место жительства (Населенный пункт)" />
//         <div className="check_age">
//           <input className="radio-btn" type="radio" name="age16" id="age16" />
//           <label htmlFor="age16">Вы действительно старше 16 лет</label>
//         </div>
//         <button className="modal_submit" type="submit">Зарегистрироваться</button>
//       </form>
//     </div>
//   </div>
// </div>

export default SingUp;