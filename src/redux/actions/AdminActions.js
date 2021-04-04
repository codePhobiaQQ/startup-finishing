import axios from "axios";
import {urlBack} from "../../config/config"
import {FETCH_ALL_TEXT_MAIN, FETCH_REQUESTS_ID, UPDATE_USERS} from "../types/HeaderTypes";
import {setUser} from "./UserActions";

export const fetchUsers = () => {
	return async dispatch => {
		try {
			const response = await axios.get(`${urlBack}/api/admin/fetch`,
				{headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}})
			return response.data
		} catch (e) {
			console.log(e)
		}
	}
}

const fetchTextsToRedux = data => {
	return {
		type: FETCH_ALL_TEXT_MAIN,
		payload: data
	}
}

export const fetchAllTextsHome = () => {
	return async dispatch => {
		try {
			const response = await axios.get(`${urlBack}/api/admin/text-fetch`)
			dispatch(fetchTextsToRedux(response.data.message))
			return response
		} catch (e) {
			alert(e.message)
		}
	}
}

export const setTextsHome = (data) => {
	return async dispatch => {
		try {
			const {name, value} = data
			const response = await axios.post(`${urlBack}/api/admin/text`, {[name]: value},
				{headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}})
			dispatch(fetchTextsToRedux(response.data.message))
			return response
		} catch (e) {
			alert(e.message)
		}
	}
}

export const setImgHome = data => {
	return async dispatch => {
		try {
			const formData = new FormData()
			formData.append('file', data.file)
			formData.append('name', data.name)

			const response = await axios.post(`${urlBack}/api/admin/photo`, formData, {headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}})
			dispatch(fetchTextsToRedux(response.data.message))

		} catch (e) {
			console.log(e)
		}
	}
}

const fetchRequestsToState = (data) => {
	return {
		type: FETCH_REQUESTS_ID,
		payload: data
	}
}

export const fetchRequests = () => {
	return async dispatch => {
		try {
			const response = await axios.get(`${urlBack}/api/admin/take-change-id`, {headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}})
			dispatch(fetchRequestsToState(response.data.message))
		} catch (e) {
			alert(e.message)
		}
	}
}

const updateUsers = user => {
	return {
		type: UPDATE_USERS,
		payload: user
	}
}

export const aplyRequest = (data) => {
	return async dispatch => {
		try {
			const response = await axios.post(`${urlBack}/api/admin/aply-id`, {data}, {headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}})
			dispatch(fetchRequests())
			// dispatch(updateUsers(response.data.message))
			// dispatch(fetchUsers())
		} catch (e) {
			alert(e.message)
		}
	}
}

