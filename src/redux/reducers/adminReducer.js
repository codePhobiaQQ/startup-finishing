import {FETCH_ALL_TEXT_MAIN, FETCH_ALL_USERS, FETCH_REQUESTS_ID, UPDATE_USERS} from "../types/HeaderTypes";

const initialState = {
	usersList: [],
	textsList: {},
	requestsList: []
}

export const AdminReducers = (state = initialState, action) => {
	switch (action.type) {

		case FETCH_ALL_USERS:
			return {...state, usersList: action.payload}

		case FETCH_ALL_TEXT_MAIN:
			return {...state, textsList: action.payload}

		case FETCH_REQUESTS_ID:
			return {...state, requestsList: action.payload}

		// case UPDATE_USERS:
		// 	const oldList = state.usersList
		// 	console.log('ahah' ,action.payload)
		// 	const userId = oldList.find(user => user.email == action.payload.email)
		// 	console.log(userId)
		// 	return {...state,
		// 		requestsList: action.payload
		// 	}

		default: return state
	}
}