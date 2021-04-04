import axios from "axios";
import {urlBack} from "../../config/config"
import {setUser} from "./UserActions";
import {fetchRequests, fetchUsers} from "./AdminActions";

export const changeField =  (data) => {
	return async dispatch => {
		try {
			const {name, value} = data
			const response = await axios.post(`${urlBack}/api/change`, {
				[name]: value
			}, {headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}})
			return dispatch(setUser(response.data.user))
		}
		catch (e) {
			console.log(e)
		}
	}
}

export const changeId = () => {
	return async dispatch => {
		try {
			const response = await axios.post(`${urlBack}/api/change/change-id`,{}, {headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}})
			if (response.data.messageAllready) {
				alert("Ваша заявка уже принята")
			} else {
				alert("Спасибо, мы приняли Вашу заявку")
				dispatch(fetchRequests())
			}
		}
		catch (e) {
			console.log(e)
		}
	}
}

export const avatarUser = file => {
	return async dispatch => {
		try {
			const formData = new FormData()
			formData.append('file', file)

			const response = await axios.post(`${urlBack}/api/user/avatar`, formData, {headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}})
			dispatch(setUser(response.data.user))
		}
		catch (e) {
			console.log(e)
		}
	}
}

export const deleteAvatar = () => {
	return async dispatch => {
		try {
			const response = await axios.delete(`${urlBack}/api/user/delete-avatar`, {headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}})
			dispatch(setUser(response.data.user))
			dispatch(fetchUsers())
		}
		catch (e) {
			console.log(e)
		}
	}
}




