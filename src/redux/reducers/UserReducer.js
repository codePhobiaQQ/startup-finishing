import {
	CHANGE_INPUT,
	LOGOUT, SET_FIND_USER,
	SET_USER, SET_WHAT_OPEN
} from "../types/HeaderTypes";

const initialState = {
	isAuth: false,
	whatOpen: "",
	currentUser: {},
	foundUser: {}
}

export const UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return {...state, currentUser: action.payload, isAuth: true }
		case SET_WHAT_OPEN:
			return {...state, whatOpen: action.payload }
		case LOGOUT:
			localStorage.removeItem('token')
			return {...state, currentUser: {}, isAuth: false}
		case CHANGE_INPUT:
			return {...state, currentUser: {}, isAuth: false}
		case SET_FIND_USER:
			return {...state, foundUser: action.payload}
		default: return state
	}
}