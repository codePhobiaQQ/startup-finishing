import {
	LOGOUT, SET_FIND_USER,
	SET_USER, SET_WHAT_OPEN
} from "../types/HeaderTypes";
import axios from "axios";
import {urlBack} from "../../config/config"
import {hideAuth, toggleMenu} from "./HeaderActions";

export const setUser = user => ({ type: SET_USER, payload: user})
export const setFindUser = user => ({ type: SET_FIND_USER, payload: user})
export const setWhatOpen = what => ({ type: SET_WHAT_OPEN, payload: what})
export const closeLk = () => ({type: LOGOUT})



export const registration = async (data) => {
	try {
		const [name, soclink, tel, email, sex, age, password, address, ID] = data
		const response = await axios.post(`${urlBack}/api/auth/registration`, {
			name, soclink, tel, email, sex, age, password, address, ID
		})
		alert(response.data.message)
	}
	catch (e) {
		alert(e)
	}
}

export const auth = (data) => {
	return async dispatch => {
		try {
			const [email, password] = data
			const response = await axios.post(`${urlBack}/api/auth/auth`, {
				email, password
			})

			dispatch(toggleMenu())
			dispatch(hideAuth())
			dispatch(setUser(response.data.user))

			localStorage.setItem('token', response.data.token)
		} catch (e) {
			alert(e)
			return 0
		}
	}
}

export const logToken = () => {
	return async dispatch => {
		try {
			const response = await axios.get(`${urlBack}/api/auth/token`,
				{headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}})
			localStorage.setItem('token', response.data.token)
			dispatch(setUser(response.data.user))
			return response.data.user
		} catch (e) {
			localStorage.removeItem('token')
		}
	}
}

export const find = (data) => {
	return async dispatch => {
		try {
			const response = await axios.post(`${urlBack}/api/auth/find`, {data},
				{headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}})
			if (response.data.message) {
				return alert("Такого пользователя нет")
			} else {
				dispatch(setFindUser(response.data.user))
				return true
			}
		} catch (e) {
			console.log(e)
			alert(e)
		}
	}
}

export const exit = () => {
	return dispatch => {
		document.querySelector('body').style.overflow = 'visible'
		dispatch(closeLk())
		dispatch(toggleMenu())
	}
}



